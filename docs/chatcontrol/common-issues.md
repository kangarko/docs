# Common Issues

## Important:

::: danger Critical Information
<div class="critical-info">
  <div class="critical-item">
    <div class="critical-number">1</div>
    <div class="critical-text">No support for PlugMan or /reload. Always restart if having issues.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">2</div>
    <div class="critical-text">Use a <a href="/general/use-right-encoding">compatible text editor</a> when editing yml files.</div>
  </div>
</div>

<details class="critical-advanced">
<summary>Using a proxy or remote database? Read these too.</summary>

<div class="critical-info" style="margin-top: 12px;">
  <div class="critical-item">
    <div class="critical-number">3</div>
    <div class="critical-text">If using proxy: Use the SAME ChatControl version on all servers. Use the SAME Server_Name as in velocity.toml (<strong>case sensitive</strong>) or bungee's config.yml.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">4</div>
    <div class="critical-text">If using remote database: Your db MUST support the "utf8mb4" charset (use utf8mb4_unicode_520_ci). See this <a href="https://stackoverflow.com/questions/1814532/1071-specified-key-was-too-long-max-key-length-is-767-bytes">StackOverflow</a> issue for solutions.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">5</div>
    <div class="critical-text">BungeeCord: Using <code>&lt;lang&gt;</code>, <code>&lt;font&gt;</code> and <code>&lt;selector&gt;</code> will disconnect modern clients. This was reported when the backend server was 1.8.8 running ViaVersion.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">6</div>
    <div class="critical-text">Minecraft 1.8.8: Confirmed to work with MariaDB but breaks with MySQL 8.0. Minecraft 1.17 and higher works with MySQL 8.0.</div>
  </div>
</div>

</details>
:::

<div class="section-container chat-section">

## 💬 Chat {#chat-section}

### 1.19+: "Chat validation error"
![Chat validation error screenshot](/images/chatcontrol/24QKeeB.png)

::: warning Solution
Set `enforce-secure-profile` to `false` in `server.properties` (in your root server folder, next to your .jar file) while the server is stopped, then start it again.
:::

### 1.19+: Chat reporting / "This message is not secure"
::: info
We send all messages as "system chat" so they cannot be reported. The "not secure" warning is harmless and can be ignored.
:::

### 1.16+: Using HEX/RGB colors
::: tip
Use MiniMessage syntax: `<#123456>`. Legacy `&c` still works. Since ChatControl 11, chat requires the MiniMessage `<#132456>` syntax regardless of Performance options. [Color generator here](https://htmlcolorcodes.com/).
:::

### /chc color is not applied to chat
Write `{player_chat_color}` and `{player_chat_decoration}` to format used in the channel you are writing to in formats/ folder before the `{message}` to apply chat colours to the message. Example:

```yml
  message: 
    Message: "&7:&r`{player_chat_color}{player_chat_decoration}{message}`"
```

### Toasts: How to edit "Goal Reached" for toast notifications?
![Toast notification screenshot](/images/chatcontrol/EHORs3y.png)

::: info
The "Goal Reached" header is hardcoded by Minecraft. You can only customize the text and icon that follow it.
:::

### Toasts: Private messages notifications spam the chat!
::: tip
Run `/gamerule announceAdvancements false`.
:::

### Language messages don't change after /chc reload?
::: warning
Restart the server — some messages require a clean start.
:::

### How can I turn off automatic channel join/spy for ops?
::: tip
Give yourself or your group negative `chatcontrol.channel.autojoin.{channel}.{mode}` permission. Replace `{channel}` with channel name and `{mode}` with `write`/`read`, or use `chatcontrol.channel.autojoin.*` to disable all.
:::

### Players can speak when muted (e.g. using BanManager / LiteBans)
::: warning
Set `Chat_Listener_Priority` to `HIGH` in settings.yml and restart. This makes ChatControl check chat after the mute plugin, so it respects the mute. See [Listener Priorities](./listener-priorities) for other plugin combinations.
:::

### My emoticons :) are just showing as ? / Special characters not working
![Emoji issue screenshot](/images/chatcontrol/DIZsbfN.png)

::: warning
1. Use a [compatible text editor](../general/use-right-encoding).
2. Wrap messages containing emojis in quotes `""` in yml files.
:::

### The `<center>` prefix doesn't center properly with special characters
::: info
Known limitation of the centering library. PRs welcome: https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/ChatUtil.java
:::

### I can't see join/quit messages, even though they were properly enabled!
::: warning
Check `Messages.Apply_On` in settings.yml includes the right message types. On a proxy, ensure only one side (proxy or backend) handles them — see [Proxy vs backend](#proxy-vs-backend-which-server-handles-joinquit-messages) below.
:::

</div>

<div class="section-container commands-section">

## ⌨️ Commands {#commands-section}

### The vanilla `/msg` is conflicting with the ChatControl `/msg` command
::: tip
See our guide on [fixing conflicting commands.](./conflicting-commands)
:::

### '/chc' is interfering with another plugin! (e.g ChestCommands)!
::: tip
Remove chc from **Command_Aliases** in settings.yml. Add your own alias instead.
:::

```yaml
Command_Aliases: [chatcontrol, chc, anotheralias]
```

### How to only announce subtitle with /chc announce?
::: tip
Send "/chc announce title |my subtitle message" (note the | before the message).
:::

### /tell and /reply is causing lag!
::: warning
If Toast notifications are enabled (`Private_Messages.Toasts`), they cause lag since advancements must be written to file and deleted. You can also remove `private_message` from Spy/Log `Apply_On` sections.
:::

### How to private message vanished players or players who ignored you or toggled off PMs?
::: tip
Give yourself chatcontrol.bypass.reach permission.
:::

### ChatControl breaks Towny command /t!
::: warning
1. Remove the "t" alias from Private_Messages.Tell_Aliases in settings.yml
2. Place the following command alias in commands.yml in your root server folder:
:::

![Towny command configuration](/images/chatcontrol/PuNbrBh.png)

### ChatControl won't override /w or other aliases for private messages!
::: tip
Add
```
aliases:
  w:
  - []
```
to commands.yml in server directory to fix this.
:::

</div>

<div class="section-container antispam-section">

## 🛡️ Antispam And Rules {#antispam-section}

### How to edit antispam messages ('You have to wait X seconds', 'Please do not post the same or similar message', etc.)?
::: tip
Edit in localization/messages_en.yml. See [Localization](../general/localization).
:::

### How to allow my server's domain or IP address in chat?
::: tip
Open rules/global.rs, find "ignore string minecraft:|youtube.com|imgur.com" and add "|yourdomain.com" at the end.
:::

### My URL / domains are broken / not clickable / all dots removed!
::: warning
1. If using Essentials, give players `essentials.chat.url` and `essentials.msg.url`
2. Don't use "Suggest_Command" in format parts — it breaks links
3. Since ChatControl 11, use MiniMessage for clickable links: `<click:open_url:'https://google.com'>link</click>`. Use https://webui.advntr.dev/ for help.
4. Set `Make_Chat_Links_Clickable` to true in the proxy settings.yml (BungeeControl/VelocityControl) for automatic chat links on your network
:::

### Rules, channels or chat don't show or show when not supposed to (Towny/Factions/Plot Squared, ...)
::: warning
Set `Chat_Listener_Priority` to `LOWEST` in settings.yml and restart. This makes ChatControl process chat before other plugins. On 1.16+, try `LOWEST-MODERN` if `LOWEST` alone doesn't work. See [Listener Priorities](./listener-priorities) for specific plugin combinations.
:::

### Rules don't work for my non-English server - I use Cyrillic / special characters but they are not matched.
::: tip
Set **Rules.Strip_Accents** to **false** in **settings.yml**.
:::

### How to prevent spamming one character or limit it to 1 repeat maximum?
::: tip
There is a default rule for that hidden in rules/chat.rs, remove # from the two lines after the first line. Edit `{3}` to change how many characters to allow.
:::

![Chat rule screenshot](/images/chatcontrol/RIRrdkj.png)

### Tab completion does not work correctly!
::: tip
Make sure you have tab-complete set to -1 in your spigot.yml.
:::

### I am getting kicked when removing messages with [X]
::: tip
Give yourself "chatcontrol.bypass.spamkick" permission.
:::

### I am getting kicked when I chat!
::: warning
If using ViaVersion, set `ProtocolLib.Enabled` to false in settings.yml.
:::

</div>

<div class="section-container color-section">

## 🎨 Colors and Formatting {#color-section}

### MiniMessage tags not working (`<underline>`, `<strikethrough>`, etc.)
Players need the corresponding permission: `chatcontrol.color.underline`, `chatcontrol.color.strikethrough`, etc. For hover/click: `chatcontrol.action.hover`, `chatcontrol.action.click`.

### Hex/RGB colors not working in placeholders
Use MiniMessage `<#123456>` format. Legacy `&#123456` may not work in all contexts since ChatControl 11.

### `&k` (obfuscated) format causing visual issues
This is Minecraft's intended behavior. Requires `chatcontrol.color.obfuscated` permission.

### `</click></hover>` parsing errors
Ensure matched open/close tags. Tags from one format part don't carry over to the next.

</div>

<div class="section-container messages-section">

## 📢 Join, Quit, Death and Timed Messages {#messages-section}

### Proxy vs backend: which server handles join/quit messages?
When using a proxy (BungeeCord/Velocity), join and quit messages can be handled at _either_ the proxy level or the backend level — but not both, or you'll get duplicates.

- **Proxy-level messages** (recommended): Set `Messages.Apply_On` in the proxy's settings.yml to include `join` and `quit`. Remove them from each backend server's settings.yml.
- **Backend-level messages**: Keep `join`/`quit` in backend settings.yml and remove from proxy. These will only show to players on the same backend server.

If you see duplicate or missing messages, check that **only one side** (proxy or backend) is configured to handle them.

### Join/quit message spam

**On a proxy network:** The most common cause is handling join/quit messages on both the proxy and backend servers. When a player switches servers, the backend sees a quit + join, causing duplicate spam. The fix: handle join/quit messages at the proxy level only (VelocityControl/BungeeControl) and remove `join`/`quit` from `Messages.Apply_On` in each backend server's settings.yml. See [Proxy vs backend](#proxy-vs-backend-which-server-handles-joinquit-messages) above.

**On a single server** (or if you already handle messages at proxy level but players spam-reconnect): Add `player delay 30 seconds` to your join.rs and quit.rs message groups. This suppresses repeated messages from the same player within 30 seconds. See the [Messages](messages) page for details.

### Lag on player join caused by PlaceholderAPI
If you notice lag spikes when players join, check if your join.rs uses heavy PlaceholderAPI placeholders. Some PAPI expansions (like database lookups or web requests) are slow and block the main thread. This is not a ChatControl bug — it's the PAPI expansion being slow. Solutions:
- Remove heavy PAPI placeholders from join.rs
- Contact the PAPI expansion author about async support
- Use `Debug` with `[performance]` to identify which placeholder is slow

### Join/switch/quit messages not showing for vanished players?

::: info
For PremiumVanish, give the `chatcontrol.bypass.reach` permission to force vanished players' messages to show. If using CMI's SpectatorOnLogin, set it to false.
:::

::: warning
`chatcontrol.bypass.reach` also lets players bypass ignore lists. Assign it **only on the proxy** to avoid unintended bypasses on Spigot.

LuckPerms proxy command: `/luckpermsbungee group <group> permission set chatcontrol.bypass.range true server:<server>`
:::

</div>

<div class="section-container discord-section">

## 🔗 Discord {#discord-section}

### Discord integration does not work / stopped working!
::: tip
Set the "Debug" option in settings.yml to "[discord]", restart, and check console messages for instructions.
:::

### Discord→Minecraft rules: operator ordering matters
When writing rules that apply to messages coming from Discord, the `match` operator must come **before** any `require perm` or other condition operators. If `require perm` is placed before `match`, the rule will try to check permissions on the Discord bot user (which has none) and silently fail.

**Wrong:**
```
require perm chatcontrol.emoji
match :smile:
then deny
```

**Correct:**
```
match :smile:
require perm chatcontrol.emoji
then deny
```

Use `ignore discord` in rules that should not apply to Discord messages, or `require discord` for Discord-only rules.

### I cannot use @ mentions or my discord plugin broke when ChatControl is installed!
::: info
We unsend and resend messages through our system for filtering. This may conflict with other Discord plugins. Toggle this in the Discord section of settings.yml.
:::

</div>

<div class="section-container placeholders-section">

## ✨ Placeholders {#placeholders-section}

### The `{server_name}` is wrong!
::: tip
If you use PlaceholderAPI with the server expansion, it will override ChatControl's placeholder. Change the server name in PlaceholderAPI's config instead.
:::

### PlaceholderAPI placeholders not working in toasts
Toast notifications have limited variable support due to how Minecraft renders advancements. Some PlaceholderAPI placeholders may not parse correctly in toasts. Test with simple variables first.

### `{}` placeholders not resolving
Ensure the variable exists in variables/ or PlaceholderAPI is installed. Check for typos.

</div>

<div class="section-container item-section">

## 📦 The [item] Variable {#item-section}

### What is [item]?
Lets players show their held item in chat with hover details (enchantments, lore). Configure in `variables/item.yml`.

### How to put brackets around the [item] variable so it shows "I hold [Stone]"?
::: tip
Adjust your Javascript in variables/item.yml slightly, here is an example:
:::

```yaml
Value: |-
    displayName();
    
    function displayName() {
      var item = player.getItemInHand();
      var itemMaterial = item.getType().toString();
      
      if (item == null || itemMaterial.equals("AIR") || itemMaterial.contains("_AIR")) 
        throw "event handled: You must be holding an item to use [item]!";
    
      var metadata = item.getItemMeta();
      
      if (metadata != null && metadata.hasDisplayName())
        return "\&8[&d" + metadata.getDisplayName() + "\&8]";
      
      var wordUtils = Java.type("org.apache.commons.lang.WordUtils");
      var name = item.getType().name().toLowerCase().replace('_', ' ').replace('_', ' ');
    
      return "\&8[&d" + wordUtils.capitalize(name) + "\&8]";
    }
```

### Server freeze or crash with [item]
Items with huge NBT (Shulker Boxes, heavily-modded items) can freeze the server. Newer `variables/item.yml` versions include a 256-character size limit. If yours doesn't, regenerate it or add the check manually.

### [item] error spam in console
If you see repeated errors about `[item]`, this is typically caused by items with incompatible NBT tags from other plugins or modded items. Enable `Debug` with `[variables]` in settings.yml to see which item is causing the issue.

### Security: click/hover tags inside [item]
::: danger Security Warning
Players could potentially craft items with display names containing MiniMessage click/hover events (e.g., `<click:run_command:'/op player'>Click me</click>`). If your server allows custom item names (via anvils or plugins), ensure you have rules in place to strip dangerous tags from item names, or disable the `[item]` variable entirely if this is a concern.
:::

### [item] not parsing with gradient/color plugins
Some third-party color plugins may conflict with the `[item]` variable parsing. Ensure ChatControl processes chat before the color plugin by adjusting your [Listener Priorities](./listener-priorities).

</div>

<div class="section-container proxy-section">

## 🌐 Proxy / VelocityControl {#proxy-section}

### VelocityControl errors when stopping the server
If you see errors about delayed shutdown when stopping a server, this is caused by pending database operations. Ensure your MySQL server is responsive and has enough connections available. This is harmless and does not affect data integrity.

### Duplicate messages with other proxy plugins (Staff++, etc.)
Ensure only ChatControl handles join/quit/switch messages. Disable equivalent messages in the other plugin, or remove the conflicting message type from `Messages.Apply_On` in the proxy settings.yml.

### Messages not showing on specific servers
Check `Messages.Ignored_Servers` in your proxy settings.yml. Also verify `Server_Name` in ChatControl's proxy.yml matches the name in your proxy configuration (case-sensitive).

### Cannot forward commands from proxy console
Set `Enable_Forward_Command: true` in proxy settings.yml and restart. This is disabled by default for security. Only the proxy console can forward commands — players cannot.

### Commands forwarded to empty servers are silently dropped
If you use `/chc forward` to send commands to another backend server and no players are on that server, the command will not execute. This is because the proxy messaging channel requires at least one connected player on the target server to relay messages. This is a BungeeCord/Velocity limitation, not a ChatControl bug.

### Toggle join/leave messages per-server on proxy
Use `ignore sender server` or `require sender server` operators in your join.rs / quit.rs files. See [Proxy](./proxy) for details.

</div>

<div class="section-container folia-section">

## ⚡ Folia {#folia-section}

### Kicked on advancement messages
Disable advancement-related messages or exclude them from `Messages.Apply_On`.

### Database caching issues
Use MySQL or MariaDB. SQLite may have more threading issues on Folia than remote database.

### General Folia compatibility
Folia support is experimental. Known limitations: some timed broadcasts may not fire, console filtering may differ, ProtocolLib features may not work. Report issues on GitHub with `[Folia]` in the title.

</div>

<div class="section-container still-stuck-section">

## 🎫 Still Stuck? {#still-stuck}

::: tip
Open a ticket on our [GitHub Issues](https://github.com/kangarko/chatcontrol/issues) — our AI assistant typically responds within minutes and can help resolve most issues on the spot.
:::

</div>

<style>
.section-container {
  margin-bottom: 30px;
  padding: 10px 30px;
  border-radius: 8px;
  border-left: 5px solid;
}

.section-container h2 {
    margin: 0;
} 

.chat-section {
  border-left-color: #42b883;
  background-color: rgba(66, 184, 131, 0.05);
}

.discord-section {
  border-left-color: #5865F2;
  background-color: rgba(88, 101, 242, 0.05);
}

.antispam-section {
  border-left-color: #f56c6c;
  background-color: rgba(245, 108, 108, 0.05);
}

.commands-section {
  border-left-color: #e6a23c;
  background-color: rgba(230, 162, 60, 0.05);
}

.messages-section {
  border-left-color: #409eff;
  background-color: rgba(64, 158, 255, 0.05);
}

.placeholders-section {
  border-left-color: #9c27b0;
  background-color: rgba(156, 39, 176, 0.05);
}

.proxy-section {
  border-left-color: #00bcd4;
  background-color: rgba(0, 188, 212, 0.05);
}

.item-section {
  border-left-color: #ff9800;
  background-color: rgba(255, 152, 0, 0.05);
}

.color-section {
  border-left-color: #e91e63;
  background-color: rgba(233, 30, 99, 0.05);
}

.folia-section {
  border-left-color: #4caf50;
  background-color: rgba(76, 175, 80, 0.05);
}

.still-stuck-section {
  border-left-color: #607d8b;
  background-color: rgba(96, 125, 139, 0.05);
}

/* Critical Information Section Styling */
.critical-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.critical-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding-bottom: 8px;
}

.critical-item:not(:last-child) {
  border-bottom: 1px solid rgba(240, 56, 56, 0.2);
}

.critical-number {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28px;
  height: 28px;
  background-color: rgba(240, 56, 56, 0.15);
  color: #f03838;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.critical-text {
  padding-top: 3px;
  line-height: 1.5;
}

.critical-text code {
  background-color: rgba(240, 56, 56, 0.1);
  padding: 2px 4px;
  border-radius: 4px;
}

.critical-text a {
  color: #f06b6b;
  text-decoration: underline;
  font-weight: 500;
}

.critical-text a:hover {
  color: #f03838;
}

/* Collapsible advanced section */
.critical-advanced {
  margin-top: 16px;
  border: 1px solid rgba(240, 56, 56, 0.2);
  border-radius: 6px;
  padding: 0 12px;
}

.critical-advanced summary {
  cursor: pointer;
  font-weight: 600;
  color: #f06b6b;
  padding: 8px 0;
}

.critical-advanced summary:hover {
  color: #f03838;
}

/* Dark mode adjustments */
.dark .section-container {
  background-color: rgba(255, 255, 255, 0.03);
}

.dark .critical-number {
  background-color: rgba(240, 56, 56, 0.25);
}

.dark .critical-item:not(:last-child) {
  border-bottom: 1px solid rgba(240, 56, 56, 0.15);
}

.dark .critical-text code {
  background-color: rgba(240, 56, 56, 0.15);
}

.dark .critical-advanced {
  border-color: rgba(240, 56, 56, 0.15);
}

h2 {
  padding-bottom: 10px;
  margin-top: 15px;
}

h3 {
  margin-top: 20px;
}
</style>
