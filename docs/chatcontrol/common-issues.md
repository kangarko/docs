# Common Issues

Read this page to save hours waiting for our reply and fix common issues yourself quickly.

## Important:

::: danger Critical Information
<div class="critical-info">
  <div class="critical-item">
    <div class="critical-number">1</div>
    <div class="critical-text">No support for PlugMan or /reload. Always restart if having issues.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">2</div>
    <div class="critical-text">If using proxy: Use the SAME ChatControl version on all servers. Use the SAME Server_Name as in velocity.toml (<strong>case sensitive</strong>) or bungee's config.yml.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">3</div>
    <div class="critical-text">If using remote database: Your db MUST support the "utf8mb4" charset (use utf8mb4_unicode_520_ci). See this <a href="https://stackoverflow.com/questions/1814532/1071-specified-key-was-too-long-max-key-length-is-767-bytes">StackOverflow</a> issue for solutions.</div>
  </div>
  
  <div class="critical-item">
    <div class="critical-number">4</div>
    <div class="critical-text">Use a <a href="/use-right-encoding">compatible text editor</a> when editing yml files.</div>
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
:::

<div class="section-container chat-section">

## 💬 Chat {#chat-section}

<div class="section-description">
Common issues related to chat messages, formatting, and display problems.
</div>

---

### 1.19+: "Chat validation error"
![Chat validation error screenshot](https://i.imgur.com/24QKeeB.png)

::: warning Solution
Set `enforce-secure-profile` to `false` in `server.properties` while the server is stopped.
:::

### 1.19+: Chat reporting / "This message is not secure"
::: info Security Note
We send all messages as "system chat" so they cannot be reported to protect you privacy, sanity and freedom.

The "This message is not secure" is Microsoft's way of misinformation to get as many people as possible to enable their anti-feature and you can ignore it safely. There's no way a message can be edited (unless by our rules) if it is sent out through ChatControl.
:::

### 1.16+: Using HEX/RGB colors
::: tip Color Format
Use MiniMessage syntax: `<#123456>`. Legacy colors like `&c` are still supported. Click [here](https://htmlcolorcodes.com/) for a color generator.
**NB:** In chat, since ChatControl 11, you must use the MiniMessage `<#132456>` syntax regardless of options in Performance.
:::

### /chc color is not applied to chat
Write `{player_chat_color}` and `{player_chat_decoration}` to format used in the channel you are writing to in formats/ folder before the `{message}` to apply chat colours to the message. Example:

```yml
  message: 
    Message: "&7:&r`{player_chat_color}{player_chat_decoration}{message}`"
```

### Toasts: How to edit "Goal Reached" for toast notifications?
![Toast notification screenshot](https://i.imgur.com/EHORs3y.png)

::: info Minecraft Limitation
The Toast always starts with "Goal Reached". This is due to the nature of Minecraft. Toast notifications are not intended to be used for custom messages; they are there to show advancements and rewards. All you can customize is the text that comes afterwards and the icon (on some places only).
:::

### Toasts: Private messages notifications spam the chat!
::: tip Disable Advancements
Disable the broadcasting of advancements via the command: `/gamerule announceAdvancements false`.
:::

### Language messages don't change after /chc reload?
::: warning Server Restart Required
Restart the server, some messages cannot be changed unless you do a clean start.
:::

### How can I turn off automatic channel join/spy for ops?
::: tip Permission Solution
To disable automatically joining a channel, give yourself or your group negative `chatcontrol.autojoin.{channel}.{mode}` permission. Replace `{channel}` with your channel name. Replace `{mode}` with the mode you wish to disable (write, read), or use `chatcontrol.autojoin.*` to completely disable auto-joining.
:::

### Players can speak when muted (e.g. using BanManager / LiteBans)
See [Listener Priorities](listener-priorities) on how to fix it.

### My emoticons :) are just showing as ? / Unicodes / Special characters not working
![Emoji issue screenshot](https://i.imgur.com/DIZsbfN.png)

::: warning Text Encoding
1. Use a [compatible text editor](../general/use-right-encoding) when editing yml files.
2. Put brackets "" around the message containing emojis if it's in a yml file.

If your system's language is using a different char set such as Chinese, Russian, Greek, Turkish, etc., then it may not work, you can try googling on how to enable unicode on your operating system. We unfortunately can't help since we have no idea.
:::

### The `<center>` prefix doesn't exactly centers chat when colors/Russian/Greek etc. special characters are used!
::: info Library Limitation
Unfortunately this is the case of the free library extension we are using, anyone is encouraged to make a pull request to fix that: https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/ChatUtil.java
:::

### I can't see join/quit messages, even though they were properly enabled and I don't ignore them!
::: warning Resource Pack Setting
If you don't have any server resourcepack, make sure `Delay_Until_Resource_Pack_Loaded` is set to `false`, otherwise the plugin will try to listen for the PlayerResourcePackStatusEvent event to fire before sending these messages.

_**Spoiler Alert:** it will never fire without a server resourcepack or without a plugin that handles resourcepacks, such as ItemsAdder or Force Resourcepacks._
:::

### How to put brackets around the [item] variable so it shows "I hold [Stone]"?
::: tip Javascript Modification
You need to adjust your Javascript in variables/item.yml slightly, here is an example:
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

</div>

<div class="section-container discord-section">

## 🔗 Discord {#discord-section}

<div class="section-description">
Issues related to Discord integration and messaging.
</div>

---

### Discord integration does not work / stopped working!
::: tip Debug Mode
Set the "Debug" option in settings.yml file to "[discord]", restart your server completely (do not reload and do not use PlugMan) and notice the console message when that happens. It will give you instructions on how to fix that, or you can open a ticket and paste the messages there.
:::

### I cannot use @ mentions or my discord plugin broke when ChatControl is installed!
::: info Message Processing
When you send a message, by default we have to unsend it and send it again through our own system. This makes filtering functional but poses some limitations. You can turn this off in Discord section of settings.yml.
:::

</div>

<div class="section-container antispam-section">

## 🛡️ Antispam And Rules {#antispam-section}

<div class="section-description">
Issues with chat filtering, rule enforcement and spam protection.
</div>

---

### How to edit messages 'You have to wait X seconds before another message' or 'Please do not post the same or similar messages' or announcement format:
::: tip Localization
Edit these messages in localization/messages_en.yml. See [Localization](../general/localization) for more information.
:::

### How to allow my server's domain or IP address in chat?
::: tip Rule Modification
Open rules/global.rs, find "ignore string minecraft:|youtube.com|imgur.com" line and simply put "|yourdomain.com" at the end of it. You can separate multiple domains to ignore with "|".
:::

### My URL / domains are broken / not clickable / Ad filter doesn't work, all dots are removed! (Example: www.google.com becomes www google com)
::: warning URL Configuration
1. If you have Essentials, try adding your players `essentials.chat.url` and `essentials.msg.url` permissions
2. Make sure you don't use "Suggest_Command" in your format part as this is known to break links.
3. Since ChatControl 11, you need to use MiniMessage syntax to make links clickable in rules or formats such as `<click:open_url:'https://google.com'>https://google.com</click>`. Use https://webui.advntr.dev/ for help.
4. For chat, turn Make_Chat_Links_Clickable option in settings.yml to true to make links clickable automatically.
:::

### Rules, channels or chat don't show or show when not supposed to (Towny/Factions/Plot Squared, ...)
Please see [this](./listener-priorities) article on how to fix it.

### Rules don't work for my non-English server - I use Cyrillic / special characters but they are not matched.
::: tip Character Settings
Set **Rules.Strip_Accents** to **false** in **settings.yml**.
:::

### How to prevent spamming one character or limit it to 1 repeat maximum?
::: tip Rule Configuration
There is a default rule for that hidden in rules/chat.txt, remove # from the two lines after the first line and you be good to go. Edit `{3}` to change how many characters to allow.
:::

![Chat rule screenshot](https://i.imgur.com/RIRrdkj.png)

### Tab completion does not work correctly!
::: tip Spigot Setting
Make sure you have tab-complete set to -1 in your spigot.yml file in the root server folder.
:::

### I am getting kicked when removing messages with [X]
::: tip Permission
Give yourself "chatcontrol.bypass.spamkick" permission.
:::

### I am getting kicked when I chat!
::: warning Configuration Change
Set Channels.Prevent_Spying to false, unfortunately some setups and plugins cause issues here. If you have ViaVersion or other protocol-hack plugins, set ProtocolLib.Enabled to false. Also try disabling console filter by setting Console_Filter.Enabled to false.
:::

</div>

<div class="section-container commands-section">

## ⌨️ Commands {#commands-section}

<div class="section-description">
Issues with command handling, conflicts and configuration.
</div>

---

### The vanilla `/msg` is conflicting with the ChatControl `/msg` command
::: tip Conflict Resolution
See our guide on [how to fix conflicting commands.](./conflicting-commands)
:::

### '/chc' is interfering with another plugin! (e.g ChestCommands)!
::: tip Command Aliases
Remove chc from **Command_Aliases** in settings.yml. You can write your own command to invoke /chc there instead.
:::

```yaml
Command_Aliases: [chatcontrol, chc, anotheralias]
```

### How to only announce subtitle with /chc announce?
::: tip Command Syntax
If you only want subtitle, send "/chc announce title |my subtitle message" (see the | before the message).
:::

### /tell and /reply is causing lag!
::: warning Performance Note
If you have Toast notifications enabled (Private_Messages.Toasts in your settings.yml), note that this naturally causes some lag since the advancements must be written on a file and immediately deleted. 
You can also disable the Spy and the Log features being applied to private messages by removing "private_message" from Apply_On sections in settings.yml for these features.
:::

### How to private message vanished players or players who ignored you or toggled off PMs?
::: tip Permission
Give yourself chatcontrol.bypass.reach permission to bypass these limits.
:::

### ChatControl breaks Towny command /t!
::: warning Command Conflict
1. Remove the "t" alias from Private_Messages.Tell_Aliases in settings.yml
2. Place the following command alias in commands.yml in your root server folder:
:::

![Towny command configuration](https://i.imgur.com/PuNbrBh.png)

### ChatControl won't override /w or other aliases for private messages!
::: tip Commands.yml Setting
Add
```
aliases:
  w:
  - []
```
to commands.yml in server directory to fix this.
:::

</div>

<div class="section-container messages-section">

## 📢 Join, Quit, Death and Timed Messages {#messages-section}

<div class="section-description">
Issues with player join/quit notifications and scheduled messages.
</div>

---

### Join/switch/quit messages from proxy (bungeecord/waterfall/velocity) don't always show if in vanish?

::: info Vanish Configuration
If you are using a plugin such as PremiumVanish, you can force vanished users to have their messages shown if they have the permission ``chatcontrol.bypass.reach`` 

If you have SpectatorOnLogin in your CMI plugin, set this to false, since CMI will tell us the player is vanished and we won't show the message otherwise.
:::

::: warning Permission Note
The permission ``chatcontrol.bypass.reach`` also gives people the ability to talk to people who ignored them etc if this permission node is also assigned to the Spigot server. Permission checks to bypass players' ignored list, are done on the spigot server, and the permission check to make sure these messages (join/switch/quit) is sent, are done on the proxy server, so to ensure you do not give regular players the permission to bypass such features, you need to make sure to only assign it to the proxy.

To assign a permission node just on proxy (bungeecord/waterfall/velocity) when using a permissions plugin like LuckPerms, this is the command you need to use (assuming you have LuckPerms on all of your servers linked to a database like MySQL or a similar setup).

``/luckpermsbungee group <group_name> permission set chatcontrol.bypass.range true server:<server_name>``
``<group_name>`` = group/rank name
``<server_name>`` = Server name as stated in your LuckPerms config on proxy.

If you want to check the permissions, you can run these commands if using LuckPerms.
Remembering, you want the permission to be "true" on proxy, but "false" OR "undefined" on your spigot servers, unless you are happy for that specific group to be able to talk to people who have them ignored, etc.

**For proxy** ``/luckpermsbungee group <group_name> permission check chatcontrol.bypass.range``

**For Bukkit** ``/luckperms group <group_name> permission check chatcontrol.bypass.range``
:::

</div>

<div class="section-container placeholders-section">

## ✨ Placeholders {#placeholders-section}

<div class="section-description">
Issues with placeholders and variables in plugin configuration.
</div>

---

### The `{server_name}` is wrong!
::: tip PlaceholderAPI Override
If you use PlaceholderAPI with the server expansion, it will override ChatControl's placeholder since it uses the same placeholder. Change the server name in the PlaceholderAPI's config file instead.
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

.section-description {
  font-style: italic;
  margin-bottom: 15px;
  opacity: 0.8;
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

h2 {
  padding-bottom: 10px;
  margin-top: 15px;
}

h3 {
  margin-top: 20px;
}
</style>
