# Permissions

Here you can view all the permission this plugin supports. We recommend using LuckPerms as a permission plugin, as it has proven stability over the many years of its course.

> You can view the required permission directly within the error message when you attempt to execute a command you don't have access to.

> ![Permission](/images/boss/1hEj8Uq.png)

## Commands
Permissions for the /boss commands.
 
````yml
Perm: boss.command.biome
Info: Get biome at your location with "/boss biome" command.

Perm: boss.command.butcher
Info: Remove spawned Bosses in your world with the "/boss butcher" command. This won't remove your Boss from configuration files.

Perm: boss.command.find
Info: Find spawned bosses with the "/boss find" command.

Perm: boss.command.conversation
Info: Reply to conversation with the server, for example in the menu when you need to type answer to the chat but other plugin is blocking this, use the "/boss conversation" command.

Perm: boss.command.egg
Info: Get Boss Spawner Egg the "/boss egg" command.

Perm: boss.command.list
Info: List commands with the "/boss list" command.

Perm: boss.command.menu
Info: Open the main Boss menu with the "/boss menu" command.

Perm: boss.command.new
Info: Create new Bosses with the "/boss new" command.

Perm: boss.command.permissions
Info: List all special Boss permissions with "/boss perms" command.

Perm: boss.command.region
Info: Create or manage Regions with the "/boss region" command.

Perm: boss.command.reload
Info: Reload the plugin (not recommended) with the "/boss reload" command.

Perm: boss.command.remove
Info: Remove Bosses with the "/boss remove" command. This won't remove spawned bosses on your worlds.

Perm: boss.command.scan
Info: Remove Bosses from unloaded chunks (basically your whole world).

Perm: boss.command.spawn
Info: Spawn Bosses.

Perm: boss.command.spawnpl
Info: Spawn Bosses behind players.

Perm: boss.command.tools
Info: Open the Tools menu with the "/boss tools" command.

Perm: boss.command.uid
Info: Manage a specific Boss by its UUID.

````

## Use
Permissions to use the Boss plugin in-game.
 
````yml
Perm: boss.use.spawneregg
Info: Use the Boss Spawn Egg.

Perm: boss.use.inspect
Info: Use the Boss Spawn Egg to click a Boss to find more information.

Perm: boss.spawn.{name}
Info: Use the Boss spawner egg for a specific Boss. 
Note: Replace {name} with your Boss name, that is lower-case,
without spaces translate special characters into non-special ones, examples below -
Permission for "Skeleton Warrior" is boss.spawn.skeletonwarrior
Permission for "Der Günter" is boss.spawn.dergunter

Perm: boss.use.tamer
Info: Use the Boss Tamer Tool to edit owners of tameable entities.

Perm: boss.airspawn
Info: Use the Boss Spawn Egg in the air so Bosses appear in the line of sight in front of you.
````

## Bypass
Permissions for administrators to bypass limitations.
 
````yml
Perm: boss.bypass.claim
Info: Allow you to spawn bosses in protected GriefPrevention regions.
````

## Notify
Permissions to get various messages.
 
````yml
Perm: boss.notify.update
Info: Receive update notifications in-game when you join.
````