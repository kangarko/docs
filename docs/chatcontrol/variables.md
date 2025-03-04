# Variables

A variable (placeholder) is a message in brackets `{}`, which is replaced by the actual data. Example: `{player}` is replaced with the player name. ChatControl supports thousands of placeholders and you can even create your own ones!

::: tip
Use `/chc info variable <message>` to test different variables in a demo message.
:::

For a tutorial on variables in `variables/` folder, see [JavaScript Variables](javascript-variables).

## Important Warnings

::: warning
* **PlaceholderAPI**: Use the `{syntax}` as the `%syntax%` syntax is unsupported to avoid double-parsing and performance dragging, see note below. You also will need to prefix the variable with the plugin's name, i.e. `{origin_origin}` if using the Origins plugin because just `{origin}` will NOT work.
* **LuckPerms**: When using LuckPerms, to avoid double prefixes, we suggest you use `{luckperms_prefix}` from PlaceholderAPI plugin instead of `{player_prefix}` from Vault.
* We may lowercase placeholders for performance reasons. If your PlaceholderAPI contains a variable with Uppercased Letters that doesn't work, try writing it in all lower space: Such as `{VotingPlugin_alltimetotal}` to `{votingplugin_alltimetotal}`
:::

## Proxy Variables

::: info
These variables are taken from player's Bukkit server and work on [Proxy](proxy).
:::

| Variable Name | Description |
|---|---|
| `{player_name}` | Dude's name. |
| `{player_nick}` | Player's nick (or name if not set). |
| `{player_group}` | Player's group from permission plugin installed on his server. |
| `{player_prefix}` | Player's prefix from the server he is on. |
| `{player_server}` | Player's server he is on. |
| `{player_is_afk}` | Returns true or false if player is AFK. |
| `{player_is_ignoring_<type>}` | Returns true or false if player is ignoring the given toggle. See Toggle.Apply_On in settings.yml for available types. |
| `{player_is_vanished}` | Returns true or false if player is vanished. |

## DiscordSRV variables

Discord variables are limited because we can't get the player instance, but you can use many PlaceholderAPI variables that support it, including:

| Variable Name | Description |
|---|---|
| `{player_nick}` | Player's nick (or name if not set). |
| `{channel_name}` | Channel's name. |
| `{discord_username}` | Player's name, called from DiscordSRV plugin. |
| `{discord_name}` | Player's "effective" name, calling DiscordSRV plugin. |
| `{discord_top_role}` | Player's highest role. |
| `{discord_top_role_initial}` | The initial of player's top role. |
| `{discord_top_role_alias}` | The alias of player's top role. |
| `{discord_all_roles}` | All roles of the player. |
| `{discord_reply}` | The reply player if player is replying to a message, or empty. |

## Native Variables

By default we support the following variables almost everywhere. If you need more, install PlaceholderAPI or MVdWPlaceholderAPI.

Sometimes we provide more variables than the ones above, such as `{message}` when there's a message to replace. We can't enumerate them all here because they are different for channels etc., but please see the config files and you'll see them easily.

| Variable Name | Description |
|---|---|
| `{player}` or `{player_name}` | Dude's name. |
| `{sender_name}` | (Only some places in the plugin) The name of the message sender you can use in Receiver_Condition variables in your formats (If you use `{player}` in that keys it will return the message receiver's name and not the sender's). |
| `{player_tab_name}` | Player's list name. |
| `{player_display_name}` | Player's display name. |
| `{player_nick}` | Player's nick, or name if no nick. |
| `{player_prefix}` | Vault plugin: Player's prefix. |
| `{player_suffix}` | Vault plugin: Player's suffix. |
| `{player_group}` | Vault plugin: Player's group name from your permissions plugin. |
| `{player_primary_group}` | Vault plugin: Player's primary permission group. |
| `{player_chat_color}` | Get player's chat color, if set, or empty. This formats the message. |
| `{player_chat_color_name}` | Get player's color name, such as 'red', if set, or return 'none'. |
| `{player_chat_color_letter}` | Get player's color code, such as '&c' for red, or return ''. |
| `{player_chat_decoration}` | Get player's decoration, if set, or empty. This formats the message. |
| `{player_chat_decoration_name}` | Get player's decoration name, such as 'bold', if set, or return 'none'. |
| `{player_chat_decoration_letter}` | Get player's decoration code, such as '&l' for bold, or return ''. |
| `{player_channel_range}` | Returns the current player channel's chat range (if defined - non-decimal) or `none` if the channel has no defined range. |
| `{player_receiver_prefix}` | Shows the prefix of the receiver in private messages. Feature is limited on proxy due to the nature of parsing variables cross network. |
| `{player_town}` | Towny plugin: Player's town, if any. |
| `{player_nation}` | Towny plugin: Player's native, if any. |
| `{player_faction}` | Factions, FactionsUUID or FactionsX: Player's faction, if any. |
| `{player_is_vanished}` | Returns true or false if the player is vanished. |
| `{player_newcomer}` | Returns true or false if the player is a [Newcomer](newcomer). |
| `{player_country_code}` | MAY BLOCK THE MAIN THREAD: Looks up player's country code from his IP. |
| `{player_country_name}` | MAY BLOCK THE MAIN THREAD: Looks up player's country name from his IP. |
| `{player_region_name}` | MAY BLOCK THE MAIN THREAD: Looks up player's region name from his IP. |
| `{player_isp}` | MAY BLOCK THE MAIN THREAD: Looks up player's isp from his IP. |
| `{player_world}` | Player's world name. Multiverse-Core aliases are supported. |
| `{player_health}` | Player's health. |
| `{player_location}` | Player's full location. |
| `{player_x}`, `{player_y}` and `{player_z}` | Player's location points. |
| `{sender_is_player}` | Return true/false depending if player is not console and not discord. |
| `{sender_is_console}` | Return true/false depending if player is console. |
| `{sender_is_discord}` | Return true/false depending if player is from Discord. |
| `{player_has_nick}` | Return true/false if the player has a custom nick. |
| `{date}` | A time formatted according to your Date_Format in settings.yml |
| `{date_short}` | A time formatted according to your Date_Format_Short in settings.yml |
| `{date_month}` | A time formatted according to your Date_Format_Month in settings.yml |
| `{player_last_active}` | Return the last active player date using Timestamp_Format from settings.yml. |
| `{player_last_active_elapsed}` | Return the time in Xd Xm Xs since player's last join. |
| `{player_last_active_elapsed_seconds}` | Return the time in seconds since player's last join. |
| `{chat_line}` | A simple chat line. |
| `{chat_line_smooth}` | A smooth chat line. |
| `{server_name}` | The "server-name" key from server.properties, or if you use PlaceholderAPI with the server extension, from its file. |
| `{server_version}` | The full server version such as 1.21.2 |
| `{label_main}` | Return our main command label. |
| `{prefix_plugin}` | Return the Prefix key from your settings.yml |
| `{prefix_info}` | Return the info prefix from your localization. |
| `{prefix_success}` | Return the success prefix from your localization. |
| `{prefix_warn}` | Return the warn prefix from your localization. |
| `{prefix_error}` | Return the error prefix from your localization. |
| `{prefix_question}` | Return the question prefix from your localization. |
| `{prefix_announce}` | Return the announce prefix from your localization. |
| `{data_X}` | Returns a custom variable. This is set in rules with data-related operators, see [Rules](rules). See rules/chat.rs for example (search for @bot name demo rule). |

## PlaceholderAPI Syntax

Starting ChatControl 11, always use the `{syntax}` in your variables, even in extensions requiring %syntax%.

### Using **ParseOther** extension

The key Receiver_Condition inside the same-land format part will, thanks to `{sender_name}` already being parsed in a Format, replace the land's name where the sender is standing and evaluate it with the land's name where the receiver is standing, and print it in the chat for the receiver of the chat message if both are equal.

```yaml
same-land:
    Receiver_Condition: "'{parseother_{{sender_name}}_{lands_land_name_plain_here}}' == '{lands_land_name_plain_here}'"
    Message: "&8[&c{lands_land_name_plain_here}&8] "
```


### Using **ChangeOutput** extension

The variable below will properly parse the eternal tags for the sending player, and print the tag or "&8None Active" if the player has no tag.

`{changeoutput_contains_input:{eternaltags_active}_matcher:true_ifmatch:{eternaltags_tag}_else:&8None Active+}`




## PlaceholderAPI-Compatible Variables

The variables below can be used with the PlaceholderAPI plugin anywhere, or, remove "chatcontrol" from them to use them in our plugin.

::: warning Important
Always use `{syntax}` and NOT %syntax%. We have dropped supporting %syntax% in ChatControl 11 due to 2x slower performance since we had to parse variables 2x.
:::

| Variable Name | Description |
|---|---|
| `{chatcontrol_label_channel}` | The first command alias that triggers channel command, such as "/channel". This is set in settings.yml.  |
| `{chatcontrol_label_ignore}` | The first command alias that triggers ignore command. |
| `{chatcontrol_label_mail}` | The first command alias that triggers mail command. |
| `{chatcontrol_label_me}` | The first command alias that triggers me command. |
| `{chatcontrol_label_mute}` | The first command alias that triggers mute command. |
| `{chatcontrol_label_motd}` | The first command alias that triggers motd command. |
| `{chatcontrol_label_tag}` | The first command alias that triggers tag command. |
| `{chatcontrol_label_reply}` | The first command alias that triggers reply command. |
| `{chatcontrol_label_spy}` | The first command alias that triggers spy command. |
| `{chatcontrol_label_tell}` | The first command alias that triggers tell command. |
| `{chatcontrol_label_toggle}` | The first command alias that triggers toggle command. |
| `{chatcontrol_player_is_spying_<channel>}` | Returns "true" or "false" if the player is spying the given channel. |
| `{chatcontrol_player_is_spying_<mode>}` | Returns "true" or "false" if the player is spying the given mode. Modes available: `chat`, `command`, `private_message`, `mail`, `sign`, `book` and `anvil`. |
| `{chatcontrol_player_in_channel_<channel>}` | Returns "true" or "false" if the player is in the given channel. |
| `{chatcontrol_channel}` | Returns the player's current channel he's writing into. |
| `{chatcontrol_player_channel_mode_<channel>}` | Returns the channel mode ("read" or "write") or "none" if player has no such channel. |
| `{chatcontrol_player_nick}` | Return player's nick, or player's name if not set. |
| `{chatcontrol_player_nick_section}` | Return player's nick using § colors, or player's name if not set. Useful for third party plugins not supporting MiniMessage format, fixes their otherwise broken hex and gradient rendering. |
| `{chatcontrol_player_prefix}` | Return player's prefix set with /tag, or "" if not set. | 
| `{chatcontrol_player_prefix_section}` | Similar to the one above, see `{chatcontrol_player_nick_section}` for what _section does. | 
| `{chatcontrol_player_suffix}` | Return player's suffix set with /tag, or "" if not set. |
| `{chatcontrol_player_suffix_section}` | Similar to the one above, see `{chatcontrol_player_nick_section}` for what _section does. | 
| `{chatcontrol_reply_target}` | Returns "none" or the /reply player if any. |
| `{chatcontrol_player_newcomer}` | Returns "true" or "false" whether or not the player is newcomer. Newcomer limits are set in settings.yml. |
| `{chatcontrol_is_ignoring_<type>}` | Returns "true" or "false" if the player is ignoring the given mode via /toggle command. See Toggle.Apply_On for available types. |
| `{chatcontrol_data_<key>}` | Returns a custom variable. This is set in rules with data-related operators, see [Rules](rules). See rules/chat.rs for example (search for @bot name demo rule). |

## The '+' Plus Letter And Trailing Space Removal

Everyone knows how frustrating is to end up with trailing spaces if you want to show a factions prefix but a player doesn't have any faction `[VIP] ⠀kangarko: Hi!` (see the double space).

That's why we made all variables support the "+" operators in front, or at the end of them. Even PlaceholderAPI variables are supported. 

By adding the + at the end or the start of a variable, such as "`{player_group+}`", we only add an extra space after it if there's an actual variable set. If there is no variable, you will not end up with a trailing space.

## Adding New Variables Via API

You can just hook into PlaceholderAPI and use their API to add placeholders, including relational placeholders: https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/PlaceholderExpansion