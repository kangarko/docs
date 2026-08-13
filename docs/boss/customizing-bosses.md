# Customizing Bosses

![Customizing Banner](/images/boss/5ZMI9Lb.png)

To configure your boss, click on its spawning egg in /boss menu > Bosses. You can also left-click while holding a Boss Spawner Egg. Right-clicking spawns the Boss instead.

![Boss Configuration](/images/boss/G8WJNBQ.png)

## Some requested settings

### No AI / Gravity / Baby / other flags

Toggle these in Settings > **Custom Settings**. The menu only lists the settings that apply to your Boss's mob type, so a Slime shows Slime Size while a Creeper shows Powered.

The display name itself is Settings > **Alias**. Custom Settings only holds **Custom Name Visible**, which decides whether that name is always on screen.

::: warning
Old Minecraft versions (especially 1.8.8) lack majority of these settings due to missing APIs.
:::

### Making Boss invulnerable

Use Custom Settings from the menu above to toggle **Invulnerable**. If your Minecraft version does not offer it, you must change the Boss's health to a very high value.

### Health Bar

A health bar is shown as an action bar when you damage a Boss. Configure it in settings.yml under `Fighting.Health_Bar`:

```yaml
Health_Bar:
  Enabled: true
  Format: "&4{damage} dmg &8| &7{boss_alias}"
  Prefix: "&8["
  Suffix: "&8]"
  Color:
    Remaining: DARK_RED
    Total: GRAY
    Dead: BLACK
```

Available variables: `{damage}`, `{boss_name}`, `{boss_alias}`, `{world}`, `{x}`, `{y}`, `{z}`, `{player}`. The color settings control the health bar segments: **Remaining** for current health, **Total** for max health, and **Dead** when the hit kills the Boss.

### Citizens Retargeting

Bosses running on the Citizens backend can look for a new target every so often instead of chasing the first player forever. Enable it in settings.yml under `Fighting.Citizens_Retarget`:

```yaml
Citizens_Retarget:
  Enabled: true
  Delay: "30 seconds"
```

### Prevent Health Regeneration

To stop all Bosses from regenerating health from any source, set `Health.Prevent_Regeneration` to `true` in settings.yml.

### Disable Player Cheats During Combat

The `Fighting.Disable_Cheats` list controls what player abilities are disabled when fighting a Boss. Default: `[FLIGHT, GOD_MODE, INVISIBILITY]`.

### Boss Bar

Each Boss can display a Boss Bar above all nearby players showing its name and remaining health. Toggle it per-boss in Boss menu > Settings > Custom Settings > **Boss Bar**. It needs Minecraft 1.9 or newer.

Configure the global Boss Bar appearance in settings.yml under `Fighting.Boss_Bar`:

```yaml
Boss_Bar:
  Color: RED
  Style: PROGRESS
  Format: "{boss_alias} &8- &c{health}&7/&c{max_health}"
  Radius: 50
```

`Color` accepts PINK, BLUE, RED, GREEN, YELLOW, PURPLE and WHITE. `Style` accepts PROGRESS, NOTCHED_6, NOTCHED_10, NOTCHED_12 and NOTCHED_20. `Format` accepts `{boss_alias}`, `{boss_name}`, `{health}`, `{max_health}` and `{health_percent}`.

The Boss Bar appears when the Boss spawns, updates on damage, and automatically tracks nearby players within the configured radius. It is removed when the Boss dies or despawns.

### Projectile Immune

You can make a Boss immune to all projectile damage (arrows, tridents, snowballs, etc.) by enabling **Projectile Immunity** in Boss menu > Settings > Custom Settings. This forces players to engage in melee combat only.

### Mannequin Support

On servers that have them, MANNEQUIN is offered as a base mob type. Mannequin Bosses take damage and die but never move or attack, so their AI & Behavior menu is empty. Armor stands are no longer offered as a base type.

## AI and Behavior

Open Boss menu > Settings > **AI & Behavior** to replace the mob's vanilla brain. The bottom of that menu prints which backend the Boss runs on:

| Backend | When you get it |
|---|---|
| Native (Paper Goal API) | Paper 1.15 or newer, the default for ordinary Bosses |
| Citizens (Player NPC) | Player Bosses, which need Citizens installed |
| Citizens (legacy opt-in) | Non-Player Bosses with the old Citizens setting still on, and only on servers below 1.15 or without the Paper Goal API |
| Static (no AI) | Mannequin Bosses |
| Vanilla (no boss AI) | Servers older than 1.15 or without the Paper Goal API |

| Setting | Default | What it does |
|---|---|---|
| **Enable Custom Targeting?** | Disabled | Master switch. While off, the mob keeps its vanilla behavior and the three settings below do nothing |
| **Follow Target?** | Disabled | The Boss walks toward the entities you selected |
| **Attack Target?** | Disabled | The Boss attacks them once in reach |
| **Target Entities** | none | Which entity types the Boss hunts. Leave this empty and Follow and Attack stay dormant |
| **Target Radius** | 24 blocks | How far the Boss looks for those entities, 4 to 40 |
| **Enable Allow Wandering?** | Disabled | The Boss patrols around its spawn point instead of standing still |
| **Wander Radius** | 18 blocks | How far it wanders, 4 to 40 |

Player Bosses add a **Skin** and a **Speed** button, and Citizens-backed Bosses add **Sounds** for custom death, hurt and ambient sounds.

::: tip
Turning Custom Targeting on and leaving Target Entities empty is the usual reason a Boss stands still. Pick at least Player in the Target Entities menu.
:::

## Death Commands and Rewards

### Player_Commands (Ranked Rewards)

::: warning Common Misconception
`Player_Commands` is **NOT** a list of commands to run for the killer. It is a **ranked reward system** based on damage dealt to the Boss.
:::

Each entry in the `Player_Commands` list corresponds to a damage rank:

- **1st command** → runs for the **#1 top damager**
- **2nd command** → runs for the **#2 top damager**
- **3rd command** → runs for the **#3 top damager**

If only one player dealt damage, only the first command will execute.

```yaml
Player_Commands:
  - crate give item {killer} legendary 1
  - crate give item {killer} rare 1
  - crate give item {killer} common 1
```

**To run multiple commands for the killer**, use Boss menu > Settings > Commands > Commands On Death instead. You can add as many death commands as you want, and they all execute for the killer.

### Health Trigger Commands

Health-triggered commands fire when a Boss crosses a health threshold during combat. If a single massive hit crosses multiple thresholds (e.g., Boss drops from 80% to 20% in one hit), only the lowest crossed threshold's command fires. Space your thresholds further apart or use Bosses with higher health for reliable multi-threshold triggers.

### Target Commands

Run commands when a Boss starts targeting a player. Configure them in Boss menu > Settings > Commands > Commands On Target. Use `{player}` in the command to reference the targeted player. These fire once per target acquisition, so rapid re-targeting of the same player will not spam the commands.

## Naming Rules

### Underscores Not Allowed in Names

::: danger Important
Boss names and spawn rule names **must not contain underscores** (`_`). Underscores break PlaceholderAPI placeholder parsing because the placeholder system splits on `_` to determine which variable to resolve.
:::

For example, a Boss named `Vindicator_Johnny` would break the placeholder `%boss_Vindicator_Johnny_respawn_MyRule%` because the system can't tell where the name ends and the variable starts.

Use camelCase instead: `VindicatorJohnny`. Boss names take letters and digits only, 3 to 24 characters, so no spaces either. Spawn rule names do allow spaces.

If you already have Bosses with underscores, they will continue to work for everything **except** PlaceholderAPI placeholders. Rename them by editing the boss YAML file (change the filename and find-replace inside the file).

