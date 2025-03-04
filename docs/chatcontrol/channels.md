# Channels

Having every chat message under a single place becomes messy as your server grows. Channels reduce chat spam on big servers noticeably because players are divided into different channels (for example standard channel, help-op channel, trade channel and admin channel) instead of everyone writing on the main server chat.

In other words, channels are chatting rooms where players can talk about different topics, or admins can chat together, with their messages only being visible to other members in the same chat room. 

<div class="image-container">
  <img src="https://i.imgur.com/Erxwd5D.png" alt="Channels demonstration" />
</div>

::: warning Important
You can "disable" channels and only have one chat everywhere. See the section below for a tutorial on doing this.
:::

---

## How Channels Work?

By default channels are disabled. You can enable them in "Channels" section of settings.yml. You can also change what command invokes channels if you don't like the default "/channel" and "/ch".

Players can either read or write to channels. Admins can also spy them, but that's covered in another section of this Wiki. Each player can write in 1 channel at a time. You can specify how many channels a player can read, also make this limit different for different [Groups](groups) such as VIP or staff.

We have an `Join_Read_Old` option that saves you time by automatically making you read a channel when you leave it, or switch it. 

You can also disable Channels completely on certain worlds, that is useful if you have a minigames world where chat is handled by another plugin.

If you have /ignore feature enabled, players will not see messages of players they ignore. Also, vanished players are hidden and prevented from chatting to prevent accidental typing.

You can mute channel for a certain duration with an optional reason, so only administrators will be able to write to it.

Channels fully support [Proxy](proxy) and [Discord](discord). You don't even have to name your Discord channels the same.

Channels can be either:

1. Global: everyone on your server or network sees the message
2. Blocks ranged: everyone in distance near you sees your message
3. World ranged: everyone on your world and connected worlds sees your message
4. Party: everyone in your party such as Factions sees your message (you can also make a party channel have blocks or worlds range!)

### Auto Join

For your convenience, we can automatically join players to channels for writing or reading when they join. The permission to achieve this is as follows:

``chatcontrol.channel.autojoin.{channel}.{mode}`` 


For example, you need to give players `chatcontrol.channel.autojoin.standard.write` and `chatcontrol.channel.join.standard.write` to automatically join them to write to standard channel on join. 

::: warning IMPORTANT
If players decide to leave the channel you joined them into, we save their preference and won't automatically join them next time their login. To prevent this, take away the `chatcontrol.channel.leave.{channel}` permission for the said channel, so they won't be able to leave it.
:::

::: warning ALSO IMPORTANT 
Ensure players have permission to join channels. You either join them into via /channel join or via autojoin permission, otherwise they will lose them on reload or relogin! The permissions for this is `chatcontrol.channel.join.{channel}.{mode}` (replace channel and mode with the proper channel and mode with "read" or "write").
:::

::: tip
To understand how auto-join works in-game, set Debug key in settings.yml to [channels-join] and restart.
:::

### Important: Do this if players are getting kicked out of channels:
We periodically check players if they can stay in channels and remove those who no longer have channel join permission or have channels over limit.

Ensure to give them `chatcontrol.channel.join.{channel}.{mode}` permission. Replace {channel} with the channel name, and {mode} with either "read", or "write". 

Also, leave `Show_Tips` options on true in settings.yml. When we remove a player, we then print an informative console message so that you understand why that happened.

### Removing Messages

If you have ProtocolLib installed, there's a way to remove every chat message, even from Discord and proxy. See formats/chat.yml format for the delete part where we invoke a hidden command to achieve this.

### Not Having Channels And Only Having 1 Chat (Classic System)
Previously, in ChatControl Pro, you could turn channels off and only have one chat everywhere. On top of that, you could have your admin and proxy chats. Check out the video below to learn how to achieve the same using our new channels system:

<div class="video-container">
  <a href="https://www.youtube.com/watch?v=EKziLXSjwhY" target="_blank" rel="noopener noreferrer">
    <img src="https://i.imgur.com/MtMpN15.png" alt="Video tutorial" />
  </a>
</div>

### Use special character like ! to send message to global/range
Install the following rules to your rules/chat.rs to let a player prepend his message with a specific letter for it to be forwarded to another channel.

```
# Forward any message starting with ! to proxy channel
match ^(\!)(.+)
then command ch send proxy $2
strip colors false
strip accents false
dont verbose
then deny

# Forward any message starting with . to admin channel
match ^(\.)(.+)
then command ch send admin $2
strip colors false
strip accents false
dont verbose
then deny
```

### Creating Channel Toggle
If you'd like to let players toggle between a channel, for example by doing "/admin toggle" they will join/leave the admin channel, you can simply achieve this using our [Rules](rules) system and the ignore/require channel operators. Here are the two rules from rules/commands.rs file.

```
# This rule only executes when player is not in the admin channel for reading.
match ^(\/admin toggle)
dont verbose
ignore channel admin write
then command channel join admin write
then deny

# This rule only executes when player is in the admin channel for writing.
match ^(\/admin toggle)
dont verbose
require channel admin write
then command channel join standard write
then deny
```

### Custom channel commands

Using our [Rules](rules) you can create new in-game commands to send channel messages.

For example, typing "!hello everyone" would send this message to "global" channel even if the sender is writing to "standard" channel. To achieve this, paste the following rule to rules/chat.rs:

```
# Send messages starting with "!" to global channel
match ^(\!)(.*)
then command channel send global $2
then deny
dont verbose
```

You can learn about how this rule works in [Rules](rules).

You can also create a custom channel command using 2 rules that will send channel messages using a custom command like /adminchat or /helpop. Place this to rules/commands.rs:

```
# Catch "/helpop" command and send usage.
match ^/helpop$
dont verbose
then warn &cDescription: Send a message to online staff members.
then warn &cUsage: /helpop <message>
then deny

# Catch "/helpop <message>" and redirect to the helpop channel.
match ^(/helpop) (.*)
dont verbose
then command channel send helpop $2
then deny
```

## Creating Channels

You can create, edit or remove channels in "Channels.List" section of settings.yml. You can remove everything that is in that section when you first install ChatControl.

To add a new channel, simply place it in the "Channel.List" like you see with the standard, admin and global channels below. Writing such key there will create a new channel. Everything inside your channel key is channel configuration.

<div class="image-container">
  <img src="https://i.imgur.com/gN0zG2Z.png" alt="Channels section" />
</div>

### Configuration

We made it extremely clean to configure channels. You only have to type options for your channels you actually need. 

For up-to-date list of available options, see the comments inside settings.yml in the Channels.List key.