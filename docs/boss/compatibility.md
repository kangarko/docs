# Compatibility

On this page, you'll learn the minimum requirements and supported third party plugins for Boss to run.

::: danger
Please read the [General Compatibility Guide](../general/compatibility.md) for general compatibility information and requirements that apply to Boss.
:::


## Supported Plugins
* **WorldGuard** Is compatible, and you can set the 'boss-target' flag to false to stop Bosses automatically targeting players inside regions.
* **Lands** Boss prevents Bosses from spawning in Lands areas where mob/animal/phantom spawning flags are disabled. Enable via `Integration.Lands` in settings.yml (default: true).
* **GriefPrevention** The RandomPeriod spawn rule respects GriefPrevention claims and won't spawn Bosses in claimed areas.
* **Heroes** Compatible with Boss for custom class-based combat interactions.
* **ModelEngine** Use ModelEngine for custom 3D Boss models. Create your model in ModelEngine, then link it to your Boss via the Boss menu. Attack animations are handled by ModelEngine.
* **Citizens** Enable Citizens integration per Boss for custom pathfinding, NPC skins, retargeting, and more advanced AI behaviors. Configure in your Boss > Settings > Citizens.
* **Pets and stacking plugins** may cause issues with Boss, contact their dev team to add exception for us. See [Common Issues](common-issues) for more information.
* **MythicMobs** and Boss are mutually compatible as long as you don't try turning a Boss from our plugin into a MythicMob and applying both plugins on the same entity.

## Tools

Boss includes special tools accessible via `/boss tools`:

| Tool | Description |
|------|-------------|
| **Entity Info Tool** | Right-click any entity to check if it's a Boss. Shows Boss name (click to open menu), UUID, and NBT data. Essential for debugging. |
| **Tamer Tool** | Right-click any tameable entity to change its owner. Enter a player name or "none" to remove ownership. Requires `boss.use.tamer` permission. |
| **Region Tool** | Click blocks to set primary/secondary points for Boss regions. |

## Prevent Vanilla Mobs

You can completely prevent vanilla mobs from spawning using settings.yml:

```yaml
Prevent_Vanilla_Mobs:
  Enabled: false
  Prevent_From: [NATURAL, CHUNK_GEN, SPAWNER]
  Entities: ["*"]
  Worlds: ["*"]
```

Set `Entities` to specific mob types or `["*"]` for all. Set `Worlds` similarly.