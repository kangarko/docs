# Configuration

This page documents all settings available in Winter's `settings.yml`.

## Worlds

| Setting | Description |
|---------|-------------|
| `Worlds` | List of worlds where Winter features are active. Use `*` for all worlds. |

## Gift Chest

Settings for the gift chest feature where players can create lootable chests.

| Setting | Description |
|---------|-------------|
| `Gift_Chest.Enabled` | Enable the gift chest feature. |
| `Gift_Chest.Title` | Title shown when opening a gift chest GUI. |
| `Gift_Chest.Public.Allow` | Allow public gift chests (anyone can loot). |
| `Gift_Chest.Public.Format` | Sign text format for public gift chests. |
| `Gift_Chest.Private.Format` | Sign text format for private gift chests. |

## Dated Chest

Dated chests are special chests that unlock on a specific date (e.g., Advent calendar).

| Setting | Description |
|---------|-------------|
| `Dated_Chest.Preview` | Allow players to preview chest contents before the unlock date. |
| `Dated_Chest.Default_Year` | Year used when checking dates. The plugin warns if this doesn't match the current year. |

::: tip
Set `Default_Year` to the current year. The plugin will warn you in console if the year is outdated.
:::

## Weather

Control Winter weather effects.

| Setting | Description |
|---------|-------------|
| `Weather.Disable` | Disable weather changes entirely. |
| `Weather.Snow_Storm` | Make snow particles bounce chaotically during rain or thunderstorm. |

## Terrain

### General

| Setting | Description |
|---------|-------------|
| `Terrain.Prevent_Melting` | List of materials that should not melt (e.g., snow, ice). |

### Snow Generation

Control how snow is placed and maintained across the world.

| Setting | Description |
|---------|-------------|
| `Terrain.Snow_Generation.Enabled` | Enable automatic snow terrain generation. |
| `Terrain.Snow_Generation.Melt` | Whether snow melts over time. |
| `Terrain.Snow_Generation.Only_Melt_Unnatural_Snow` | Do not melt snow in naturally snowy biomes or above height 90. |
| `Terrain.Snow_Generation.Melt_Snow_Block_To_Snow_Layer` | When melting snow blocks, convert to a snow layer instead of removing entirely. |
| `Terrain.Snow_Generation.Period_Ticks` | Ticks between snow generation cycles. Lower values = faster snow but more CPU. |
| `Terrain.Snow_Generation.Radius` | Chunk radius around players for snow generation. |
| `Terrain.Snow_Generation.Multi_Layer` | Enable multi-layer snow (snow stacks higher than 1 layer). |
| `Terrain.Snow_Generation.Required_Neighbors_To_Grow` | Number of neighboring snow blocks required before a snow layer can grow higher. |
| `Terrain.Snow_Generation.Convert_Full_Snow_To_Snow_Block` | Convert full 8-layer snow into a snow block. |
| `Terrain.Snow_Generation.Max_Snow_Layers_Height` | Maximum height snow layers can reach (1-8). |
| `Terrain.Snow_Generation.Freeze_Water` | Turn exposed water surface blocks into ice. |
| `Terrain.Snow_Generation.Destroy_Crops` | Whether snow generation destroys crops. |
| `Terrain.Snow_Generation.Freeze_Ignore` | Map of neighbor materials to crop materials that should prevent freezing. |
| `Terrain.Snow_Generation.Do_Not_Place_On` | List of materials snow will not be placed on. Example: `[GLASS, ICE]` |
| `Terrain.Snow_Generation.Ignore_Biomes` | Biomes where snow will not generate. Example: `[DESERT, JUNGLE]` |
| `Terrain.Snow_Generation.Regions.Enabled` | Enable WorldGuard region filtering for snow generation. |
| `Terrain.Snow_Generation.Regions.List` | Whitelist/blacklist of WorldGuard regions. Put `@blacklist` on the first line to invert. |

::: info
The `Radius` setting controls how far from players snow will generate in chunks. Higher values increase CPU usage significantly.
:::

### Disguise Biomes

Make non-snowy biomes appear as snowy biomes to players (client-side only).

| Setting | Description |
|---------|-------------|
| `Terrain.Disguise_Biomes.Enabled` | Enable biome disguising. |
| `Terrain.Disguise_Biomes.Biome` | The snowy biome to disguise as. Must have a valid biome ID. |

::: warning
Disguise Biomes requires ProtocolLib. Only works on MC 1.7.10, 1.8.8, 1.11, 1.12, 1.16, and 1.17.
:::

## Snow

Configure ambient snow particle effects shown to players.

| Setting | Description |
|---------|-------------|
| `Snow.Enabled` | Enable snow particle effects. |
| `Snow.Period_Ticks` | Ticks between particle spawns. |
| `Snow.Amount` | Number of particles per spawn cycle. |
| `Snow.Chaos` | Randomness factor for particle spread. |
| `Snow.Realistic` | Use realistic snow particle behavior. |
| `Snow.Require_Snow_Biomes` | Only show particles in snow biomes. |
| `Snow.Ignore_Vanished` | Don't show particles for vanished players. |
| `Snow.Range.Horizontal` | Horizontal range around player for particles. |
| `Snow.Range.Vertical` | Vertical range above player for particles. |
| `Snow.Regions.Enabled` | Enable WorldGuard region filtering for particles. |
| `Snow.Regions.List` | Whitelist/blacklist of WorldGuard regions. Put `@blacklist` on the first line to invert. |

## Snowman

Configure snowman behavior and the Psycho Snowman feature.

| Setting | Description |
|---------|-------------|
| `Snowman.Enabled` | Enable snowman features. |
| `Snowman.Disable_Melt_Damage` | Prevent snowmen from taking damage in warm biomes. |
| `Snowman.Prevent_Target` | Prevent mobs from targeting snowmen. |

### Psycho Snowman

Psycho Snowmen are aggressive snowmen that attack players. This is an NMS-based feature with limited version compatibility.

| Setting | Description |
|---------|-------------|
| `Snowman.Psycho.Convert_New` | Automatically convert newly spawned snowmen into Psycho Snowmen. |
| `Snowman.Psycho.Convert_Existing` | Convert existing snowmen in loaded chunks into Psycho Snowmen. |
| `Snowman.Psycho.Pumpkin_Head` | Give Psycho Snowmen a pumpkin head. |
| `Snowman.Psycho.Despawn` | Allow Psycho Snowmen to despawn naturally. |

### Damage

| Setting | Description |
|---------|-------------|
| `Snowman.Damage.Snowball` | Damage dealt by snowman snowball projectiles. |

### Transform

| Setting | Description |
|---------|-------------|
| `Snowman.Transform.Enabled` | Enable snowman transformation (mobs randomly turn into snowmen). |
| `Snowman.Transform.Chance_Percent` | Percentage chance of transformation occurring. |
| `Snowman.Transform.Applicable` | List of entity types that can be transformed into snowmen. |

<style>
table {
  width: 100%;
}
table th:first-child,
table td:first-child {
  width: 45%;
  word-break: break-word;
}
</style>
