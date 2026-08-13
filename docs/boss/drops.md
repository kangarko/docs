# Drops

Boss uses an extensive drop system with drop chances, and PvP drops to players who did the most damage to Boss customizable via an in-game GUI.

## Death settings

![Death Settings](/images/boss/rXsJxK5.png)

You can configure dropped items, dropped experience and Boss reinforcement when a Boss dies.

## Item drops

![Item Drops](/images/boss/1hWHOEO.png)

### Vanilla Drops

Toggles whether vanilla Minecraft rules still make the Boss drop items. On by default.

::: warning
Your per-slot equipment drop chances only apply while Vanilla Drops is **off**. With it on, Minecraft decides what the Boss drops and your chances are ignored.
:::

### General drops

Drag and drop items into the container for them to be dropped. Then set their drop chance for each item:

![Drop Chance](/images/boss/YHcocoV.png)

### PvP drops to reward players who did the most damage to Boss

You can create so-called "order player drops" and set a time limit. For example, we will register any damage to Boss and when he is killed, reward the top X (for example top 3) players who did the most damage in a configurable time period. That window is the **Last Damage Time Threshold** button, 15 seconds by default. Players who logged off before the kill are skipped. 

You can even reward each of these players completely different items and run commands for them!

![PvP Drops](/images/boss/EoRS08y.png)

### Party Rewards

**Party Rewards** in Boss menu > Death > Drops > Player Drops ranks damage by party instead of by individual player. It needs the AlessioDP Parties plugin, and without it the toggle is ignored and ranking falls back to individual players. Each rank's reward is then copied to every party member who damaged the Boss within the **Party Reward Radius** of the Boss death location. Set the radius to `0` for unlimited.

## Developer API
If you are a power user, we offer an extensive API so that you can take over the drop system completely.

Simply start by listening to BossDeathEvent and use the getDrops() function or the Boss model to get the Boss drops, where you can clear them completely or edit them to your likings. The event is not cancellable, and getDrops() covers the items that land on the floor.

More about the API on its [dedicated page](api).