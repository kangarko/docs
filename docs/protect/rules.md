# Rules

Protect has a unique way of matching illegal items using rules. Rules are simple operators that can be customized to match unusual items or abnormal quantities of them.

## Creating Custom Rule Files

By default, we copy rules/main.rs file with examples and some preconfigured filters. You can remove this file and make as many .rs files as you wish in the rules/ folder. We will automatically load all of them. This is great for keeping rules organized.

> Do not remove the groups.rs file as it's used for groups, see below.

# Groups

You can bulk the operators above together in groups.rs file. 

In this file, simply create rules using the same operators as above but instead of "match" use `group <name>` to create a rule. Then return back to your rules files and reference to this group using `group <name>`.

That way, you can deal with of 100s rules easily without having to copy-paste operators under every rule.

## Creating A New Rule

We match against material names using [our cross-version compatible name table](https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompMaterial.java). This includes legacy versions.

Open rules/main.rs or make a new .rs file there and start creating with the two operators below:

Each line after the match starts with an operator. We invented a custom language to write these because there simply was no other way and yaml was ineffective.

Below, the `<>` parameters are must-have whereas the `[]` ones are optional.

# Must-Have Operators

#### `match <materialName>`
Each rule starts with the "match" operator. This is the core fundamental of every rule. A player’s item material type will be tested against the given expression (see below for documentation).

> If you are familiar with ChatControl, please know that Protect does not support regular expressions. We use our own fast matcher (see below) for high performance instead.

What comes after the match is the material name. Four different ways of specifying the name are supported:

1. Start your name with * and we will evaluate if the message starts with it, example: *_AXE will match all axes.
2. End it with * and we'll evaluate endings, example DIAMOND_* will match all diamond tools and blocks.
3. Start with " and end with " to evaluate equal, example "DIAMOND" will only match DIAMOND but not DIAMOND_BLOCK.
4. Otherwise we evaluate if message contains the pattern, example GRASS will match GRASS, TALL_GRASS, GRASS_BLOCK etc.

Example:

````
match DIAMOND
match "DIAMOND"
match "DIAMOND_*"
match "*_AXE"
match GRASS|"STONE"
match "DIAMOND"|"STONE"
````

You can use | to separate multiple matches i.e. DIAMOND_*|"GOLDEN_HOE" etc.

````
# Limit diamond and emerald blocks for beginner players to max 1 in their inventory.
match "DIAMOND_BLOCK"|"EMERALD_BLOCK"
name valuable-block-beginner
ignore inventory amount 1
group beginner
````

Use '*' to match everything, example: "match *".

````
# Block too long nbt item tags (use /protect iteminfo to inspect) that
# crash the client and the server.
match *
name nbt-too-long
require tag length 256
then confiscate
````

#### Using Regex

If you still want/need to use regex you can prefix your message with "* " and then match normally, i.e. "* ^DIAMOND_(SWORD|HOE)". Please note regex imposes a performance penalty (player inventory is 41 slots big, so each rule needs to be evaluated 41x times and regex is way slower than our own matcher).

#### `name <rule name>`
Give a rule a name that is unique to this rule. You can use it later with the `{rule_name}` variable.

Example:

````
name too-much-beacon
````

# Item-Related Operators

#### `require/ignore cause <cause1>|<cause2>`
Only proceed with the rule if the cause of the scan is included (or excluded) in the given list separated by |.

Available: manual (from /protect scan), period, player_join, player_death, world_change, command (any command configured in setting.yml), inventory_open, item_click and item_spawn

See settings.yml scan section to configure the above in detail.

Example:

````
ignore cause inventory_open|player_join
require cause item_spawn
````

#### `require amount <number>`
Only match this rule if the item stack ONLY FOR THE SCANNED SLOT in the inventory is over the given amount.

IMPORTANT: This will only count one slot's size! Example: If you want to count how many total diamonds are in the inventory, use "require inventory amount" instead.

#### `require name length <number>`
Only match this rule if the item has a custom name and the custom name (without colors) exceeds the given size.

#### `require name <name>`
Only match this rule if the item has a custom name and the custom name (without colors) matches the given title.

We use the same 4 matching modes as the "match" operator so you can use * and "" here too. See the main match operator for documentation.

#### `require lore length <number>`
Only match this rule if the item has a custom lore and it (without colors) exceeds the given size.

#### `require lore <line1|line2||line3>`
Only match this rule if the item has a custom lore and it (without colors) matches the given lore.

We join the item's lore with "|". 

Example: The item has lore

"A mythical Boss
Egg lore"

To match this, use "require lore A mythical Boss|Egg lore"

We use the same 4 matching modes as the "match" operator so you can use * and "" here too. See the main match 
operator for documentation.

#### `require durability <number with operand>`
Only match this rule if the item's durability matches the given value. See examples below for syntax.

Example:

````
require durability 20 # match if durability is equal to 20
require durability > 5 # match if durability is 6 or greater
require durability >= 5 # match if durability is 5 or greater
require durability < 25 # match if durability is 24 or less
require durability <= 25 # match if durability is 25 or less
````

#### `require potion amount <number>`
Only match this rule if the item is a potion with at least the given amount of custom effects (potions can hold multiple custom effects and this is abused by hack clients, i.e. Wurst's Troll Potion).

Example:

````
require potion amount 2
````

#### `require potion duration <durationTicks>`
Only match this rule if the item is a potion and its effect lasts at least the given amount of ticks. Can be used to prevent infinite hacked potions.

Example:

````
require potion duration 20 # match effects lasting over 1 second
````

#### `require potion amplifier <number>`
Only match this rule if the item is a potion and its amplifier is at least the given number. Note that amplifier 0 means level 1, amplifier 1 means level 2 etc., because the base is 1 already.

Example:

````
require potion amplifier 1 # match potions level 2 or greater
````

#### `require enchant level <number>`
Only match this rule if the item has any enchant at least of the given level. See "ignore enchant" to ignore certain enchants. 

#### `require tag length <size>`
Only match this rule if the item's NBT tag is equals or exceeds the given number. Used to match i.e. Crash Chest from Wurst. You can use "/protect iteminfo nbt" to view what NBT tag of a held item is.

Example:

````
require tag length 512
````

#### `require persistent tag <key> <value>`
Only match this rule if the item's persistent metadata tag (https://www.youtube.com/watch?v=sQmNWUwK4DA) has the given key with the given value.

IMPORTANT: The value will be returned with NBT prefix, see Data types: https://minecraft.fandom.com/wiki/NBT_format For example, to match if persistent tag called "Stamina" has byte tag 20, you need to type 20b 

IMPORTANT: This only matches custom plugin-coded data tags. To access vanilla NBT, use "require script" and use the "nbt" instance in the script to navigate NBT. Note this is limited due to how vanilla works.

Example:

````
require persistent tag CoreArena_Item true
require persistent tag Stamina 1b
````

#### `ignore inventory title <title>`
Ignore the item if it was opened in a container (i.e. chest) with the given title. We compare the title with colors removed.

IMPORTANT: Protect ignores custom sized and custom named (colored) inventory titles by default.

Example:

````
ignore inventory title Spartan AntiCheat
````

#### `ignore tag <key>`
Ignore the item has the given NBT tag. We use NBT-API library and check NBTItem#hasTag(key) so it will work if the tag is set at the root level.

For example, our Boss plugin puts a tag with key Boss_V4 and value of the Boss name to each mob spawning egg before it's given to the player. To prevent its confiscation, you can use the following example:

Example:

````
ignore tag Boss_V4
````

#### `ignore material <material1>|<material2>`
Ignore the item if its material is one of [https://mineacademy.org/materials](https://mineacademy.org/materials). Use | to separate multiple materials. We evaluate each as equals.

Supports *, see the main "match" at the top.

Example:

````
ignore material STONE
ignore material PLAYER_HEAD|PLAYER_WALL_HEAD
````

#### `ignore inventory amount <totalAmount>`
Ignore the scan if the container with player inventory combined contains less than the given amount of the scanned item type.

Example: If I hold 5x diamonds and I open a chest with 10x diamonds, together the container + my inventory hold 15x diamonds. If you want the scan to match when there is a total of 50x diamonds, you set the totalAmount to 50.

Example:

````
ignore inventory amount 50
````

#### `ignore enchant <enchantName>`
Ignore the scan if the item contains the given enchant. [See this link](https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompEnchantment.java) for valid enchant types.

Example:

````
ignore enchant PROTECTION_EXPLOSIONS
````

#### `ignore enchantlevel <level>`
Ignore the scan if the item has only enchants less or equal the given level. Useful if your custom plugin gives enchants higher than vanilla.

Example:

````
ignore enchantlevel 12
````


#### `check stack size`
Fire this rule if the item at the scanned slot is unnaturally stacked. I.e. 64x diamond swords when there can only be 1 per slot.

Example:

````
check stack size
````

#### `check enchant not-applicable`
Fire this rule if the item at the scanned slot has an enchant that is not possible to add on this item type with vanilla rules.

Example:

````
check enchant not-applicable
````

#### `check enchant too-high`
Fire this rule if the item at the scanned slot has an enchant with a level that is higher than vanilla rules permit.

See "ignore enchantlevel" to tweak this setting.

Example:

````
check enchant too-high
````

#### `then disenchant`
Remove all enchantments from the item.

Example:

````
then disenchant
````

#### `then nerf`
Reduce the enchant level to the maximum allowed by vanilla.

Example:

````
then neft
````

#### `then clone`
Silently clones the item into the logs table. Use "/protect logs" to view it.

IMPORTANT: To prevent duplicate clone, we add an invisible NBT tag to the item. Note that this will make the item unstackable with other items in the inventory so player can figure out that it's been flagged. There is no other way around this.

Example:

````
then clone
````

#### `then confiscate excess`
Attempts to remove the excessive amount of items of the same type from the inventory and logs to the database. Use "/protect logs" to view.

Requires "require inventory amount" to be set. Example: I hold 64x beacons. The "require inventory amount" is set to 10. After "then confiscate excess" is fired, Protect will take 54x beacons so I am left with 10x in my inventory.

Example:

````
then confiscate excess
````

#### `then confiscate`
Remove the item at the scanned slot from the inventory and logs to the database. Use "/protect logs" to view.

Requires "require inventory amount" to be set. Example: I hold 64x beacons. The "require inventory amount" is set to 10. After "then confiscate excess" is fired, Protect will take 54x beacons so I am left with 10x in my inventory.

Example:

````
then confiscate
````

# Standard Operators

#### `group <group name>`
Assign a group to the rule. Multiple rules can have the same group to share operators into. See [Groups](groups) for more info. 

Example:

````
group advertisement
````

#### `begins` and `expires`
Expires means the date on which we start executing this rule. Begins means the date after which we stop executing this rule.
This is a great addition to pre-create rules for the holiday or special events!

Examples:

````
begins 24 Dec 2023, 00:00
````

````
expires 31 Dec 2023, 23:59
````

Or you can even use variables to replace with the current timestamp:

````
# This will broadcast from 24 Dec to 31 Dec each year.
begins 24 Dec {year}, 00:00
expires 31 Dec {year}, 23:56

# This will broadcast between 0 and 30th minute of each hour
begins {day} {month} {year}, {hour}:00
expires {day} {month} {year}, {hour}:30
````

#### `delay <time> [message]`
How much time to wait before running this rule again? This is reset upon /reload or server restart.

This delay is applied globally to all users.

````
delay 6 seconds
delay 6 seconds You must wait {delay} seconds before triggering this rule again!
````

#### `player delay <time> [message]`
How much time to wait before running this rule again for this player? This is reset upon /reload or server restart.

Works similar to the above operator, however, the "player delay" operator only affects a single user. 

````
player delay 6 seconds
player delay 6 seconds You must wait {player_delay} seconds before triggering this rule again!
````

#### `require perm <permission> [message]`
An optional permission that, if set, will make the rule only execute if the sender has it. You can also specify what message will be sent to the player if he lacks the permission.

Example:

````
require perm protect.rule.special
require perm protect.rule.special {error_prefix} You lack the ‘{permission}’ for this action.
````

#### `require script <javascript returning a boolean>`
An optional JavaScript that must return true/false. The rule will only be executed if it returns a value of true. You can use "player" to get the sender’s instance (nullable) and "nbt" to get the NBT-API NBTItem instance for NBT manipulation (not null). You can also use other rule variables there and they will be translated in the script directly. A variable returning "true" will be treated as a boolean.

Warning: JavaScript knowledge is required to program the script. We currently don’t have the capacity to do so we don’t offer help with creating your own scripts.

Example:

````
require script player.getHandle().ping > 10
require script nbt.hasCompount("CustomItem")
````

#### `require gamemode <survival/creative/adventure/spectate>`
Only apply rule if sender has the given gamemode. You can use | to specify multiple gamemodes to require.

Example: 

````
require gamemode creative
require gamemode adventure|spectate
````

#### `require world <world name>`
If sender is not within any of the given world(s), ignore the rule. Use | to separate multiple worlds to ignore.

Example:

````
require world flat
require world flat|flat_nether
````

#### `require region <region name>`
If sender is not within any of the given region(s), ignore the rule. Use | to separate multiple regions to ignore.

Example:

````
require region warzone
require region warzone|peacezone
````

#### `require key <key name>`
Require the custom data key to be set using the "save key" operator elsewhere to execute this rule.

Example:

````
require key player-name
````

#### `ignore key <key name>`
Ignore the custom data key if set using the "save key" operator elsewhere from executing this rule.

Example:

````
ignore key player-name
````

#### `save key <key> <value>`
Save a custom key to player's data. This is permanent and will remain even after reload.

WARNING: The key, before saved, is treated as JavaScript. That means, if you simply want to save a string such as "tree", you must put it into brackets: "save key 'tree'". In your save code, you can use "player" variable to get Bukkit Player class, see image below for example usage.

Example:

````
save key player-name <key>
````

#### `require playtime <human readable format>`
Only execute this rule if the player has spent at least the given amount of time on the server. Use /protect playtime to view playtime of players. Please note that this is per-server and not sync over bungee/velocity. This data is stored in your world/playerdata dat file.

Example:

````
require playtime 1 hour
````

#### `ignore perm <permission>`
A permission the sender will have to bypass the rule.

#### `ignore script <javascript returning a boolean>`
See "require script", except that, if this script here returns true, the rule will not be applied.

#### `ignore gamemode <survival/creative/adventure/spectate>`
If sender has the given gamemode, the rule will not apply for him. You can use | to specify multiple gamemodes to ignore.

Example: 

````
ignore gamemode creative
ignore gamemode adventure|spectate
````

#### `ignore world <world name>`
If sender is in the given world, bypass the rule. Use | to separate multiple worlds to ignore.

Example:

````
ignore world anarchy
ignore world anarchy|anarchy _nether|anarchy _the_end
````

#### `ignore region <region name>`
If sender is the given region(s), bypass the rule. Use | to separate multiple regions to ignore.

Example:

````
ignore region warzone
ignore region warzone|peacezone
````

#### `ignore playtime <human readable format>`
Do not execute this rule if the player has spent the given amount of time or more on the server. Use /protect playtime to view playtime of players. Please note that this is per-server and not sync over bungee/velocity. This data is stored in your world/playerdata dat file.

Example:

````
ignore playtime 12 hours
ignore playtime 1 day
ignore playtime 60 minutes
````

#### `then command <command1|command2>`
Commands that will be executed in the given order as the sender, with his permissions. Use | to define multiple commands, and use the `{player}` variable to get the player.

#### `then console <command1|command2>`
Commands that will be executed in the given order from the console, with server privileges. Use | to define multiple commands, and use the `{player}` variable to get the player.

#### `then bungeeconsole <server> <command1|command2>`
Commands that will be sent to BungeeCord to be executed. Use | to define multiple commands, and use the `{player}` variable to get the player.

**You need VelocityControl or BungeeControl Red. Make sure that you give yourself the "chatcontrol.command.forward" permission on BungeeCord also.**

The server variable can either be "bungee" (so we run the command on BungeeCord), "velocity" for Velocity, or a name of another server where the command should be forwarded. 

#### `then log`
Log a message to the console.

Example:

````
then log {player} at {world} {x} {y} {z} has triggered this rule!
````

#### `then kick <reason>`
If specified, player will be kicked with the given message. Use the `{player}` variable to get the player and other variables normally.

#### `then toast [material] [style] <message>`
Sends a toast notification to the player.
Styles available are `CHALLENGE`, `GOAL` and `TASK`

````
then toast Hello world!
then toast WITCH_SPAWN_EGG Hello world!
then toast WITCH_SPAWN_EGG CHALLENGE Hello world!
````

#### `then notify <permission> <message>`
Send the given message to every other player on your network/server that has the given permission. Used for staff notifications. You need ChatControl Red and VelocityControl or BungeeControl Red if you want cross-server sync.

Example:

````
then notify protect.alert.admins &8[&4{rule_name} violation&8] &c{player} got his {item_type} confiscated
````

#### `then discord <channel> <message>`
Requires DiscordSRV. Send a message to the given Discord channel. Use the `{player}` variable to get the player and other variables normally.

#### `then write`
Write a message to the file.

Example:

````
then write logs/swear.log {player} at {world} {x} {y} {z} has triggered this rule with: {original_message}
````

#### `then fine <amount>`
If specified, and you have Vault plugin installed, we will take the given amount of your currency from the player's bank account. Do not specify the currency symbol.

Example:

````
then fine 100
````

#### `then sound <name> <volume> <pitch>`
Plays a sound to the player. 

Select the sound names from the following link:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompSound.java

Example:

````
then sound ENTITY_ARROW_HIT_PLAYER 1.0 0.1
````

#### `then title <title|subtitle|fadeIn|stay|fadeOut>`
Send a title with subtitle to the player, if possible. Use the `{player}` variable to get the player and other variables normally. Split the message with | to send the other part as subtitle.
The `fadein`, `stay` and `fadeout` values are in ticks (20 = 1s), and they __are not__ necessary.

Example:

````
then title &6Hi {player}|&cThis is a subtitle
then title &6Hi {player}|&cThis is a subtitle|10|60|10
````

#### `then actionbar <message>`
Send action bar message to the player, if possible. Use the `{player}` variable to get the player and other variables normally.

#### `then bossbar <color> <style> <seconds to show> <message>`
Send boss bar to the player, if possible. For message, use the `{player}` variable to get the player and other variables normally.

Use this link to select a color:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompBarColor.java

Use this link to select a style:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompBarStyle.java

#### `then warn <message>`
Optional message to send to the player. Use | to define multiple messages, one of which will be selected randomly. Use the `{player}` variable to get the player and other variables normally.

To send multiline warn messages, you can use multiple "then warn" operators multiple times on new lines.


#### `then abort`
Stop processing rules that follow after this one. We process rules from top to bottom of your files.

Example:
````
then abort
````

#### `dont log`
Prevent the rule from being logged into "/chc log".

Example:
````
dont log
````

#### `dont verbose`
Prevent the rule from printing "MATCHED **" and similar messages to console.

Example:
````
dont verbose
````

#### `disabled`
Makes this rule load to memory but be disabled. Used in "/chc rule" commands to toggle rules.

Example:
````
disabled
````
