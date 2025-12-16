# Commands

::: info
ChatControl has a ridiculous command offering. Everything you need to know about commands is shown in the game using feature-rich interactive system. Just use your mouse and hover over commands to get more information.
:::

## How to Use Commands

To use commands, simply execute them in your console or the in-game chat. Many commands support additional parameters, see below.

<div class="command-notation">

* **[]** = optional arguments (use only one at once, or one + reason when muting or clearing the chat)
* **&lt;&gt;** = required arguments

</div>

::: tip
The short variant for **/chatcontrol** is **/chc** and **/ch** for **/channel** You can change those commands in settings.yml by finding Command_Aliases keys.
:::

## Permissions

Type `/chc perms` to view all available command permissions.

![Permission command output showing all available permissions](/images/chatcontrol/W4UTeIV.png)

You can also view the required permission directly in the error message when you attempt to execute a command you don't have access to.

![Permission error message](/images/chatcontrol/9srxNEm.png)

## Main Commands

![Main commands list first part](/images/chatcontrol/zmrU8KJ.png)
![Main commands list second part](/images/chatcontrol/BAN8xwA.png)

To see more on how commands works and how it can be used, simply hover your mouse over it and additional information will follow.

<div class="commands-section">

### `/chc announce`
Send any message to everyone on your server or network. You can send a chat message, title, boss bar, action bar, toast or even json.

### `/chc book`
Create a custom book. You can then read this book by yourself or for other players, using this command, or in chat formatting such as: "Click [here] to read server rules." or in [Rules](./rules).

### `/chc clear`
Clear the game chat. You can specify the parameters -a for anonymous clearance (hides who cleared it) or -s to avoid announcing anything. Proxy is supported. You can also give a clear reason.

### `/chc color`
Set yourself a custom chat color and decoration. You can set this via command for yourself or other players or via a GUI menu. For Minecraft 1.16+ we support RGB color codes using HEX such as "#CCDD99".

### `/chc debug`
If you want to report a bug, run this command. It will compile all files into a single ZIP file that you can then upload to GitHub when creating an Issue. We remove your MySQL password and other sensitive data.

### `/chc forward`
Send any command to be executed on proxy or even on another server. Make sure that you give yourself the "chatcontrol.command.forward" permission on proxy also.

### `/chc info`
Utility command to view player nicks, view saved player data, parse variables to test them or view if player is a newcomer. Newly connected players can have different rules such as longer antispam delays, see [Newcomer](./newcomer).

### `/chc log`
Discover what happened in game such as player messages, commands, what books were written, what mails were sent, what private messages were exchanged and much more. With a powerful filtering such as "/chc log all by:kangarko in:1h".

### `/chc message`
Manipulate player join, quit, death messages or with timed message broadcasts without leaving the game.

### `/chc permissions`
View all permissions the plugin has, what permissions you have and what are given by default.

### `/chc points`
Manipulate player warning points. Players can receive punishment points for doing certain things such as spamming or cursing (configurable). We execute certain actions such as mute/kick when they exceed a certain amount of points. Points can be grouped into sets such as "light-swears", "hard-swears", "spam" etc.

### `/chc purge`
Remove all messages from a player, even if he disconnected after writing them. Proxy is supported.

### `/chc region`
Place 3D regions in the world you can then use in rules using the "require region" or "ignore region" operators, see [Rules](./rules). For example, you can make stricter antispam in your spawn area. Or you can write a rule that completely prevents writing something in your PvP arenas.

### `/chc reload`
Reloads the plugin and its configuration. Some things by their nature, such as listener priorities, console filtering etc. cannot be reloaded. PlugMan is unsupported and may break. Please only use /chc reload and restart as soon as possible.

### `/chc rule`
Add, import, list, reload or toggle chat filters. A filter, called a rule, is a simple way to catch ANYTHING in your chat, commands, signs, items, books or even server packets and execute actions on it. Such as by typing "apple" player receives a warning. This is used against spam, swears, ads, also to stop bots, or even creating entire help systems, chat bots or new plugin commands (like Skript). See [Rules](./rules).

### `/chc tag`
Admin command for setting custom nick, prefix or suffix for players. Proxy is supported. You can also list offline players' nicks, prefixes and suffixes!

### `/chc tour`
A quick tour on getting started with ChatControl, or migrating from a previous version.

### `/chc migrate`
Scans all files and converts ChatControl 10 syntax to 11. This command won't change legacy &c colors to mini &lt;red&gt; tags. Legacy colors are still supported in ChatControl 11. It will only do these things:

* Replace %syntax% placeholders to {syntax}
* Replace `&#000000` hex and `#000000` variables to `&lt;#000000&gt;` MiniMessage format.
* Replace §x§0§0§0§0§0§0 to MiniMessage as well (very few people used this format).

</div>

## Channels Commands

![Channels commands list](/images/chatcontrol/rFglGaw.png)

<div class="commands-section">

### `/ch join`
Join a player a chat channel in a certain mode, either to write or to read it. Proxy is supported.

### `/ch set`
Forcefully set or remove players from channels. Supports bulk execution. Ideal for scripting.

### `/ch leave`
Leave a player (even on proxy) from a chat channel.

### `/ch list`
List players in channels. Proxy is supported.

### `/ch send`
Send message to a channel even if you are not joined in it.

### `/ch sendas`
Send message to a channel as someone else. Great for automating, or simply trolling.

</div>

## Base Plugin Commands

The following commands don't have a prefix such as /chc or /ch.

<div class="commands-section">

### `/ignore`
Stop viewing a player's chat messages, toggle ignore for other players or list all ignored players. You can also ban ignored players sending you private messages. 

### `/list`
See who's online on your server or proxy, nicely sorted by any key you define, such as player rank, prefix, the weather, politics etc.

### `/mail`
Send long messages in a book form to players, even offline players. Supports advanced features such as auto-responder, forwarding, and inbox/archive folder.

### `/me`
Send a formatted message to chat. What else do you need to know? /me is FAPPING right now

### `/motd`
When players join, you can configure what message they will receive as a greeting. Use this command to send this message again to anyone.

### `/mute`
Mute a player, a channel or the whole server for a given period, with an optional reason. We also prevent join/quit/death messages appearing during mute, prevent private messages, mails, and even certain commands you specify when server or player is muted.

### `/reply`
Reply to a private message, even on proxy or even reply to console.

### `/spy`
See what players are chatting that's outside your reach, such as channels you are not joined in, private messages, books, signs, commands, etc. Toggle via command or a beautiful GUI.

### `/tag`
Set yourself a custom nick, prefix or suffix.

### `/tell`
Send a private message to a player.

### `/toggle`
Disable receiving a certain player message: join, quit, kick or death. You can enable players to disable seeing death messages, or timed messages announcements for example...

</div>

## Proxy Commands

<div class="commands-section">

### `/bcreload` and `/vcreload`
Reloads proxy settings.yml and player messages on BungeeCord and Velocity respectivelly.

</div>

<style>
.command-notation {
  background-color: rgba(var(--vp-c-brand-rgb), 0.05);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.commands-section {
  margin-bottom: 20px;
}

.commands-section h3 {
  background-color: rgba(var(--vp-c-brand-rgb), 0.05);
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: monospace;
  border-left: 3px solid var(--vp-c-brand);
}

.commands-section h3 + p {
  margin-left: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(var(--vp-c-border-rgb), 0.3);
}

/* Dark mode adjustments */
.dark .command-notation,
.dark .commands-section h3 {
  background-color: rgba(var(--vp-c-brand-rgb), 0.1);
}

img {
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  margin: 16px 0;
  max-width: 100%;
}

.dark img {
  border-color: #444;
}
</style> 