# Migrating From v6 To v7

Foundation 7 is a ground-up rewrite. The library was split into platform modules, the text system moved to [Adventure](https://docs.advntr.dev/) with MiniMessage support, and BungeeCord and Velocity became first-class platforms. This page covers everything you need to port a v6 plugin.

::: warning Requirements
* **Java 21** is the new minimum, both for compiling and on the server (v6 ran on Java 8).
* **Minecraft 1.8.8** or newer. Older versions need a Java 21 capable server fork.
:::

## 1. Update Your pom.xml

v6 shipped a single `Foundation` artifact. v7 is split into modules, you depend on the one matching your platform:

| Module | Use for |
|--------|---------|
| `foundation-bukkit` | Bukkit, Spigot, Paper and Folia plugins |
| `foundation-bungee` | BungeeCord plugins |
| `foundation-velocity` | Velocity plugins |
| `foundation-core` | Shared code, already bundled inside each platform module |

```xml
<!-- v6 -->
<dependency>
    <groupId>com.github.kangarko</groupId>
    <artifactId>Foundation</artifactId>
    <version>6.10.0</version>
</dependency>

<!-- v7 -->
<dependency>
    <groupId>com.github.kangarko.Foundation</groupId>
    <artifactId>foundation-bukkit</artifactId>
    <version>7.0.0</version>
</dependency>
```

In your shade configuration, update the include to the new artifact name. The platform module already contains core, so one include is enough. The relocation stays mandatory and unchanged:

```xml
<artifactSet>
    <includes>
        <include>com.github.kangarko.Foundation:foundation-bukkit*</include>
    </includes>
</artifactSet>
<relocations>
    <relocation>
        <pattern>org.mineacademy.fo</pattern>
        <shadedPattern>your.plugin.package.lib</shadedPattern>
    </relocation>
</relocations>
```

See the [PluginTemplate pom.xml](https://github.com/kangarko/PluginTemplate/blob/master/pom.xml) for a complete working example.

## 2. Update Your Main Class

`SimplePlugin` was renamed to `BukkitPlugin` and moved to a new package. Proxy plugins extend `BungeePlugin` or `VelocityPlugin` instead.

```java
// v6
import org.mineacademy.fo.plugin.SimplePlugin;

public final class MyPlugin extends SimplePlugin {

// v7
import org.mineacademy.fo.platform.BukkitPlugin;

public final class MyPlugin extends BukkitPlugin {
```

The lifecycle methods `onPluginLoad()`, `onPluginStart()`, `onPluginStop()`, `onPluginPreReload()` and `onPluginReload()` are unchanged. Renamed or removed overrides:

| v6 | v7 |
|----|----|
| `onReloadablesStart()` | Removed, move the code to `onPluginStart()`. `@AutoRegister` handles re-registration on reload |
| `getMetricsPluginId()` | `getBStatsPluginId()` |
| `getMainCommand()` / `setMainCommand()` | `getDefaultCommandGroup()` / `setDefaultCommandGroup()` |
| `getBungeeCord()` / `setBungeeCord()` | `getDefaultProxyListener()` / `setDefaultProxyListener()` |
| `getUpdateCheck()` with `SpigotUpdater` | `getBuiltByBitId()` and `getBuiltByBitSharedToken()` |
| `getMinimumVersion()` / `getMaximumVersion()` | Removed, 1.8.8 is enforced automatically |
| `getLibraries()` | `loadLibrary("groupId", "artifactId", "version")` |

## 3. Fix Renamed Imports

The most common import changes, in the order you will likely hit them:

| v6 | v7 |
|----|----|
| `org.mineacademy.fo.plugin.SimplePlugin` | `org.mineacademy.fo.platform.BukkitPlugin` |
| `org.mineacademy.fo.remain.CompChatColor` | `org.mineacademy.fo.model.CompChatColor` |
| `org.mineacademy.fo.remain.CompToastStyle` | `org.mineacademy.fo.model.CompToastStyle` |
| `org.mineacademy.fo.bungee.*` | `org.mineacademy.fo.proxy.*` |
| `org.mineacademy.fo.BungeeUtil` | `org.mineacademy.fo.ProxyUtil` |
| `org.mineacademy.fo.settings.SimpleLocalization` | `org.mineacademy.fo.settings.Lang` |
| `org.mineacademy.fo.menu.MenuPagged` | `org.mineacademy.fo.menu.MenuPaged` |

Everything else, such as `Remain`, `CompMaterial`, `Menu`, `YamlConfig`, `SimpleSettings`, `SimpleDatabase` or `Valid`, keeps its name and package.

## 4. Replace Removed Classes

| Removed in v7 | Use instead |
|---------------|-------------|
| `StrictList`, `StrictMap`, `StrictSet` | Plain `java.util` `List`, `Map`, `Set` |
| `Common.colorize()` | Not needed, all `tell` methods translate colors. For raw conversion use `SimpleComponent.fromMiniAmpersand()` |
| `Common.runLater()` / `Common.runAsync()` | `Platform.runTask()` / `Platform.runTaskAsync()` |
| `Replacer` | `Variables.builder()` |
| `BoxedMessage` | `Common.tellBoxed()` |
| `SimpleTask` | `Task`, returned by `Platform.runTask*()` methods |
| `SpigotUpdater` | `getBuiltByBitId()` in your main class |
| `SimpleFlatDatabase` | `SimpleDatabase`, now with connection pooling and a `Row` API |
| `CompBarColor`, `CompBarStyle` | Adventure `BossBar.Color`, `BossBar.Overlay` |
| `SkullCreator` | `ItemCreator.fromPlayerSkull()` |
| `TabUtil` | `completeLastWord()` in your command classes |
| `PacketUtil` | `PacketListener` model class, requires the PacketEvents plugin |

## 5. Sending Messages

This is the biggest day-to-day change. All message methods now accept legacy `&` codes **and** MiniMessage tags together, so your old strings keep working:

```java
// v6
Common.tell(sender, "&cHello " + player.getName());

// v7, both of these work
Common.tell(sender, "&cHello " + player.getName());
Common.tell(sender, "<red>Hello " + player.getName());
```

`Messenger` methods now take a `FoundationPlayer` instead of a `CommandSender`. Wrap Bukkit senders with `Platform.toPlayer()`:

```java
// v6
Messenger.error(sender, "&cSomething failed!");

// v7
Messenger.error(Platform.toPlayer(sender), "Something failed!");
```

`FoundationPlayer` also replaces the old `Remain` senders: `Remain.sendTitle()` becomes `audience.showTitle()`, `Remain.sendActionBar()` becomes `audience.sendActionBar()` and boss bars use `audience.showBossbarTimed()`.

Variable replacement moved to a builder:

```java
// v6
String replaced = Variables.replace(message, player);

// v7
String replaced = Variables.builder(Platform.toPlayer(player)).replaceLegacy(message);
```

## 6. Update Your Commands

In `SimpleCommand` and `SimpleSubCommand`, the `sender` field was replaced by `audience`, a `FoundationPlayer` that works on every platform:

```java
// v6
this.tell("Your name: " + this.sender.getName());

// v7
this.tell("Your name: " + this.audience.getName());
Player player = this.audience.getPlayer();
```

The helpers you know, `checkConsole()`, `checkPerm()`, `checkBoolean()`, `returnTell()`, `tellSuccess()`, `completeLastWord()` and friends, are unchanged.

## 7. Migrate Localization

v6 used YAML files in `localization/messages_en.yml`. v7 uses flat JSON files in `lang/`, for example `lang/en_US.json` in your JAR resources:

```json
{
    "player-not-online": "<red>Player {player} is not online.",
    "arena-joined": "You joined arena {arena}."
}
```

Keys are flat kebab-case, values support MiniMessage and `{placeholder}` variables:

```java
// v6
String message = Lang.of("Player.Not_Online", "{player}", name);

// v7
SimpleComponent message = Lang.component("player-not-online", "player", name);
String legacy = Lang.legacy("player-not-online", "player", name);
```

The `Locale` key in settings.yml now takes a full locale: change `Locale: en` to `Locale: en_US`. In `SimpleSettings`, `PLUGIN_PREFIX` is now `PREFIX` and `LOCALE_PREFIX` is now `LOCALE`.

## 8. Menus, Items, Proxy

* `MenuPagged` was renamed to `MenuPaged`.
* `ItemCreator` factories renamed from `of*` to `from*`: `ItemCreator.of()` is now `ItemCreator.from()`, `ofEgg()` is now `fromMonsterEgg()`. The final `make()` call is unchanged.
* Proxy messaging moved from the `bungee` package to `proxy` and works on Velocity too: `BungeeListener` is now `ProxyListener`, `BungeeMessageType` is now `ProxyMessage`, and `BungeeUtil.sendPluginMessage()` is now `ProxyUtil.sendBungeeMessage()`.
* `@AutoRegister` works as before, but annotated classes must now be `final`.

## Getting Help

Compare your build against [PluginTemplate](https://github.com/kangarko/PluginTemplate) or study migrated open source examples in the [Foundation GitHub issues](https://github.com/kangarko/Foundation/issues) where you can also ask questions.
