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
* **MMOCore** Boss registers a `killboss` experience source and quest objective, see below.
* **MMOItems** Weapon damage, abilities and on-hit effects work on Bosses out of the box since Bosses are real Bukkit entities. To drop MMOItems, drag them into your Boss's Drops menu, or run an MMOItems give command from the Boss's Death commands.

## MMOCore

Boss plugs into MMOCore the same way MythicMobs does. Requires MMOCore installed, the integration registers automatically.

**Experience source** — give class or profession experience for Boss kills. Add to the `main-exp-sources` list of a class config, or the `exp-sources` list of a profession config:

```yaml
exp-sources:
- 'killboss{name=SkeletonKing;amount=25}'
```

Omit `name` to match any Boss: `killboss{amount=10}`. Boss names are matched ignoring case. Names with spaces must be quoted: `killboss{name="Skeleton King";amount=25}`.

**Quest objective** — require Boss kills in MMOCore quests:

```yaml
objectives:
  kill-the-king:
    lore: 'Kill the Skeleton King {left} more times.'
    triggers: []
    type: 'killboss{name=SkeletonKing;amount=10}'
```

Omit `name` to count any Boss kill.

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