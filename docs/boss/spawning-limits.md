# Spawning Limits

Since Boss can spawn your Bosses automatically, we also included an extensive limit functionality so your server won't get overfeed by Bosses everywhere.

## Boss Spawning Limits

Limit how many Bosses are around each other, or the total amount of Bosses per world.

You can also set where those limits apply, such as on Boss spawn eggs, the /boss spawn command, natural spawning, or all of these causes.

![Boss Spawning Limits](/images/boss/GxbJQMS.png) 

## Spawn Rule Limits

There's over 15 different conditions you can set to limit spawning your Bosses!

- The delay of each spawn rule (such as only spawn once per 2 hours)
- Days of the week to spawn
- Months of the year to spawn
- Hours of the day to spawn
- Minutes of the day to spawn
- What Minecraft time range to spawn in
- Whether to require rain and/or thunder to spawn
- The chance from 0.01% to 100% to call the spawn rule
- What locations or regions to spawn in
- World height to spawn in
- Light level to spawn in
- What worlds to spawn Bosses on
- Biomes the Boss spawns in
- Radius around players where to spawn

![Spawn Rule Conditions](/images/boss/BojTpFI.png)

### But wait... sometimes there are more Bosses then my limits?

::: warning
We can only count and control Bosses in loaded chunks (this is where players are). If the player walks around and load more chunks with Bosses saved from earlier, the limits may get slightly exceeded.
:::

We can scan offline chunks to remove your Bosses afterwards, see /boss scan command.