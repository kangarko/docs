# PlaceholderAPI Integration

If you install PlaceholderAPI, you can take advantage of our rich placeholder system and use our placeholders ANYWHERE on the server. Even in other plugins like ChatControl or your favourite scoreboard plugin.

::: warning Important Note
Your plugin may require `%corearena_X%` syntax instead of our `{corearena_X}` syntax outlined below.
:::

## Available Placeholders

### One Argument Variables

| Placeholder | Description |
|-------------|-------------|
| `{corearena_nuggets}` | The amount of Nuggets a player has |
| `{corearena_is_playing}` | Returns "yes" or "no" depending if the player is currently playing |
| `{corearena_is_in_lobby}` | Returns "yes" or "no" depending if the player is in an arena lobby waiting for the game to start |
| `{corearena_class}` | A player's class or "none" if he has not yet selected a class in the arena he plays in |
| `{corearena_arena}` | The name of the arena the player is currently in, or "dead" if not playing |

### Two Arguments Variables

For the variables below, please supply `ARENA` with the actual arena name.

::: tip Note
Replace `ARENA` with "player" to replace variables for the playing player (player must be playing an arena), or with "location" for the arena at the player's location (regardless if player is playing it).
:::

| Placeholder | Description |
|-------------|-------------|
| `{corearena_ARENA_mobcount}` | Amount of monsters in an arena |
| `{corearena_ARENA_maxphase}` | Maximum phase or "infinite" of an arena |
| `{corearena_ARENA_phase}` | Current arena phase (wave number) |
| `{corearena_ARENA_state}` | Current arena state (string, translate in your localization file) |
| `{corearena_ARENA_remaining}` | Remaining time in "1m1s" format (automatically built-up, if less than 1m is left we only show 59s instead of 0m59s etc.) |
| `{corearena_ARENA_remaininglobby}` | Remaining lobby time in "1m1s" format (automatically built-up, if less than 1m is left we only show 59s instead of 0m59s etc.) |
| `{corearena_ARENA_alive}` | The amount of players in the arena |
| `{corearena_ARENA_lives}` | The amount of lives each player has in the arena (if configured) |

**Example:** `{corearena_player_phase}`

### Three Arguments Variables

Supply `PLAYER` with the player name. If unsure, supply it with "current" and we will replace it with the active player for whom the variable is being replaced.

Supply `ARENA` variable as per above instructions in "two argument variables" section.

| Placeholder | Description |
|-------------|-------------|
| `{corearena_ARENA_PLAYER_name}` | Player name |
| `{corearena_ARENA_PLAYER_health}` | Health of the player |
| `{corearena_ARENA_PLAYER_location}` | Location of the player |
| `{corearena_ARENA_PLAYER_exp}` | Experience of the player required for the next level |
| `{corearena_ARENA_PLAYER_level}` | Level of the player |
| `{corearena_ARENA_PLAYER_kills}` | Number of mobs the player killed during the current arena session (resets when they leave) |
| `{corearena_ARENA_PLAYER_livesleft}` | Lives left of the player |
| `{corearena_ARENA_PLAYER_nearestmob}` | The nearest aggressive mob location x y z |
| `{corearena_ARENA_PLAYER_nearestmobmeters}` | The nearest aggressive mob location in meters |

**Example:** `{corearena_player_current_health}`

### Four Arguments Variables

Supply `X` with the player index in your arena. If there are two players playing, you can use "1" or "2" to get those players. If you specify an invalid number, we return "dead".

Supply `ARENA` variable as per above instructions in "two argument variables" section.

| Placeholder | Description |
|-------------|-------------|
| `{corearena_ARENA_player_X_name}` | Player name |
| `{corearena_ARENA_player_X_health}` | Health of the player |
| `{corearena_ARENA_player_X_location}` | Location of the player |
| `{corearena_ARENA_player_X_exp}` | Experience of the player required for the next level |
| `{corearena_ARENA_player_X_level}` | Level of the player |
| `{corearena_ARENA_player_X_kills}` | Number of mobs the player killed during the current arena session |
| `{corearena_ARENA_player_X_livesleft}` | Lives left of the player |
| `{corearena_ARENA_player_X_nearestmob}` | The nearest aggressive mob location in x y z |
| `{corearena_ARENA_player_X_nearestmobmeters}` | The nearest aggressive mob location in meters |

**Example:** `{corearena_player_player_1_health}`

## Per-Arena Leaderboards

CoreArena tracks each player's best (highest) phase reached and most mobs killed per arena, and exposes them through dedicated placeholders. Records update when a player leaves while the arena is in the `RUNNING` state. Lobby leaves do not count.

### Personal Best

| Placeholder | Description |
|-------------|-------------|
| `{corearena_ARENA_bestphase}` | The requesting player's own best (highest) phase reached in the given arena. Returns `0` if they never recorded a phase there. |
| `{corearena_ARENA_bestkills}` | The requesting player's own best (highest) mob-kill count recorded in the given arena. Returns `0` if they never recorded kills there. |

**Example:** `{corearena_castle_bestphase}` shows the viewing player's personal phase record on the `castle` arena; `{corearena_castle_bestkills}` shows their best kill count.

### Top-N Leaderboard (Phases)

Replace `RANK` with a position number where `1` is the player who reached the highest phase ever on that arena, `2` is the second-best, and so on.

| Placeholder | Description |
|-------------|-------------|
| `{corearena_ARENA_top_RANK_name}` | Name of the player at position `RANK` on the arena's phase leaderboard. Returns `none` if fewer than `RANK` players have records. |
| `{corearena_ARENA_top_RANK_phase}` | Highest phase reached by the player at position `RANK`. Returns `0` if fewer than `RANK` players have records. |

**Example:** to display the top 3 of the `castle` arena on a scoreboard:

```
1. {corearena_castle_top_1_name} - phase {corearena_castle_top_1_phase}
2. {corearena_castle_top_2_name} - phase {corearena_castle_top_2_phase}
3. {corearena_castle_top_3_name} - phase {corearena_castle_top_3_phase}
```

If only one player has ever played `castle`, the second and third rows will read `none - phase 0`.

### Top-N Leaderboard (Kills)

Same format as above, but ranked by the highest mob-kill count ever recorded on that arena. Replace `RANK` with the position number.

| Placeholder | Description |
|-------------|-------------|
| `{corearena_ARENA_topkills_RANK_name}` | Name of the player at position `RANK` on the arena's kills leaderboard. Returns `none` if fewer than `RANK` players have records. |
| `{corearena_ARENA_topkills_RANK_kills}` | Highest mob-kill count recorded by the player at position `RANK`. Returns `0` if fewer than `RANK` players have records. |

**Example:** top 3 killers on the `castle` arena:

```
1. {corearena_castle_topkills_1_name} - {corearena_castle_topkills_1_kills} kills
2. {corearena_castle_topkills_2_name} - {corearena_castle_topkills_2_kills} kills
3. {corearena_castle_topkills_3_name} - {corearena_castle_topkills_3_kills} kills
```