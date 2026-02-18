# Commands

This page covers all the available commands for Winter.

## How to Use Commands

To use commands, simply execute them via the console or the in-game chat. All commands support tab-completion.

* **[]** = optional arguments
* **<>** = required arguments

**TIP**: The short variant for **/winter** is **/wt**. You can change aliases in settings.yml under `Command_Aliases`.

<div class="command-list">

### `/winter snow`
Toggle snow particles for yourself. This is a personal toggle that only affects the player running the command. Requires `winter.command.snow` permission.

### `/winter populate`
Add or remove snow blocks across entire world regions. Usage: `/winter populate <add|remove> <world>`. **Console only.** This command kicks all players and enables whitelist during operation. Requires manual world backup before use. Respects `Do_Not_Place_On` and `Ignore_Biomes` settings. Run the command twice to confirm.

</div>

::: danger Warning
The populate command modifies terrain across the entire world. Always backup your world first! This operation can take minutes to hours depending on world size.
:::

<div class="command-list">

### `/winter psycho`
Spawn a Psycho Snowman at your location. This is an aggressive mob that attacks players. Requires `winter.command.psycho` permission. Player only.

</div>

::: warning
Psycho Snowmen will attack and damage nearby players. Use with caution!
:::

<div class="command-list">

### `/winter perms`
List all plugin permissions.

### `/winter region`
Manage WorldGuard region integration for snow generation and particle effects. Requires `winter.command.region` permission.

### `/winter reload`
Reload the plugin configuration.

</div>

