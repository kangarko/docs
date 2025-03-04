# Natural Spawning

Imagine you are digging inside a dark cave, when a suddenly a Boss appears in front of you! Boss support Natural Spawning, so the Bosses you create may (and will!) appear in your worlds, at your will.

Apart from Boss eggs and /boss spawn command, we offer 4 ways to spawn your Bosses automatically:

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
When a monster of the same type is spawned naturally (e.g. Zombie, Skeleton, Wither, ...), there is a chance that it will be transformed into boss (that you configure - see below). This is called Boss Transformation.

But there is a problem... what if your server does not have spawning enabled? What if you wish MORE Bosses? Then use ...

## 2) Spawning At A Given Time

![Time-based Spawning](https://i.imgur.com/ymqHCQB.png)

Now you can completely customize the real-life day, week, down to the hour and minute when we'll spawn Bosses at predefined locations, such as your dungeons. You can even limit spawning to each Friday at 18:00 when it is a night in the game and raining!

## 3) Respawning After Death

You can create a spawnrule that will respawn the Boss after a certain time has passed after the Boss has died. Even after you restarted the server!

## 4) Spawning When Entering A Region

You can also select to spawn a Boss when players enter a certain region, with configurable delay and nearby Boss limit to prevent too many Bosses. Perfect for your new dungeon system!

## 5) Naturally Around Players
Each time (you specify!) we scan arenas around your players and can spawn Bosses around them.

You can cap the max amount of Bosses in the given Spawn Rule, or individually in the Spawning Limits section of your Boss.


## Regions
On top of that, each Boss can be configured to only appear in certain regions. 

### How to Create a Boss Region?
1. Obtain a Region Tool via /boss tools
2. Right click a block to set the primary point, and left click a block to set the secondary region point.
3. Run `/boss region add <name>`

The selection is visualized so you always know how big the region is.
![Region Selection](https://i.imgur.com/o2uYAwY.png)