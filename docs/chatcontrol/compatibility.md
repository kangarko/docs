# Compatibility

::: danger
Please read the [General Compatibility Guide](../general/compatibility.md) first.
:::


::: tip Troubleshooting
Most compatibility issues can be resolved by adjusting your [Listener Priorities](./listener-priorities).
:::

## Proxy
ChatControl works with BungeeControl and Velocity, see [Proxy](proxy) page.

## Redis
::: info Redis Integration
Proxy addons include Redis support for chat and data synchronization (e.g., /list command). Support for additional features is limited, but contributions are welcome as the project is now open source.
:::

## Folia

::: warning Experimental Support
ChatControl has experimental Folia support. Known limitations:
- PacketEvents features depend on PacketEvents' own Folia support
- Some timed broadcasts may not fire as expected
- MySQL is recommended over SQLite on Folia

Report Folia-specific issues on GitHub with `[Folia]` in the title.
:::

## 🌐 BungeeCord/Velocity Plugins

<div class="plugin-grid">

<div class="plugin-card">

#### 🎮 [Parties](https://www.spigotmc.org/resources/3709/) <Badge type="tip" text="Party Chat" />
Support ChatControl nicks in proxy party chat, and party chat channels on Bukkit. See [Channels](./channels).

</div>

<div class="plugin-card">

#### 👥 [Parties and friends](https://www.spigotmc.org/resources/9531) <Badge type="tip" text="Party Chat" />
Support ChatControl nicks in proxy party chat, and party chat channels on Bukkit. See [Channels](./channels).

</div>

</div>

## 🧩 Bukkit Plugins


### ⚙️ Core Integrations

<div class="plugin-grid">

<div class="plugin-card">

#### [PacketEvents](https://modrinth.com/plugin/packetevents) <Badge type="warning" text="Required for some features" />
Replaces ProtocolLib in v12+. Drop the jar into `plugins/` to enable the [X] remove button, tab features and other packet integrations. If you only used ProtocolLib for ChatControl, you can uninstall it.

</div>

<div class="plugin-card">

#### Vault <Badge type="warning" text="Required for more compatibility" />
Essential plugin to get players' data such as ranks, groups, prefixes, suffixes and permissions.

</div>

</div>


### 💬 Chat

<div class="plugin-grid">

<div class="plugin-card stretched">

#### InteractiveChat <Badge type="warning" text="Changes Required" />
To prevent conflicts with ChatControl, open their config.yml and remove `"#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])"` from the `Settings.FormattingTags.AdditionalRGBFormats` list (or set the key to `[]` to empty the list).

</div>

</div>

### 🔐 Authentication

<div class="plugin-grid">

<div class="plugin-card stretched">

#### AuthMe <Badge type="tip" text="Compatible" />
We support AuthMe by hiding the quit message if player is not logged in.

</div>

</div>

### 🚫 Moderation

<div class="plugin-grid">

<div class="plugin-card stretched">

#### AdvancedBan, BanManager, CMI, EssentialsX, LiteBans <Badge type="tip" text="Compatible" />
Mutes are honored natively when the mute plugin runs on the same backend server: muted players cannot chat, use the commands listed in `Mute.Prevent_Commands`, place signs, write books or rename items on anvils, and their join/quit/death messages are hidden. The `chatcontrol.bypass.mute` permission does not exempt players from third-party mutes. Proxy-only installs are not detected, install the mute plugin on each backend server sharing one database instead, or adjust your [Listener Priority](./listener-priorities).

</div>

</div>

### �️ Voice Chat

ChatControl bridges its mute state into both supported voice chat plugins so a single `/mute` silences a player on chat **and** voice. Bypass works the same as for chat (`chatcontrol.bypass.mute`).

Enable it in `settings.yml`:

```yaml
Voice_Chat:
  Enabled: true
  # Also mute voice when the channel a player writes to is muted.
  Mute_On_Channel_Mute: true
```

When `Enabled: true`, ChatControl auto-detects whichever of the two plugins is installed - install both, one, or neither.

<div class="plugin-grid">

<div class="plugin-card">

#### [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) <Badge type="tip" text="Auto" />
While a player is muted by ChatControl, their microphone packets are dropped server-side. Mute expires automatically with the timer - no extra config required.

</div>

<div class="plugin-card">

#### [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice) <Badge type="tip" text="Auto" />
ChatControl drives Plasmo's `MuteManager` so its own UI reflects the mute and shows the remaining duration. Server, channel, and per-player mutes are all forwarded.

</div>

</div>

### �🏠 Land Management

<div class="plugin-grid">

<div class="plugin-card">

#### BentoBox <Badge type="tip" text="Party Chat" />
Supports Party chat, see "Party" option in [Channels](./channels).

</div>

<div class="plugin-card">

#### Factions, FactionsX or FactionsUUID <Badge type="tip" text="Party Chat" />
Support for party chat, see [Channels](./channels).

</div>

<div class="plugin-card">

#### Lands <Badge type="tip" text="Party Chat" />
Support for party chat, see [Channels](./channels).

</div>

<div class="plugin-card">

#### PlotSquared <Badge type="tip" text="Party Chat" />
Support for party chat, see [Channels](./channels).

</div>

<div class="plugin-card stretched">

#### Towny and TownyChat <Badge type="tip" text="Party & Spy" />
Spying on towny chat and support for party chat, see [Channels](./channels).

</div>

</div>

### 🎉 Party Plugins

<div class="plugin-grid">

<div class="plugin-card">

#### Parties (AlessioDP) <Badge type="tip" text="Party Chat" />
Support for party chat, see [Channels](./channels).

</div>

<div class="plugin-card">

#### Party and Friends (PAF) <Badge type="tip" text="Party Chat" />
Support for party chat, see [Channels](./channels). Requires both `FriendsAPIForPartyAndFriends` and `Spigot-Party-API-PAF` installed.

</div>

</div>

### 🎮 Gameplay

<div class="plugin-grid">

<div class="plugin-card">

#### Boss and MythicMobs <Badge type="tip" text="Death Messages" />
You can print customized death messages, see [Messages](./messages) at the bottom, if player was killed by a Boss.

</div>

<div class="plugin-card">

#### mcMMO <Badge type="tip" text="Compatible" />
Spying for party chat and support for party chat, see [Channels](./channels).

::: tip Party Chat Support
ChatControl's channels system can create a channel for mcMMO party members. If mcMMO party chat is used, messages are shown to spying ChatControl players.
:::

</div>

</div>


### 📊 Server Management

<div class="plugin-grid">

<div class="plugin-card">

#### CMI <Badge type="warning" text="Changes Required" />
Support for afk, vanish status, and a few other features.

To prevent conflicts with ChatControl, open their chat.yml, set both ModifyChatFormat and ClickHoverMessages to false to prevent duplicated messages when using channels.

</div>

<div class="plugin-card">

#### Essentials <Badge type="tip" text="Compatible" />
Support for afk, vanish status, and a few other features.

</div>

<div class="plugin-card stretched">

#### Multiverse-Core <Badge type="info" text="World Names" />
We use world name aliases from Multiverse-Core in the `{world}` variable.

</div>

</div>

### 🔄 Integrations

<div class="plugin-grid">

<div class="plugin-card">

#### DiscordSRV <Badge type="info" text="Full Integration" />
Connect your channels with [Discord](./discord) and send any message to any Discord channel.

</div>

<div class="plugin-card">

#### ItemsAdder <Badge type="info" text="Font Images" />
Use the `:name:` font images in chat, formats and format hovers.

</div>

<div class="plugin-card">

#### Nexo <Badge type="info" text="Font Images" />
Auto-detected. Use Nexo `:name:` font images in chat, formats and format hovers, just like ItemsAdder.

</div>

<div class="plugin-card stretched">

#### PlaceholderAPI <Badge type="info" text="Full Integration"/>
Full support for all placeholders, see [Variables](./variables).

</div>

</div>

## 🔄 Additional Support

::: tip Vault Integration
That's not it! We support a lot more plugins than that, thanks to Vault, you can see what Vault supports here: [Vault on Bukkit Dev](https://dev.bukkit.org/projects/vault)
:::

<style>
.plugin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.plugin-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
  border-left: 3px solid var(--vp-c-brand);
  transition: transform 0.2s, box-shadow 0.2s;
}

.plugin-card.stretched {
  grid-column: 1 / -1;
  max-width: 100% !important;
}


.plugin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dark .plugin-card {
  background-color: rgba(255, 255, 255, 0.05);
}

@media (max-width: 640px) {
  .plugin-grid {
    grid-template-columns: 1fr;
  }
}
</style>