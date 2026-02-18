# Commands

For commands Bosses can run on spawn/death/health threshold, see [Boss Commands](boss-commands).

* **[]** = optional arguments
* **<>** = required arguments

**TIP**: The short variant for **/boss** is **/b**.

> You can view the required permission directly within the error message when you attempt to execute a command you don't have access to.

> ![Permission](/images/boss/1hEj8Uq.png)


## Main Commands

![Boss Commands](/images/boss/RPuTzIq.png)
![Boss Commands 2](/images/boss/4M8RBab.png)

<div class="command-list">

### `/boss menu`
Open the main Boss GUI menu to manage Bosses, spawn rules, tools and settings.

### `/boss new`
Create a new Boss. Usage: `/boss new <entityType>`. Starts a conversation to name and configure the Boss.

### `/boss list`
List all installed Bosses.

### `/boss spawn`
Spawn a Boss at your location or at specified coordinates.

### `/boss egg`
Get a Boss spawner egg that you can place or give to players.

### `/boss eggdrop`
Drop Boss egg(s) at a specific world location. Usage: `/boss eggdrop <world x y z> <boss1|boss2|random>`. Supports `~` for relative coordinates. Use `|` to spawn multiple bosses or `random` for a random boss.

### `/boss find`
Find nearby Bosses in loaded chunks.

### `/boss butcher`
Remove all Bosses in loaded chunks, or filter by Boss type.

### `/boss scan`
Scan offline chunks on disk and remove Bosses from unloaded chunks. Usage: `/boss scan <world> [boss1|boss2]`.

### `/boss spawnpl`
Spawn Bosses near a specific player. Usage: `/boss spawnpl <player> <boss1|boss2|random>`.

### `/boss biome`
Show what biome you are currently standing in. Usage: `/boss biome [player]`.

### `/boss uid`
Manage a specific Boss by its UUID. Usage: `/boss uid <tp/tpto/kill/nbt> <uuid>`. Useful for debugging individual Boss entities.

### `/boss region`
Create and manage Boss spawn regions. Use `/boss tools` to get the region tool first, then `/boss region add <name>` after selecting the area.

### `/boss tools`
Open the tools menu to get region tools, the Tamer Tool and the Entity Info Tool.

### `/boss skull`
Get player skulls to place on Boss heads. Usage: `/boss skull <name/url/uuid/base64> <value> [player]`. See [mcheads.ru](https://mcheads.ru/en/alphabet/vfro) for skull data examples. Run from console for long base64 strings.

### `/boss location`
Create and manage Boss spawn locations. Sub-commands: `new <name>`, `tool`, `rem <name>`, `view [name]`, `tp <name>`, `list`, `point`. Locations are saved points used by LocationPeriod spawn rules.

### `/boss remove`
Permanently delete a Boss configuration. Usage: `/boss remove <boss>`. This only removes the Boss type definition, not already-spawned entities.

### `/boss countunloaded`
Debug command to count Bosses in unloaded chunks. Usage: `/boss countunloaded <save/load>` or `/boss countunloaded <world> <Boss/all>`.

### `/boss reload`
Reload the plugin configuration.

### `/boss perms`
Display all plugin permissions.

</div>
