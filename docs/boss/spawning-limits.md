# Spawning Limits

Boss spawns your Bosses automatically, so it also ships limits to keep your server from drowning in them.

## Boss Spawning Limits

Open `/boss menu` > your Boss > **Spawning**.

| Button | Default | What it limits |
|---|---|---|
| **World Limits** | Unlimited | How many of this Boss may live in each world, up to 10,000 |
| **Radius** | 100 Bosses within 20 blocks | How many may crowd around one spawn point. Left click sets the count, right click the block radius (1 to 200). A count of `0` blocks every limited spawn, so raise it rather than zero it |
| **Where Limits Are Applied** | From Spawn Rule | Which spawn causes the two limits above apply to |

Both limits only count Bosses of the same definition. A Zombie King limit never counts your Skeleton Lords.

![Boss Spawning Limits](/images/boss/GxbJQMS.png)

::: warning
Out of the box only **From Spawn Rule** is limited. Spawner eggs, `/boss spawn`, dispensers, reinforcements, riding, slime splits and the API are unlimited until you toggle them on in **Where Limits Are Applied**.
:::

## Spawn Rule Limits

Every spawn rule carries its own conditions, and the richer types stack over 15 of them:

- The delay of the rule, such as once per 2 hours
- Days of the week, months of the year
- Real-life hour and minute
- Minecraft time range
- Requires rain, requires thunder
- A run chance from 0% to 100%
- Locations or regions to spawn in
- World height, light level, worlds and biomes
- Radius around players

Which of these you get depends on the rule type, see [Natural Spawning](natural-spawning).

![Spawn Rule Conditions](/images/boss/BojTpFI.png)

## settings.yml keys people forget

Four keys shape spawning from outside the rule menus:

| Key | Default | Effect |
|---|---|---|
| `Spawning.Location_Spawn_Nearby_Player_Radius` | 30 | The On A Block At A Given Time rule needs a player this close. Respawn After Death and After A Kill Goal ignore it. `-1` disables the check |
| `Spawning.Nearby_Spawn_Min_Distance_From_Player` | 5 | How far the Randomly Around Players rule keeps its Bosses from the player |
| `Spawning.Air_Spawn_Max_Distance` | 30 | How far a spawner egg reaches when you right click air |
| `Spawning.Integration.Lands` | true | Blocks spawning in Lands areas that have mob spawning off |

## But wait... sometimes there are more Bosses than my limits?

On Paper and its forks we track Bosses in unloaded chunks (saved to unloaded-bosses.yml) and count them against **world** limits, including across server restarts. Stale records self-heal when their chunk loads again. The nearby-radius limit never sees them.

::: warning
On Spigot, we can only count and control Bosses in loaded chunks (this is where players are). If the player walks around and loads more chunks with Bosses saved from earlier, the limits may get slightly exceeded.
:::

We can scan offline chunks to remove your Bosses afterwards, see /boss scan command.
