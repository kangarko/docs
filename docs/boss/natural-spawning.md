# Natural Spawning

Boss supports automatic spawning so your custom Bosses appear naturally in your worlds.

Apart from Boss eggs and /boss spawn command, we offer 5 ways to spawn Bosses automatically:

**There are MANY options you can configure:**

- Create one spawn rule for multiple bosses.
- Delay (such as every 1 hour)
- Days, months, time of the real human year (such as spawn every Friday at 18:00)
- Minecraft time
- Light level
- Height (spawn in deep caves?)
- Require rain and/or thunder to spawn
- Chance to spawn (such as 0.01% for extra rare spawning) 
- Region (WorldGuard, Lands, our own region system and many more!)

::: tip
You can even keep Bosses within their spawn region, or create a custom location where they return to when they attempt to escape it.
:::

## 1) Replacing Vanilla Mobs
When a monster of the same type spawns naturally (e.g. Zombie, Skeleton), there is a configurable chance it will be transformed into a Boss.

If your server has spawning disabled or you want more control, use:

## 2) Spawning At A Given Time

![Time-based Spawning](/images/boss/ymqHCQB.png)

Spawn Bosses at predefined locations on a schedule. Configure the real-life day, week, hour and minute. You can even limit spawning to each Friday at 18:00 when it is a night in the game and raining!

## 3) Respawning After Death

Respawn the Boss after a configurable delay once it dies. Persists across server restarts.

## 4) Spawning When Entering A Region

Spawn a Boss when players enter a region, with configurable delay and nearby Boss limit.

## 5) Naturally Around Players
Periodically scan areas around players and spawn Bosses near them.

You can cap the max Bosses per Spawn Rule, or individually per Boss in the Spawning Limits section.

::: warning
Spawn rule names **must not contain underscores** (`_`). Underscores break PlaceholderAPI placeholder parsing. See [Naming Rules](./customizing-bosses#underscores-not-allowed-in-names) for details.
:::

## Regions
On top of that, each Boss can be configured to only appear in certain regions. 

### How to Create a Boss Region?
1. Obtain a Region Tool via /boss tools
2. Right click a block to set the primary point, and left click a block to set the secondary region point.
3. Run `/boss region add <name>`

The selection is visualized so you always know how big the region is.
![Region Selection](/images/boss/o2uYAwY.png)