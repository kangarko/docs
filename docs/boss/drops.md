# Drops

Boss uses an extensive drop system with drop chances, and PvP drops to players who did the most damage to Boss customizable via an in-game GUI.

## Death settings

![Death Settings](https://i.imgur.com/rXsJxK5.png)

You can configure dropped items, dropped experience and Boss reinforcement when a Boss dies.

## Item drops

![Item Drops](https://i.imgur.com/1hWHOEO.png)

### Vanilla Drops

You can toggle whether or not vanilla Minecraft rules should make Boss drop items on the floor.

### General drops

Drag and drop items into the container for them to be dropped. Then set their drop chance for each item:

![Drop Chance](https://i.imgur.com/YHcocoV.png)

### PvP drops to reward players who did the most damage to Boss

You can create so-called "order player drops" and set a time limit. For example, we will register any damage to Boss and when he is killed, reward the top X (for example top 3) players who did the most damage in a configurable time period. 

You can even reward each of these players completely different items and run commands for them!

![PvP Drops](https://i.imgur.com/EoRS08y.png)

## Developer API
If you are a power user, we offer an extensive API so that you can take over the drop system completely.

Simply start by listening to BossDeathEvent and use the getDrops() function or the Boss model to get the Boss drops, where you can clear them completely or edit them to your likings.

More about the API on its [dedicated page](API).