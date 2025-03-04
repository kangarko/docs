# Variables

A variable (placeholder) is a message in brackets `{}` (***this now also supports percents*** `%%`), which is replaced by the actual data. Example: {boss_name} is replaced with the boss name. ChatControl supports placeholders in some localization messages as well as it hooks into PlaceholderAPI so you can show your nearest Boss properties in different plugins!

**Note**: When using LuckPerms, to avoid double prefixes, we suggest you use {luckperms_prefix} from PlaceholderAPI plugin instead of {pl_prefix} from Vault.

**Warning:** We may lowercase placeholders for performance reasons. If your PlaceholderAPI contains a variable with Uppercased Letters that doesn't work, try writing it in all lower space: Such as {VotingPlugin_alltimetotal} to {votingplugin_alltimetotal}


## PlaceholderAPI variables

The following variables require a nearby Boss in the radius configured in settings.yml's Variables section.

| Variable Name | Description |
|---|---|
| `%boss_name%` | Closest boss' name (the same as the file name). |
| `%boss_alias%` | Closest boss' alias. Colors are supported. |
| `%boss_health%` | Closest boss' health. |
| `%boss_top_damager%` | Closest boss' top damager player name. |
| `%boss_damage%` | Closest boss' top damage. |
| `%boss_location_x%` | Closest boss' X position. |
| `%boss_location_y%` | Closest boss' Y position. |
| `%boss_location_z%` | Closest boss' Z position. |
| `%boss_location_world%` | Closest boss' world name. |
| `%boss_{bossName}_respawn_{spawnRule}%` | Display the time until the given Boss respawns from the given respawn rule. |
| `%boss_{bossName}_{player}_damage%` | Display the total damage the given player has dealt to this Boss, counts damage dealt to all spawned entities. You can replace {player} with player for the current player, or give a player name. |
| `%boss_{bossName}_{player}_kills%` | Display how many Bosses the player has killed. The way this is counted is listening to a Boss entity death event and getting the killer from there. You can replace {player} with player for the current player, or give a player name. |
| `%boss_{bossName}_top_damage_{leadingPosition}_{player/value}%` | Get the player's name or the amount of damage (see `%boss_{bossName}_{player}_damage%`) that the player at the given leading order has dealt. For example: `%boss_Zombie_top_damage_1_player%` returns the name of the player who dealt the most damage to the Zombie boss. Replace 1 with 2 to get the second most damaging player, etc. |
| `%boss_{bossName}_top_kills_{leadingPosition}_{player/value}%` | Get the player's name or the amount of killed entities (see `%boss_{bossName}_{player}_kills%`) that the player at the given leading order has dealt. For example: `%boss_Zombie_top_kills_1_player%` returns the name of the player who killed the most Zombie bosses. Replace 1 with 2 to get the second most damaging player, etc. |

The following variables require the player to have the Region Tool from "/boss tool" and selected a region.

| Variable Name | Description |
|---|---|
| `%boss_has_region%` | Yes/No depending if the player has selected both region points. |
| `%boss_region_primary_x%` (replace x with y or Z) | Region's primary X, Y or Z positions. |
| `%boss_region_secondary_x%` (replace x with y or Z) | Region's secondary X, Y or Z positions. |
| `%boss_region_world%` | Region's world name. |
| `%boss_region_size%` | Region's amount of selected blocks. |

## Localization Variables

These variables might be used for some messages in localization/ folder for those which are shown at a boss-connected event.

| Variable Name | Description |
|---|---|
| `{player} or {player_name}` | Dude's name. |
| `{boss_name}` | Boss' name which equals to its yml file in Bosses/ folder. No colors supported. |
| `{boss_alias}` | Boss' alias, which can be different from the name. It can be set in Boss menu > Settings > Alias. Colors are supported. |
| `{ip_address}` | Player's IP address. |
| `{timestamp}` | A time formatted according to your Timestamp_Format key in settings.yml |
| `{timestamp_short}` | A time formatted in dd.MM.yyy HH:mm format. |
| `{chat_line}` | A simple chat line. |
| `{chat_line_smooth}` | A smooth chat line. |
| `{server_name}` | The "server-name" key from server.properties, or if you use PlaceholderAPI with the server extension, from its file. |
| `{label}` | Return our main command label. |
| `{plugin_prefix}` | Return the Prefix key from your settings.yml |
| `{info_prefix} or {prefix_info}` | Return the info prefix from your localization. |
| `{success_prefix} or {prefix_success}` | Return the success prefix from your localization. |
| `{warn_prefix} or {prefix_warn}` | Return the warn prefix from your localization. |
| `{error_prefix} or {prefix_error}` | Return the error prefix from your localization. |
| `{question_prefix} or {prefix_question}` | Return the question prefix from your localization. |
| `{announce_prefix} or {prefix_announce}` | Return the announce prefix from your localization. |