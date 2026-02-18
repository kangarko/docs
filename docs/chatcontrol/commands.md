# Commands

Hover over commands in-game for detailed usage info.

**Notation:** `[]` = optional, `<>` = required

::: tip
`/chc` is short for `/chatcontrol`, `/ch` for `/channel`. Change aliases via `Command_Aliases` in settings.yml.
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

<div class="command-list">

### `/chc announce`
Send a message (chat, title, boss bar, action bar, toast, or JSON) to everyone on your server or network.

### `/chc book`
Create a custom book. Read it yourself, send to players, or use in formats/rules.

### `/chc clear`
Clear chat. Flags: `-a` (anonymous), `-s` (silent). Supports proxy and optional reason.

### `/chc color`
Set chat color/decoration via command or GUI. Supports HEX on 1.16+.

### `/chc debug`
Compiles all files into a ZIP for bug reports (sensitive data removed).

### `/chc forward`
Send a command to proxy or another server. Requires `chatcontrol.command.forward` on proxy too.

### `/chc info`
View player nicks, data, test variables, or check newcomer status.

### `/chc log`
Search player activity (messages, commands, books, mail, PMs). Supports filtering: `/chc log all by:kangarko in:1h`.

### `/chc message`
Manage join, quit, death messages and timed broadcasts in-game.

### `/chc permissions`
View all permissions and which ones you have.

### `/chc points`
Manage warning points. Players accumulate points for spam/swearing; actions trigger at thresholds.

### `/chc purge`
Remove all messages from a player (even after disconnect). Proxy supported.

### `/chc region`
Create 3D regions for use with `require region` / `ignore region` in [Rules](./rules). For example, you can make stricter antispam in your spawn area, or write a rule that completely prevents writing in your PvP arenas.

### `/chc reload`
Reloads config. Some features (listener priorities, console filter) require a full restart.

### `/chc rule`
Add, import, list, reload or toggle chat filters. A rule is a way to catch anything in your chat, commands, signs, items, books or server packets and execute actions on it. For example, typing "apple" gives a player a warning. Used against spam, swears, ads, bots, or even to create help systems, chat bots or new commands (like Skript). See [Rules](./rules).

### `/chc sendformat`
Send a formatted message using a format file. Usage: `/chc sendformat [-reload] <format> <player> [message]`.

### `/chc tag`
Set custom nick/prefix/suffix for players (admin). Proxy supported.

### `/chc tour`
Quick getting-started guide.

### `/chc migrate`
Converts ChatControl 10 syntax to 11 (`%syntax%` → `{syntax}`, hex colors → MiniMessage).

</div>

## Channels Commands

![Channels commands list](/images/chatcontrol/rFglGaw.png)

<div class="command-list">

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

<div class="command-list">

### `/ignore`
Ignore a player's messages. Can also block their PMs.

### `/list`
See online players (server or proxy), sorted by any key.

### `/mail`
Send book-form messages to players (even offline). Supports auto-responder, forwarding, inbox/archive.

### `/me`
Send a formatted message to chat.

### `/motd`
Resend the join greeting message.

### `/mute`
Mute a player, channel, or entire server. Blocks join/quit/death messages, PMs, mail, and specified commands.

### `/realname`
Look up a player's real name from their nickname.

### `/reply`
Reply to a private message (proxy + console supported).

### `/spy`
See messages outside your reach (other channels, PMs, books, signs, commands). Toggle via command or GUI.

### `/tag`
Set your own nick, prefix, or suffix.

### `/tell`
Send a private message.

### `/toggle`
Disable receiving message types: `announcement`, `broadcast`, `chat`, `mail`, `private_message`, `sound_notify`, `join`, `quit`, `kick`, `death`, `timed`, `switch`. For example, you can enable players to disable seeing death messages or timed message announcements.

</div>

## Proxy Commands

<div class="command-list">

### `/bcreload` and `/vcreload`
Reloads proxy-side settings.yml and player messages.

</div>

<style>
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