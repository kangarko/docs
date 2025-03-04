# Permissions

Here you can view all the permission this plugin supports. We recommend using LuckPerms as a permission plugin, as it has proven stability over the many years of its course.

## CoreArena Commands
Permissions for the main plugin's command.

### Basic Commands

```yaml
# Join arenas
Perm: corearena.command.join.{arena}
Info: Gives the player the ability to join an arena using "/ca join".
You need both corearena.command.join and the other version with {arena}
replaced with arenas you want the player to be able to join into.

# Leave arenas
Perm: corearena.command.leave
Info: Gives the player the ability to leave an arena using "/ca leave".

# List arenas
Perm: corearena.command.list
Info: Gives the player the ability to see the available arenas using "/ca list".

# Rewards menu
Perm: corearena.command.rewards
Info: Gives the player the ability to open the Rewards menu using "/ca rewards".

# Class menu
Perm: corearena.command.class
Info: Gives the player the ability to open the Classes menu using "/ca class".
```

### Admin Commands

```yaml
# Edit arena
Perm: corearena.command.edit
Info: Toggle an arena's edit mode using "/ca edit".

# Items menu
Perm: corearena.command.items
Info: Open the Items menu to keep editing the arena using "/ca items".

# Tools menu
Perm: corearena.command.tools
Info: Open the Tools menu to keep editing the arena using "/ca tools".

# Admin menu
Perm: corearena.command.menu
Info: Open the Admins menu using "/ca menu".

# Manage nuggets
Perm: corearena.command.nugget
Info: Manage player nuggets "/ca nugget".

# Reload plugin
Perm: corearena.command.reload
Info: Reload the plugin using "/ca reload". (Disclaimer: It might break things. It's always best to restart the server, so use at your own risk.)

# Force start
Perm: corearena.command.start
Info: Forces an arena to start using "/ca start".

# Force stop
Perm: corearena.command.stop
Info: Forces arenas to finish using "/ca stop".

# Create arenas
Perm: corearena.command.new
Info: Create new arenas using "/ca new <name of the new arena>".

# Find arenas
Perm: corearena.command.find
Info: Find arenas at player's location using "/ca find <player>".

# Reply to conversations
Perm: corearena.command.conversation
Info: Reply to server's conversation "/ca conversation".

# Teleport to arenas
Perm: corearena.command.tp
Info: Teleport to an arena using "/ca tp".
```

### Miscellaneous permissions

```yaml
# Global chat
Perm: corearena.chat.global
Info: Begin a message with '!' to send it to everyone on the server instead of only players in your arena.

# Chat color
Perm: corearena.chat.color.red
Info: Permission to have a red name in the arena chat. (Not customizable)

# Command bypass
Perm: corearena.bypass.arenacommands
Info: Allow running commands while playing in an arena.

# Tools permission
Perm: corearena.tools
Info: Grants permission to right click with tools as specified in the tools menu and use them.

# Class permission
Perm: corearena.class.{class_name}
Info: Permission to allow or deny a specific CoreArena class to a group or user.
```