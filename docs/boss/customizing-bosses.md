# Customizing Bosses

![Customizing Banner](/images/boss/5ZMI9Lb.png)

To configure your boss, click on its spawning egg in /boss menu > Bosses. You can also right-click a Boss Spawner Egg in your hands.

![Boss Configuration](/images/boss/G8WJNBQ.png)

## Some requested settings

### Display Name / No AI / Gravity / Baby / other flags

Toggle these in Settings > Specific Settings.

::: warning
Old Minecraft versions (especially 1.8.8) lack majority of these settings due to missing APIs.
:::

![Specific Settings](/images/boss/eBS3XA6.png)

### Making Boss invulnerable

Use Specific Settings from the menu above to toggle this option. If your Minecraft version does not offer it, you must change the Boss's health to a very high value.

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

Available variables: `{damage}`, `{world}`, `{x}`, `{y}`, `{z}`, `{player}`, `{boss_alias}`. The color settings control the health bar segments: **Remaining** for current health, **Total** for max health, and **Dead** when the hit kills the Boss.

### Citizens Retargeting

If you have Citizens installed, you can make Bosses find new targets periodically. Enable in settings.yml under `Fighting.Citizens_Retarget`:

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

Each Boss can display a Boss Bar above all nearby players showing its name and remaining health. Toggle it per-boss in the Boss menu > Settings > Boss Bar.

Configure the global Boss Bar appearance in settings.yml under `Fighting.Boss_Bar`:

```yaml
Boss_Bar:
  Color: RED
  Style: SOLID
  Format: "&c{boss_alias} &7- &c{health}&7/&c{max_health} &4❤"
  Radius: 32
```

The Boss Bar appears when the Boss spawns, updates on damage, and automatically tracks nearby players within the configured radius. It is removed when the Boss dies or despawns.

### Projectile Immune

You can make a Boss immune to all projectile damage (arrows, tridents, snowballs, etc.) by enabling the **Projectile_Immune** custom setting in the Boss menu > Settings > Specific Settings. This forces players to engage in melee combat only.

### Mannequin Support

Boss now supports MANNEQUIN entities (in addition to ARMOR_STAND) as base mob types where applicable.

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

**To run multiple commands for the killer**, use Boss menu > Settings > Commands > Death Commands instead. You can add as many death commands as you want, and they all execute for the killer.

### Health Trigger Commands

Health-triggered commands fire when a Boss crosses a health threshold during combat. If a single massive hit crosses multiple thresholds (e.g., Boss drops from 80% to 20% in one hit), only the lowest crossed threshold's command fires. Space your thresholds further apart or use Bosses with higher health for reliable multi-threshold triggers.

## Naming Rules

### Underscores Not Allowed in Names

::: danger Important
Boss names and spawn rule names **must not contain underscores** (`_`). Underscores break PlaceholderAPI placeholder parsing because the placeholder system splits on `_` to determine which variable to resolve.
:::

For example, a Boss named `Vindicator_Johnny` would break the placeholder `%boss_Vindicator_Johnny_respawn_MyRule%` because the system can't tell where the name ends and the variable starts.

Use spaces or camelCase instead: `Vindicator Johnny` or `VindicatorJohnny`.

If you already have Bosses with underscores, they will continue to work for everything **except** PlaceholderAPI placeholders. Rename them by editing the boss YAML file (change the filename and find-replace inside the file).

