# Rules

Rules are the #1 way to filter anything in your chat.

Rules are used to match [advertisements](https://mineacademy.org) in messages, swear words and other prohibited stuff, but so much more. You can send custom messages based on player chat or command output and replace 10s of other plugins with our unique rules system.

<div class="image-container">
  <img src="https://i.imgur.com/2GeqdSJ.gif" alt="Rules filter demonstration" />
</div>

::: tip New: Introducing web-based rules creator
Do you have a list of words you want to block? Simply visit [app.mineacademy.org/chatcontrol-rules-generator](https://app.mineacademy.org/chatcontrol-rules-generator) and turn them into regex-based, effective rules!
:::

### Clickable links:

Use MiniMessage click event, [use this tool for simple setup](https://webui.advntr.dev/). For example: `Visit <click:open_url:'https://google.com'>google.com</click>`

---

How they work is that they are simple regular expressions that we test against every message. When matched, they can execute numerous operators you define. The rules/ folder contains files for all aspects of the game:

* anvil.rs: Rules applied to items when renamed on anvil.
* book.rs: Rules applied to books when edited or signed.
* chat.rs: Rules applied to chat messages.
* command.rs: Rules applied to commands.
* global.rs: Rules applied to everything, if you import this file, see below.
* groups.rs: Groups of rule operators, so you can catch 50 curse words all of which will alert your staff members the same way but don't have to copy paste the alert message 50 times. You simple create a group and reference to it later. See below.
* sign.rs: Rules applied to signs when placed.
* tag.rs: Rules applied to /tag command when players set their own nick, prefix or suffix.

To open RS files, you need to pay $49 to download our premium RulesOpener. Just kidding guys, simply open it with any supported text editor, see [Use Right Encoding](../general/use-right-encoding).

You can remove/edit everything in `rules/` as you wish. We apply rules from top to bottom order.

## Groups

You can bulk the operators above together in groups.rs file. 

In this file, simply create rules using the same operators as above but instead of "match" use "group {name}" to create a rule. Then return back to your rules files and reference to this group using "group {name}".

That way, you can deal with of 100s swear words easily without having to copy-paste operators under every rule.

## Imports

Every rule .rs file can import rules from other rs files (except from groups.rs) by using the follow operator below. You can add multiple operators if you wish, but you cannot create your own files.

`@import <rule type>`

## Which placeholders can I use?
Please see [Variables page](variables) for a list of placeholders you can use. Please know that not all placeholders are available on all places within the rules files.

## Chinese / Cyrillic / Accented languages and rules
Rules should work fine for your non-English language and we even make it easier to catch swears by replacing accents so that á ä ô and others get replaced into regular a and o. If you want to disable this feature set **Rules.Strip_Accents** to **false** in **settings.yml**. You can also disable this individually only for rules you need to, search below for "strip accents".

## Making Efficient Rules
Below is an example of a filter which blocks the word "fuck", and is also immune to some bypasses like `f.u.c.k` and even `fuuu-ck` or `f#ck`. 

`match \b(f+[\W\d_]*[u_!@#$%^&*]+[\W\d_]*c+[\W\d_]*k+)(?=[^\s]*\b)`

<div class="image-container">
  <img src="https://i.imgur.com/XgGtbKo.png" alt="Efficient rules example" />
</div>

The bold underline letters match the word. Notice how we also match _!@#$%^&*]+[\ letters as replacements for u, such that f_ck or f#ck is also caught. The last brown section will match the word inside another such as fucker, but will properly stop the filter in a sentence: "fuck you" will make only "fuck" matched and stop in the whitespace.

---

## Making super-efficient rules
You can use the "before replace" operator to remove anything matching the given regex BEFORE the message is matched, thus making it harder for players to bypass the filter by inserting special characters or anything else into it.

```rs
# Matches "hajzl" but removes any unicode such as ® or ™ before matching and replacing it
match (h+(\W|\d|_)*a+(\W|\d|_)*j+(\W|\d|_)*z+(\W|\d|_)*l+(\W|\d|_)*)
group swear
before replace [^\u0000-\u007F]+
then replace záchod
```

## Whitelisting / allowing links or IPs
To allow your server's website, open rules/global.rs, find the following line:

`ignore string minecraft:|youtube.com|imgur.com`

And add the desired domain name to it at the end separated with |, such as "|myserver.com". You can add multiple websites separated by |.

To whitelist your server's IP, see the rule above, named "ip" (it says "# IP filter." in comments). We don't have the ignore operator there so you have to write it:

`ignore string 12.123.12.123`

By prefixing it with \ you make the filter ignore this specific IP address and nothing else. You can put the content after "ignore string " to https://regex101.com/ to see what it matches or not.

To whitelist more IP addresses, place them after the first one separated by | as you could see above when whitelisting domains.

## Whitelisting phrases
Some rules such as "tits" may catch messages such as "but its" or similar. You can fix this in two ways:

**a)** Add the \b characters in the match rule. This makes the rule only match if the message does not have a whitespace either in front (if you put \b in front) or at the end (if you put \b as the last thing in the match):

`match \btits`

This will match "tits" but not "but its". Similarly, you can add also add \b at the end to make it only match when it ends with a whitespace. Be aware that such rules are easier to bypass.

**b)** Use "ignore string" operator. This is the best solution to allow certain words and won't make the rule easier to bypass:

```rs
match anal
ignore string analog|an all
```

This will prevent the two phrases 'analog' and 'an all' being blocked. To ignore multiple words, use the | letter as a separator (shown above, in that case we will ignore both "analog" and "an all").

## Whitespace
If you wish to block a message containing spaces inside ("f u c k", or "come to m y s e r v e r . c o m"), use the 'before replace' operator. Insert it under each rule you want to affect and all whitespaces will be removed:

```rs
match <your rule>
before replace \s*
[...]
```

## Prevent unicode such as Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ
Below you will find a rule that denies all special, unicode characters. Those are misused to bypass filters. Please keep in mind that non-english languages might use them as well. You can past it directly to rules/rules.txt.
```rs
match [^\u0000-\u007F]+
then warn Unicode is prohibited
then deny
```

## Integrating with TownyChat
Create the following channels in settings.yml 

```yaml
    town:
      Format: town-chat
      Party: towny-town
    nation:
      Format: nation-chat
      Party: towny-nation
    ally:
      Format: ally-chat
      Party: towny-ally
```

Now place this into rules/commands.rs

```rs
# -----------------------------------------------------------------------------------------------
# Create /g, /tc, /nc & /ac commands that toggle & sends messages to those channels.
# -----------------------------------------------------------------------------------------------

#Catch "/g" and join the standard channel.
match ^([/]g)$
dont verbose
strip colors false
strip accents false
then command channel join standard
then deny

#Catch "/tc" and join the town channel.
match ^([/]tc)$
dont verbose
strip colors false
strip accents false
then command channel join town
then deny

#Catch "/nc" and join the nation channel.
match ^([/]nc)$
dont verbose
strip colors false
strip accents false
then command channel join nation
then deny

#Catch "/ac" and join the ally channel.
match ^([/]ac)$
dont verbose
strip colors false
strip accents false
then command channel join ally
then deny

#Catch "/g <message>" and redirect to the standard channel.
match ^([/]g) (.*)
dont verbose
strip colors false
strip accents false
then command channel send standard $2
then deny

#Catch "/tc <message>" and redirect to the town channel.
match ^([/]tc) (.*)
dont verbose
strip colors false
strip accents false
then command channel send town $2
then deny

#Catch "/nc <message>" and redirect to the nation channel.
match ^([/]nc) (.*)
dont verbose
strip colors false
strip accents false
then command channel send nation $2
then deny

#Catch "/ac <message>" and redirect to the ally channel.
match ^([/]ac) (.*)
dont verbose
strip colors false
strip accents false
then command channel send ally $2
then deny
```

## Matching chat and using PlaceholderAPI
Here is an example of how to use with PlaceholderAPI to prevent vanished players from accidentally chatting in a given chat channel (here: standard). It should be fairly self-explanatory.

Place this into rules/chat.rs:

```rs
#
# Match any chat message using regex.
#
match ^.*

#
# Place your variable from PlaceholderAPI inside the {}. It must return true/false/yes/no. 
# If it does not, you can simply turn this into a javascript condition like
# require variable {some_variable} output
#
require variable {essentials_vanished} true
#
# Require the channel standard in any mode
#
require channel standard
#
# Send warning messages, block the chat message and don't log the rule in the console.
#
then warn {prefix_error} You are vanished!
then warn {prefix_error} Your message must start with / to talk in chat.
then deny
dont verbose
```

## Regular expression group captures

The plugin supports regex capturing groups and it is possible to refer to them in other operators with `$<number>`. TIP: If the `$1` is not displaying relevant information, use `$0` instead.

Don't forget to define groups by `()` brackets in your matching expressions!

Example:
```rs
match (You are being teleported to) (.*)
then rewrite You have been moved to . Do /spawn to get back.
```

## Forcing chat message to start with . for vanished players

The following is a great example of two rules working together to force Essentials vanished players to start their messages in local channel with "." in order to chat, preventing accidentally revealing that they are online.

Make sure that PlaceholderAPI is installed with its Essentials expansion pack.

```rs
match ^\.(.*)
dont verbose
require variable {essentials_vanished} true
require channel local
# Use group matcher to remove the . from the message
# This rewrites the entire chat message to its content
# Read about group captures in the section above this one
then rewrite $1
# Stop processing the rule below which would prevent this message
# Improvement tip: You can make the rule below ignore messages starting
# with . and then this is not necessary
then abort

match ^.*
dont verbose
require variable {essentials_vanished} true
require channel local
then warn <gray>You are vanished!
then warn <gray>Your message must start with . to talk in chat.
then deny
```

## Operators

Each rule consists of different things, we call them operators. We invented a custom language to write these because there simply was no other way and yaml was ineffective.

Below, the `<>` parameters are must-have whereas the `[]` ones are optional.

#### `match <regular expression>`
This is the core fundamental of every rule. A player's message will be tested against the given regular expression and, when matched, the rule's operators will be executed.

You can put plain-English words into it or regular expressions. Use regex101.com to test them first.

Example:
```
match bitch
match b(i|!)tch
```

#### `name <rule name>`
Give a rule a name that you can later use in alert messages or in groups with the `{rule_name}` variable.
Example:

```
name ip
```

#### `group <group name>`
Assign a group to the rule. Multiple rules can have the same group to share operators into, so can easily block e.g. 100s of swear words and execute the same actions for all of them using a single group. Configure groups in rules/groups.rs file.

Example:

```
group advertisement
```

#### `before replace <regex> [with <replacement>]`
A regular expression used to match the message, similar to "match". However, this is applied before the match and the message that will be evaluated is edited for the match. 
You can specify the "with" parameter that will edit the message before it will be evaluated against the match with the given replacement. If you do not specify this, we will simply strip out the matched part of the message before matching it with the main "match" operator.
This is used to "prepare" messages for advertisement filters, where we remove some letters from players' messages they typically use to bypass the filter before matching it.

Example:

```
before replace dot|\[|\]|\{|\}|\(|\) with .
before replace [\(\[\]\)]|\s*
```

#### `strip colors`
Overrides Rules.Strip_Colors option from settings.yml for an individual rule.

Example:
```
strip colors
strip colors true
strip colors false
```

#### `strip accents`
Overrides Rules.Strip_Accents option from settings.yml for an individual rule.

Example:
```
strip accents # sets it true
strip accents true
strip accents false
```

#### `strip colors`
Overrides Rules.Strip_Colors option from settings.yml for an individual rule.

Example:
```
strip colors # sets it true
strip colors true
strip colors false
```

#### `begins` and `expires`
Expires means the date on which we start executing this rule. Begins means the date after which we stop executing this rule.
This is a great addition to pre-create rules for the holiday or special events!

Examples:

```
begins 24 Dec 2023, 00:00
```

```
expires 31 Dec 2023, 23:59
```

Or you can even use variables to replace with the current timestamp:

```
# This will broadcast from 24 Dec to 31 Dec each year.
begins 24 Dec {year}, 00:00
expires 31 Dec {year}, 23:56

# This will broadcast between 0 and 30th minute of each hour
begins {day} {month} {year}, {hour}:00
expires {day} {month} {year}, {hour}:30
```

#### `delay <time> [message]`
How much time to wait before running this rule again? You can append an optional message after the delay, which will prevent the chat message or command from appearing and send the player a notice.

This delay is applied globally to all users.

```
delay 6 seconds
delay 6 seconds You must wait {delay} seconds before triggering this rule again!
```

#### `player delay <time> [message]`
How much time to wait before running this rule again for this player? You can append an optional message after the delay, which will prevent the chat message or command from appearing and send the player a notice.

Works similar to the above operator, however, the "player delay" operator only affects a single user. 

```
player delay 6 seconds
player delay 6 seconds You must wait {player_delay} seconds before triggering this rule again!
```

#### `require perm <permission> [message]`
An optional permission that, if set, will make the rule only execute if the sender has it. You can also specify what message will be sent to the player if he lacks the permission.

Example:

```
require perm chatcontrol.rule.special
require perm chatcontrol.rule.special {error_prefix} You lack the '{permission}' for this action.
```

#### `require variable <placeholder> <value>`
(Requires ChatControl 11)

Parse the placeholder and only process the rule if its parsed value equals the one you set. If you don't set a value it will default to true. 

This is significantly more performant than parsing JavaScript, however we only support "equals" matching.

Prepend "!" before the value to negate the condition. This removes the need for "ignore variable" since it effectively negates it.

Example:

```
require variable {player_vanished} # requires player to be vanished
require variable {player_vanished} true # requires player to be vanished
require variable {player_vanished} false # requires player to not be vanished
require variable {player_gamemode} CREATIVE # requires player to be in creative
require variable {player_gamemode} !CREATIVE # requires player to be not in creative
```

Example 2:

```
match I am in creative.
require variable {player_gamemode} !CREATIVE
then warn <red>Do not lie, you are in {player_gamemode}!
then deny
```

#### `require script <javascript returning a boolean>`
An optional JavaScript that must return true/false. The rule will only be executed if it returns a value of true. You can use "player" or "sender" variable to get the sender's instance. You can also use [Variables](variables) there and they will be translated in the script directly, so a variable returning "true" will be treated as a boolean, such as "{player_vanished}".

Compiling JavaScript has a performance penalty. For simple booleans, it's faster to use "require variable" instead.

::: warning
JavaScript knowledge is required to program the script. We currently don't have the capacity to do so we don't offer help with creating your own scripts.
:::

Example:

```
#require script {sender_is_player} # do not use for simple booleans, see require variable above
require script player.getHandle().ping > 10
```

#### `require gamemode <survival/creative/adventure/spectate>`
Only apply rule if sender has the given gamemode. You can use | to specify multiple gamemodes to require.

Example: 

```
require gamemode creative
require gamemode adventure|spectate
```

#### `require world <world name>`
If sender is not within any of the given world(s), ignore the rule. Use | to separate multiple worlds to ignore.

Example:

```
require world flat
require world flat|flat_nether
```

#### `require region <region name>`
If sender is not within any of the given region(s), ignore the rule. Use | to separate multiple regions to ignore.

Example:

```
require region warzone
require region warzone|peacezone
```

#### `require channel <channel name> [channel mode]`
If sender is not within any of the given channel(s), ignore the rule. Use | to separate multiple channels to ignore. You can also specify the mode the sender must be in to require.

Exception: If the channel mode is set to "read" we will make rule not run even when player is writing from another channel, because logically he cannot be writing from this other channel that is is only reading.

Example:

```
require channel standard
require channel admin|global
```

#### `require key <key name>`
Require the custom data key to be set using the "save key" operator elsewhere to execute this rule.

Example:

```
require key player-name
```

#### `ignore key <key name>`
Ignore the custom data key if set using the "save key" operator elsewhere from executing this rule.

Example:

```
ignore key player-name
```

#### `save key <key> <value>`
Save a custom key to player's data. This is permanent and will remain even after reload.

::: warning
The key, before saved, is treated as JavaScript. That means, if you simply want to save a string such as "tree", you must put it into brackets: "save key 'tree'". In your save code, you can use "player" variable to get Bukkit Player class, see image below for example usage.
:::

Example:

```
save key player-name <key>
```

For example, here's a complete sequence of rules used to create simple chat bot. Player then type @bot <param> and then can save their own name.

<div class="image-container">
  <img src="https://i.imgur.com/VGDzBxV.png" alt="Chat bot rules example" />
</div>

#### `ignore perm <permission>`
A permission the sender will have to bypass the rule.

#### `ignore string <regular expression>`
Optional regular expression that, if matched against the part of the whole message being matched, it will be ignored.

Useful when matching "ass" but you want to ignore "grass" from being matched. You can use the | letter from regular expressions to ignore multiple words.

Example:

```
ignore string grass|glass
```

#### `ignore type <chat/command/sign/book/anvil>`
If your rule is in global.rs file, you can specify what kinds of places you want this rule to ignore. Use | to separate multiple values.

Example:

```
ignore type chat
ignore type sign|book|anvil
```

#### `ignore script <javascript returning a boolean>`
See "require script", except that, if this script here returns true, the rule will not be applied.

Compiling JavaScript has a performance penalty. For simple booleans, it's faster to use "require variable" instead.

#### `ignore commandprefix`
Only applied in commands. Ignore the command label such as "/chc:me" in "/chc:me hello world" and only test the rule against the rest (i.e. "hello world") to prevent false catches.

Example:

```
ignore commandprefix
```

#### `ignore command <command>`
Ignore the given command labels. Use | to separate multiple labels to ignore.

Example:

```
ignore command /register|/reg|/r
ignore command /r* # will match all /register /reg /r, anything starting with /r
```

#### `require command <command>`
Require the given command for the command rule. Use | to separate multiple labels.

Example:

```
require command /register|/reg|/r
require command /r* # will match all /register /reg /r, anything starting with /r
```


#### `ignore gamemode <survival/creative/adventure/spectate>`
If sender has the given gamemode, the rule will not apply for him. You can use | to specify multiple gamemodes to ignore.

Example: 

```
ignore gamemode creative
ignore gamemode adventure|spectate
```

#### `ignore world <world name>`
If sender is in the given world, bypass the rule. Use | to separate multiple worlds to ignore.

Example:

```
ignore world anarchy
ignore world anarchy|anarchy_nether|anarchy_the_end
```

#### `ignore region <region name>`
If sender is the given region(s), bypass the rule. Use | to separate multiple regions to ignore.

Example:

```
ignore region warzone
ignore region warzone|peacezone
```

#### `ignore channel <channel names> [channel mode]`
Only applied from chatting – when sender sent the message from a certain chat channel, ignore the rule. Use | to separate multiple channels. You can also specify the mode the sender must be in to ignore.

Exception: If the channel mode is set to "read" we will make rule not run even when player is writing from another channel, because logically he cannot be writing from this other channel that is is only reading.

Example:

```
ignore channel admin
ignore channel admin|anarchy
```

#### `ignore discord`
Do not apply the rule if the sender of the message is coming from Discord.

Example:

```
ignore discord
```

#### `ignore muted`
Do not apply the rule if the sender of the message is muted either from ChatControl, LiteBans, Essentials or CMI.

Example:

```
ignore muted
```

#### `require discord`
Only apply the rule if the sender of the message is coming from Discord.

Example:

```
require discord
```


#### `then warn <message>`
Optional message to send to the player. Use | to define multiple messages, one of which will be selected randomly. Use the `{player}` variable to get the player and other variables normally.

To send multiline warn messages, you can use multiple "then warn" operators multiple times on new lines.

#### `then kick <reason>`
If specified, player will be kicked with the given message. Use the `{player}` variable to get the player and other variables normally.

#### `then toast [material] [style] <message>`
Sends a toast notification to the player.
Styles available are `CHALLENGE`, `GOAL` and `TASK`

```
then toast Hello world!
then toast WITCH_SPAWN_EGG Hello world!
then toast WITCH_SPAWN_EGG CHALLENGE Hello world!
```

#### `then discord <channel> <message>`
Requires DiscordSRV. Send a message to the given Discord channel. Use the `{player}` variable to get the player and other variables normally. Discord formatting is supported.

Example:

```
then discord 123456789132456 **{player}** said: {message}
```

#### `then title <title|subtitle|fadeIn|stay|fadeOut>`
Send a title with subtitle to the player, if possible. Use the `{player}` variable to get the player and other variables normally. Split the message with | to send the other part as subtitle.
The `fadein`, `stay` and `fadeout` values are in ticks (20 = 1s), and they __are not__ necessary.

Example:

```
then title <gold>Hi {player}|<red>This is a subtitle
then title <gold>Hi {player}|<red>This is a subtitle|10|60|10
```

#### `then actionbar <message>`
Send action bar message to the player, if possible. Use the `{player}` variable to get the player and other variables normally.

#### `then bossbar <color> <style> <seconds to show> <message>`
Send boss bar to the player, if possible. For message, use the `{player}` variable to get the player and other variables normally.

Use this link to select a color:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompBarColor.java

Use this link to select a style:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompBarStyle.java

#### `then sound {name} {volume} {pitch}`
Plays a sound to the player. 

Select the sound names from the following link:

https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/remain/CompSound.java

Example:

```
then sound ENTITY_ARROW_HIT_PLAYER 1.0 0.1
```

#### `then book {name}`
Opens a book. The name of the book is the file name of book from books/ folder. You can create these books using "/chc book" command.

Example:

```
then book test-book
```

#### `then notify <permission> <message or format>`
Send the given message to every other player on your network/server that has the given permission. Used for staff notifications.

You can also specify a format name there to be used.

Example:

```
then notify chatcontrol.rules.swear <dark_gray>[<dark_red>{rule_name} violation<dark_gray>] <red>{player} wrote: {original_message}
then notify chatcontrol.rules.ad Ad_Info
```

#### `then fine <amount>`
If specified, and you have Vault plugin installed, we will take the given amount of your currency from the player's bank account. Do not specify the currency symbol.

Example:

```
then fine 100
```

#### `then points <warning set> <amount>`
If you have warning points enabled, we will give the amount of warning points to the given warning set of the player.

Example:

```
then points ads 50
```

#### `then replace <replacement>`
Replace the matched part in the message with the given replacement. Use | to separate multiple replacements. Once will be randomly chosen from those.

Example:

```
then replace I am a fool!
then replace I am a fool!|I am an idiot!
```

#### `then rewrite <replacement>`
See "then replace" above, except that we will replace the entire message with the replacement(s), not just the matched part of it. You can still use the | separator to specify multiple messages, one of which will randomly be selected.

#### `then rewritein <world> <message>`
Same as "then rewrite" except that the message will only be rewritten in the specified world. You can still use the | separator to specify multiple messages, one of which will randomly be selected.

You can add multiple operators in the same rule for multiple worlds.

Example:

```
then rewritein hardcore This action is prohibited on the hardcore world.
```

#### `then console <command1|command2>`
Commands that will be executed as the console. Use | to define multiple commands, one of which will randomly be executed, and use the `{player}` variable to get the player. Use this operator on multiple lines to add multiple commands.

**NB:** Starting ChatControl 11, the | divider is used to pick one command randomly. On ChatControl 10, the | is used to separate multiple commands (all of which will be executed at the same time).

In the example, two commands will be executed in total. The first one being picked either "/say Hello" and "/me me I'm {player}", and the second always being the same:

```
then console say Hello|me I'm {player} # pick one and execute
then console say {player} typed {message} # always run this command
```

#### `then command <command1|command2>`
Commands that will be executed as the player sender, with his permissions. Use | to define multiple commands, one of which will randomly be executed, and use the `{player}` variable to get the player. Use this operator on multiple lines to add multiple commands.

See "then console" above for example use. 

#### `then proxyconsole <server/proxy> <command1|command2>`
Commands that will be executed on proxy if "proxy" is used as the server name, or on another server. Use | to define multiple commands, one of which will randomly be executed, and use the `{player}` variable to get the player. Use this operator on multiple lines to add multiple commands.

**Make sure that you give yourself the "chatcontrol.command.forward" permission on proxy.**

See "then console" above for example use. 

#### `then log`
Log a message to the console. Split multiple messages by | to pick one at random. Use this operator on multiple lines to log multiple messages.

Example:

```
then log {player} {player_world} {player_x} {player_y} {player_z} has triggered this rule!
```

#### `then write`
Write a message to the file.

Example:

```
then write logs/swear.log {player} at {player_world} {player_x} {player_y} {player_z} has triggered this rule with: {original_message}
```

#### `clear chat history`
Requires ProtocolLib. Remove all known past messages in the chat that the player has sent.

Example:
```
clear chat history
```

#### `then abort`
Stop processing rules that follow after this one. We process rules from top to bottom of your files.

Example:
```
then abort
```

#### `then deny`
Prevent the message from appearing in the chat by canceling it. If this is for books, signs, items etc. we will prevent their creation.

Example:
```
then deny
```

#### `then deny silently`
Prevent the message from appearing for others but send it to sender, making him believe it was really sent out. Useful for blocking ads so that the player will not continue to spam them but will believe his advertisement has been seen (where in reality only admins have seen it and can take proper massive action).

Example:
```
then deny silently
```

#### `spy command`
This will simulate player typing the command in the chat and performs spy and log features. Useful if you are creating custom command through command.rs rules file.

Example:
```
spy command
```

#### `dont log`
Prevent the rule from being logged into "/chc log".

Example:
```
dont log
```

#### `dont spy`
Prevent the message that the rule catches from being spied using "/spy" feature.

Example use case: In CraftBook plugin people can use the pipe system which requires people to place signs where line 2 is "[Pipe]" and it gets quite spammy, so you can filter signs containing a [Pipe] from being spied on. 
```
dont spy
```

#### `dont verbose`
Prevent the rule from printing "MATCHED **" and similar messages to console.

Example:
```
dont verbose
```

#### `disabled`
Makes this rule load to memory but be disabled. Used in "/chc rule" commands to toggle rules.

Example:
```
disabled
```