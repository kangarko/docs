# Variables

A variable (placeholder) is a message in brackets `{}` (***this now also supports percents*** `%%`), which is replaced by the actual data. Example: {boss_name} is replaced with the boss name. Boss supports placeholders in some localization messages as well as it hooks into PlaceholderAPI so you can show your nearest Boss properties in different plugins!

**Note**: When using LuckPerms, to avoid double prefixes, we suggest you use {luckperms_prefix} from PlaceholderAPI plugin instead of {pl_prefix} from Vault.

**Warning:** We may lowercase placeholders for performance reasons. If your PlaceholderAPI contains a variable with Uppercased Letters that doesn't work, try writing it in all lower space: Such as {VotingPlugin_alltimetotal} to {votingplugin_alltimetotal}

**Warning:** Boss and spawn rule names with an underscore break every placeholder that takes a name, because the placeholder is split on `_`. See [Naming Rules](./customizing-bosses#underscores-not-allowed-in-names).


## PlaceholderAPI variables

### Closest Boss

These need a Boss within `Variables.Nearby_Boss_Radius` blocks (20 by default, in settings.yml) that a player has already damaged. An untouched Boss standing right next to you is invisible to them.

They also only resolve on the main server thread, so a plugin asking for them asynchronously gets an empty string and a console warning.

| Variable Name | Description |
|---|---|
| `%boss_name%` | Closest boss' name (the same as the file name). |
| `%boss_alias%` | Closest boss' alias. Colors are supported. |
| `%boss_alias_plain%` | Closest boss' alias with the colors stripped. |
| `%boss_is_nearby%` | `true` or `false` depending on whether a Boss is in range. |
| `%boss_health%` | Closest boss' health. |
| `%boss_top_damager%` | Closest boss' top damager player name. |
| `%boss_top_damager_{n}%` | Closest boss' damager name at rank `{n}`. |
| `%boss_top_damage%` | Closest boss' top damage in HP caused by top damager. |
| `%boss_top_damage_{n}%` | Closest boss' damage in HP at rank `{n}`. |
| `%boss_location%` | Closest boss' full location. |
| `%boss_location_x%` | Closest boss' X position. |
| `%boss_location_y%` | Closest boss' Y position. |
| `%boss_location_z%` | Closest boss' Z position. |
| `%boss_location_world%` | Closest boss' world name. |

### Named Boss and counts

These take a Boss name and work anywhere, no nearby Boss needed.

| Variable Name | Description |
|---|---|
| `%boss_{bossName}_respawn_{spawnRule}%` | Display the time until the given Boss respawns from the given respawn rule. If the rule contains multiple Bosses, this shows the shared rule cooldown. |
| `%boss_{bossName}_alias%` | The given Boss' alias, colors included. Add `_plain` to strip them. |
| `%boss_{bossName}_{player}_damage%` | Display the total damage the given player has dealt to this Boss, counts damage dealt to all spawned entities. Replace {player} with `player` for the current player, a player name, or a UUID. |
| `%boss_{bossName}_{player}_kills%` | Display how many Bosses the player has killed. The way this is counted is listening to a Boss entity death event and getting the killer from there. Replace {player} with `player` for the current player, a player name, or a UUID. |
| `%boss_{bossName}_top_damage_{leadingPosition}_{player/value}%` | Get the player's name or the amount of damage (see `%boss_{bossName}_{player}_damage%`) that the player at the given leading order has dealt. For example: `%boss_Zombie_top_damage_1_player%` returns the name of the player who dealt the most damage to the Zombie boss. Replace 1 with 2 to get the second most damaging player, etc. |
| `%boss_{bossName}_top_kills_{leadingPosition}_{player/value}%` | Get the player's name or the amount of killed entities (see `%boss_{bossName}_{player}_kills%`) that the player at the given leading order has dealt. For example: `%boss_Zombie_top_kills_1_player%` returns the name of the player who killed the most Zombie bosses. Replace 1 with 2 to get the second most damaging player, etc. |
| `%boss_spawned%` | Total count of all alive Bosses across all worlds. |
| `%boss_spawned_{world}%` | Total count of all alive Bosses in the given world. Replace `{world}` with your world name. |
| `%boss_{bossName}_spawned%` | Count of alive instances of the given Boss across all worlds. |
| `%boss_{bossName}_spawned_{world}%` | Count of alive instances of the given Boss in the given world. |
| `%boss_spawned_here%` | Count of all alive Bosses in the player's current world. |

### Region selection

These need a region selection in progress with the Region Tool from `/boss tools`. `%boss_has_region%`, `%boss_region_world%` and `%boss_region_size%` want both points set; the coordinate ones resolve as soon as that single point exists.

| Variable Name | Description |
|---|---|
| `%boss_has_region%` | `yes` or `no` depending if the player has selected both region points. |
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
| `{date}` | The current date and time, `dd.MM.yyyy HH:mm:ss`. |
| `{date_short}` | The same without seconds, `dd.MM.yyyy HH:mm`. |
| `{date_month}` | Day and month only, `dd.MM HH:mm`. |
| `{chat_line}` | A simple chat line. |
| `{chat_line_smooth}` | A smooth chat line. |
| `{label_main}` | Return our main command label. |
| `{plugin_name}` | Return the plugin name. |
| `{plugin_version}` | Return the plugin version. |
| `{server_version}` | Return the Minecraft version. |
| `{prefix_plugin}` | Return the Prefix key from your settings.yml |
| `{prefix_info}` | Return the info prefix from your localization. |
| `{prefix_success}` | Return the success prefix from your localization. |
| `{prefix_warn}` | Return the warn prefix from your localization. |
| `{prefix_error}` | Return the error prefix from your localization. |
| `{prefix_question}` | Return the question prefix from your localization. |
| `{prefix_announce}` | Return the announce prefix from your localization. |
