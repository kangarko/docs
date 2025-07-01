# Boss Commands

::: tip
For the /boss command help, see [Commands](/boss/commands)
:::

You can configure your Boss to execute custom commands on the following events:

1. Boss spawn
2. Boss death
3. When a Boss' health goes below a specific value (i.e. less than 10 HP)

![Boss Commands Menu](https://i.imgur.com/zZF9ics.png)

## Command Variables

We support the following variables inside a command:

- {killer} to replace the Boss' direct killer's name
- All variables listed in the [Variables](/boss/variables) page (replace %% with {}).
- Plus PlaceholderAPI variables for the killer. I.e. %player_health% will return the remaining killer's health.

## Command Configuration:

You can run the command as the console or with the permissions that the killer player has:

![Command Configuration](https://i.imgur.com/qoRtIDO.png)

You can also set a chance for the command such that it can run rarely or not much at all.

## Special Commands

Alongside any typical commands we also support the following special syntax:

- `tell <message>` - Send all players within 10 blocks' radius the specified message. Separate multiple lines with |.
- `tell-damagers <message>` - Send a message to all players who damaged the boss. You can use {damager} for each damager's name and {damage} or {damage_percent} for the damage he did. Example: `tell-damagers &7Hey &6{damager}&7, you dealt &c{damage} damage &7to &a{boss_name}&7!` Separate multiple with |.
- `tell-damagers-list <format> or <title>|<format>` - Works like tell-damagers but instead of sending one message to each damager, it sends a list of all damagers to each player so they see how up you rank compared to other players. In the message, you specify the format. You can use {order} to get the number, {damager}, {damage} or {damage_percent} as well as other [Boss variables](/boss/variables).

You can specify the header title of the messages using |, for example: `tell-damagers-list Who Hurt {boss_name}|&f#{order}. &6{damager} &f- &c{damage} ({damage_percent})` will make the message look like so:

![Damagers List Example](https://i.imgur.com/ws7NviD.png)


-  `broadcast-damagers-list <format> or <title>|<format>` - See tell-damagers-list, but we will send the messages to all online players instead of only those who damaged the Boss before he died.
- `broadcast <message>` - Send all players on the server the specified message. Separate multiple lines with |.
- `discord <channelName> <message>` - (Requires DiscordSRV) Send the specified message to the given Discord channel.

![Discord Command Example](https://i.imgur.com/RieObvS.png)

Here is the example in action:

![Discord Message Example](https://i.imgur.com/sG8Jy16.png)
