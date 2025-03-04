# Messages

Inside the messages/ folder, you will find files for

* join messages (join.rs)
* quit messages (quit.rs)
* kick messages (kick.rs)
* death messages (death.rs)
* timed message broadcaster (timed.rs)

You can simply open .rs files using a [compatible text editor](../general/use-right-encoding).

There are tons of examples there. Simply remove `#` before a line to make it work. 

You can customize and delete everything in each file up to your liking, meaning it's programmable.

All messages are constructed similarly to [Rules](rules), that means we use our custom language to create and edit them.

## How Messages Work?

Our system is very simple. You create a message "group", that will print one message (or one random message selected from a list) at a given time. You can create multiple groups and place them below each other in the same file.

<div class="image-container">
  <img src="https://i.imgur.com/dMI10DG.png" alt="Message group example" />
</div>

**We read the file from top to bottom.** Each group can have certain conditions when to show a certain message. Such as different messages for VIP players, etc. (but so much more!) The program reads all groups from top to bottom and if the first group's conditions don't allow it to show, it moves down to the next one, and so on, until it finds the first group where it can show, and then it stops.

There are only two mandatory things you need to write, when creating a message.

1. The group name.
2. The message(s). They can either be the message itself, or a name of a format from [formats/](formats) to show it instead.

So we could write something like that into, for example, the quit.rs file:

<div class="image-container">
  <img src="https://i.imgur.com/jq6HjV8.png" alt="Quit message example" />
</div>

The group name is used in game, you can allow players to disable seeing certain messages with "/chc toggle" and you can toggle messages completely using "/chc message".

If you specify multiple messages, we automatically pick one random one.

To send a multiline message, you can either use \n or the following system:

<div class="image-container">
  <img src="https://i.imgur.com/0YpXgms.png" alt="Multiline message example" />
</div>

If you do not wish to send any chat messages, this can be done by setting the message option as follows:

This is useful is you wish to send a timed message as a bossbar, toast etc instead of a chat message.

```
message:
- none
```

## Universal Conditions

::: warning
PLEASE NOTE NOT ALL OPERATORS WORK ON PROXY SINCE THE "PLAYER" IS NOT PHYSICALLY PRESENT THERE ON AND WE CANNOT GET ALL OF HIS DATA.
:::

When creating join, kick, quit, death or timed message, you can apply the following conditions, they work in all files.

Please read everything above because you create any message here the same way - by specifying the group name and the message(s). Then you can use the operators below to spice things up, and add your own conditions.

#### `prefix`
An optional prefix to show before all messages in group.

```
prefix &c[!] &f
```

#### `suffix`
An optional suffix to show before all messages in group.

```
suffix &c<-- &f
```

#### `begins`
A date on which we start showing this message. This is a great addition to pre-create holiday or season special join, leave, death and timed messages!

```
begins 24 Dec 2023, 00:00
```

#### `expires`
A date after which we stop showing this message.

```
expires 31 Dec 2023, 23:59
```

#### `delay`
How much time to wait before showing this message again?

```
delay 6 seconds
```

#### `require sender perm <permission>` and `require receiver perm <permission>` 
An optional permission that, if set, will make the message only show if the sender/receiver has it. 

Example:

```
require sender perm chatcontrol.join.vip
require receiver perm chatcontrol.join.vip
```

#### `require sender script <javascript returning a boolean>` and `require receiver script <javascript returning a boolean>`
An optional JavaScript that must return true/false. The message will only show if it returns a value of true. You can use "player" or "sender" variable to get the sender/receiver instance. You can write [Variables](variables) there and they will be translated in the script directly, so a variable returning "true" will be treated as a boolean, such as "{player_vanished}".

::: warning
JavaScript knowledge is required to program the script. We currently don't have the capacity to do so we don't offer help with creating your own scripts.
:::

Example:

```
require sender script {sender_is_player}
require receiver script player.getHandle().ping > 10
```

#### `require sender variable <placeholder> <value>` and `require receiver variable <placeholder> <value>`
See [Rules](rules#require-variable-placeholder-value).

#### `require sender gamemode <survival/creative/adventure/spectate>` and `require receiver gamemode <survival/creative/adventure/spectate>`
If player does not have the given gamemode, the message will not show. You can use | to specify multiple gamemodes.

Example: 

```
require sender gamemode creative
require receiver gamemode adventure|spectate
```

#### `require sender world <world name>` and `require receiver world <world name>`
If player is not within any of the given world(s), not show this message. Use | to separate multiple worlds to ignore.

Example:

```
require sender world flat
require receiver world flat|flat_nether
```

#### `require sender region <region name>` and `require receiver region <region name>`
If sender is not within any of the given region(s), not show the message. Use | to separate multiple regions to ignore.

Example:

```
require sender region warzone
require receiver region warzone|peacezone
```

#### `require self`
If set, the message will only show to the involving player, such as the player who died, but nobody else.

Example:

```
require self
```

#### `ignore self`
If set, the message will not show to the involving player, such as the player who died. It will show to everyone else.

Example:

```
ignore self
```


#### `require sender channel <channel name>` and `require receiver channel <channel name>`
If sender is not within any of the given channel(s), not show the message. Use | to separate multiple channels to ignore.

Example:

```
require sender channel standard
require receiver channel admin|global
```

#### `require key <key name>`
Only works for sender (e.g. we find this data for the player who died, etc.) Require the custom data key to be set using the "save key" operator elsewhere to execute this message or rule.

Example:

```
require key player-name
```

#### `ignore key <key name>`
Only works for sender (e.g. we find this data for the player who died, etc.) Ignore the custom data key if set using the "save key" operator elsewhere from showing this message.

Example:

```
ignore key player-name
```

#### `save key <key> <value>`
Only works for sender (e.g. we find this data for the player who died, etc.) Save a custom key to player's data. This is permanent and will remain even after reload.

::: warning
The key, before saved, is treated as JavaScript. That means, if you simply want to save a string such as "tree", you must put it into brackets: "save key 'tree'". In your save code, you can use "player" variable to get Bukkit Player class, see image below for example usage.
:::

Example:

```
save key player-name <key>
```

For example, here's a complete sequence taken from rules used to create simple chat bot. Player then type @bot <param> and then can save their own name.

<div class="image-container">
  <img src="https://i.imgur.com/VGDzBxV.png" alt="Chat bot example" />
</div>

#### `ignore sender perm <permission>` and `ignore receiver perm <permission>`
A permission the player will have to not show the message.

#### `ignore sender script <javascript returning a boolean>` and `ignore receiver script <javascript returning a boolean>`
See "require sender script", except that, if this script here returns true, the message will not show.

#### `ignore sender gamemode <survival/creative/adventure/spectate>` and `ignore receiver gamemode <survival/creative/adventure/spectate>`
If player has the given gamemode, the message will not show. You can use | to specify multiple gamemodes to ignore.

Example: 

```
ignore sender gamemode creative
ignore receiver gamemode adventure|spectate
```

#### `ignore sender world <world name>` and `ignore receiver world <world name>`
If player is in the given world, not show the message. Use | to separate multiple worlds to ignore.

Example:

```
ignore sender world anarchy
ignore receiver world anarchy|anarchy_nether|anarchy_the_end
```

#### `ignore sender region <region name>` and `ignore receiver region <region name>`
If player is the given region(s), not show the message. Use | to separate multiple regions to ignore.

Example:

```
ignore sender region warzone
ignore receiver region warzone|peacezone
```

#### `ignore sender channel <channel names>` and `ignore receiver channel <channel names>`
Only applied from chatting – when sender sent the message from a certain chat channel, not show the message. Use | to separate multiple channels.

Example:

```
ignore sender channel admin
ignore receiver channel admin|anarchy
```

#### `then warn <message>`
Optional message to send to the sender (such as the player who died, etc.). Use | to define multiple messages, one of which will be selected randomly. Use the `{player}` variable to get the player and other variables normally.

To send multiline warn messages, you can use multiple "then warn" operators multiple times on new lines.

#### `then kick <reason>`
If specified, player will be kicked with the given message. Use the `{player}` variable to get the player and other variables normally.

#### `then toast [material] <reason>`
Sends a toast notification to all receivers.

```
then toast Hello world!
then toast WITCH_SPAWN_EGG Hello world!
```

#### `then discord <channel> <message>`
Requires DiscordSRV. Send a message to the given Discord channel. Use the `{player}` variable to get the player and other variables normally.

#### `then title <title|subtitle>`
Send a title with subtitle to all receivers, if possible. Use the `{player}` variable to get the player and other variables normally. Split the message with | to send the other part as subtitle.

Example:

```
then title &6Hi {player}|&cThis is a subtitle
```

#### `then actionbar <message>`
Send action bar message to all receivers, if possible. Use the `{player}` variable to get the player and other variables normally.

#### `then bossbar <color> <style> <seconds to show> <message>`
Send boss bar to all receivers, if possible. For message, use the `{player}` variable to get the player and other variables normally.

Use this link to select a color:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompBarColor.java

Use this link to select a style:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompBarStyle.java

#### `then sound <name> <volume> <pitch>`
Plays a sound to all receivers. 

Select the sound names from the following link:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompSound.java

Example:

```
then sound ENTITY_ARROW_HIT_PLAYER 1.0 0.1
```

#### `then book <name>`
Opens a book to all receivers. The name of the book is the file name of book from books/ folder. You can create these books using "/chc book" command.

Example:

```
then book test-book
```

#### `then notify <permission> <message or format>`
Send the given message to every other player on your network/server that has the given permission. Used for staff notifications.

You can also specify a format name there to be used.

Example:

```
then notify chatcontrol.message.special &8[&4!&8] &c{player} died by {cause}
then notify chatcontrol.message.special Death_Info
```

#### `then fine <amount>`
CURRENTLY NOT WORKING AS EXPECTED AND ALL RECEIVERS WILL HAVE THEIR MONEY DEDUCTED. If specified, and you have Vault plugin installed, we will take the given amount of your currency from the player's bank account. Do not specify the currency symbol.

Example:

```
then fine 100
```

#### `then points <warning set> <amount>`
CURRENTLY NOT WORKING AS EXPECTED AND ALL RECEIVERS WILL HAVE THEIR POINTS ADDED. If you have warning points enabled, we will give the amount of warning points to the given warning set of the player.

Example:

```
then points ads 50
```

#### `then command <command1|command2>`
Commands that will be executed in the given order for each receiver, with his permissions. Use | to define multiple commands, and use the `{player}` variable to get the player.

#### `then console <command1|command2>`
(see notice below) Commands that will be executed in the given order from the console, with server privileges. Use | to define multiple commands, and use the `{player}` variable to get the player.

In timed messages, this will only execute once for the first receiving player. See "then foreach console".

#### `then foreach console <command1|command2>`
Only for timed messages: This will run the console commands for each player who receives the broadcast message. 

Example: `then foreach console eco give {player} 1`

#### `then proxyconsole <server> <command1|command2>`
Commands that will be sent to proxy to be executed. Use | to define multiple commands, and use the `{player}` variable to get the player.

The server variable can either be "proxy" (so we run the command on proxy), or a name of another server where the command should be forwarded.

#### `then log`
Log a message to the console.

Example:

```
then log {player} at {world} {x} {y} {z} has joined!
```

#### `then write`
Write a message to the file.

Example:

```
then write logs/swear.log {player} at {world} {x} {y} {z} has triggered this rule with: {original_message}
```

#### `then abort`
Stop processing messages that follow after this one. We process messages from top to bottom of your files.

Example:
```
then abort
```

#### `random`
(Only applicable if you have multiple messages in "messages") Randomly picks one message from your messages list. See this example: https://i.imgur.com/iO5O6fD.png (you don't have to use json)

Example:
```
random
```

#### `proxy`
Makes this messages broadcast over your proxy.

Example:
```
proxy
```

#### `disabled`
Makes this message load to memory but be disabled. Used in "/chc toggle" commands to toggle messages.

Example:
```
disabled
```

## Spigot Join, Quit And Kick Conditions

The files for these messages are: join.rs, quit.rs, kick.rs.

We don't have any special conditions for these messages. Simply set their group name, the message(s) and select options from above.

## Proxy Join, Quit And Kick Conditions

The files for these messages are: join.rs, quit.rs, kick.rs.

#### `require playedbefore`
Makes a message only show if the player who triggered it joined for the first time. We mark the player as "played before" to your data.db after he disconnects so you can keep using this operator during his entire first time stay on the server.

Example:
```
require playedbefore
```

#### `ignore playedbefore`
Makes a message not show if the player who triggered it joined for the first time. We mark the player as "played before" to your data.db after he disconnects so you can keep using this operator during his entire first time stay on the server.

Example:
```
ignore playedbefore
```

#### `ignore sender server`, `require sender server`, `ignore receiver server`, `require receiver server`
Makes a message not show if the player who triggered it or the receiver is on the ignored server or is not on the required one.

Example:
```
ignore sender server Green
ignore receiver server Green
require sender server Green
require receiver server Green
```

## Timed Messages Conditions

The file for these messages is timed.rs.

We don't have any special conditions for these messages either. Simply set their group name, the message(s) and select options from above.

However, you can configure Timed_Delay, Timed_Prefix and Timed_Suffix that will apply for every timed messages in settings.yml in Messages section.

## Death Messages Conditions

You can use the conditions from above, with the following new added conditions. 

We don't explain how everything works because most are explained above if you search for the same but replace killer with sender, such as search for "require sender perm" to get help.

* `require killer perm` and `ignore killer perm`
* `require killer script` and `ignore killer script`
* `require killer world` and `ignore killer world`
* `require killer region` and `ignore killer region`
* `ignore killer channel`
* `ignore killer gamemode`

In addition, you can use the following conditions. Use | to split multiple.

* `require cause <damage cause>` - Only show the message if the last damage cause to the dead player matched one of the following values: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html
* `require killer item` and `ignore killer item` - Only show if the killer had/not had the given material, such as DIAMOND_SWORD. You can also use * in front or at the end such as *_SWORD to require/ignore all swords.
* `require projectile <entity type>` - Only show the message if the dead player was hit by a projectile matching one of these entities: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html
* `require block <material>` - Only show the message if the player died by a block damage cause (such as suffocating in a block) and the block matches one of these materials: https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompMaterial.java
* `require killer <entity type>` - Only show the message if the dead player's last damage cause was caused by an entity matching one of these: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html
* `require boss <name>` - (Requires MythicMobs or Boss plugins) Only show message if the player was killed by a boss of the set name.
* `require damage <number>` - Only show the message if the last damage to player exceeded the given number.
