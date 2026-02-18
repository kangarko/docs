# Configuration

CoreArena's main configuration is in `settings.yml` inside the plugins/CoreArena folder. Below is a reference of all available settings.

## Arena Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `Store_Inventories` | `true` | Save and restore player inventory when entering/leaving |
| `Restore_Saved_Max_Health` | `true` | Restore MAX_HEALTH attribute on arena leave |
| `Keep_Own_Equipment_On_Death` | `true` | Keep class equipment on death |
| `Move_Forgotten_Players` | `true` | Teleport players found in arena region on server join |
| `Give_Random_Class_If_Not_Selected` | `true` | Auto-assign random class if player didn't choose |
| `Auto_Repair_Items` | `false` | Unlimited durability for arena items |
| `Display_Phase_Bar` | `true` | Show current arena phase in a boss bar |
| `Display_Mob_Health_Bar` | `true` | Show mob health in action bar when hitting |
| `Hide_Death_Messages` | `true` | Hide death messages inside the arena |
| `Console_Commands_For_Each` | `false` | Run console commands per player (instead of once) |
| `Allowed_Commands` | `[]` | Commands players can use while in arena |

## Chat System

Arena chat can be scoped to only arena players:

```yaml
Chat:
  Enabled: true
  Ranged: true
  Format: "&5Arena &8//&7 {player}: {message}"
  Global_Format: ""
```

When `Ranged` is true, chat only reaches other players in the same arena. Players with `corearena.chat.global` permission can prefix their message with `!` to speak globally.

## Experience and Leveling

CoreArena has its own experience system separate from vanilla Minecraft:

```yaml
Experience:
  Give_To_Killer: false
  Exp_Per_Level: 30
  Level_To_Nugget_Conversion_Ratio: 0.5
  Reward_On_Escape: true
  Item: LIGHT_BLUE_DYE
  Item_Label: "&b+{amount} EXP"
  Gold:
    Conversion_Ratio: 100
  Amount:
    Next_Phase: "5 + (5 * {phase})"
    Kill:
      Global: "10 + (5 * {phase})"
      Player: "30 + (6 * {phase})"
      CREEPER: "15 + (5 * {phase})"
```

- **Give_To_Killer**: Give XP directly to killer (true) or drop as an item (false)
- **Exp_Per_Level**: XP needed to level up
- **Level_To_Nugget_Conversion_Ratio**: How many Nuggets one level is worth
- **Amount formulas**: JavaScript expressions using `{phase}` variable. You can add per-entity-type overrides (like `CREEPER` above)

## Rewards

```yaml
Rewards:
  Allow_Skipping_Tier: false
  Enable_Material_Rewards: true
```

- **Allow_Skipping_Tier**: Whether players can skip upgrade tiers
- **Enable_Material_Rewards**: Show material rewards in the rewards menu

## Procedural Damage

Enables realistic block damage from explosions:

```yaml
Procedural_Damage:
  Enabled: true
  Explosions:
    Gravitation_Range: 1
    Power:
      Creeper: 2.8
      TnT: 3.0
    Damage:
      Radius: 2
      Damage: 2.2
```

## Items

```yaml
Items:
  Damage_Players: true
  Explosive_Bow:
    Damage: 2.1
```

- **Damage_Players**: Whether arena items can damage other players
- **Explosive_Bow.Damage**: Explosion power for explosive arrows

## Integration

```yaml
Integration:
  Block_McMMO_Experience: true
  Block_Jobs_Level_Up: true
```

Prevents XP gain from mcMMO and Jobs plugins while inside arenas.

## MySQL Database

```yaml
MySQL:
  Enabled: false
  Delay_Ticks: 10
  Host: localhost
  Database: corearena
  Port: 3306
  User: root
  Password: ""
```

Enable MySQL for multi-server data synchronization.

## Backup

```yaml
Backup:
  Frequency: "6 hours"
```

Automatic arena data backup frequency.

## Other Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `Command_Aliases` | `[arena, ma, mobarena, corearena, ca]` | Command aliases |
| `Prefix` | `"&5Arena //&7"` | Chat message prefix |
| `Locale` | `en_US` | Language file |
| `Debug` | `[]` | Debug categories |
