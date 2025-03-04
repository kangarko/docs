# Permissions

Here you can view all permissions this plugin supports. We recommend using LuckPerms as a permission plugin, as it has proven stability over the many years of its course.

One of the cool parts about Protect is tat you can view the missing permission within the error message directly.
![Permission](https://i.imgur.com/LgEfscQ.png)


***

## Permissions List

To list all permissions Protect has to offer, type "/protect perms". We moved our permissions list to the game because it was harder to maintain it here, and we can also show what permissions you have when you run this command in game.

## Permissions False By Default

Some permissions are taken away by default, even that OPs won't have them (you have to see how that performs with your permission plugin).

* **protect.bypass.scan**: This permission prevents your inventory from being scanned completely.


## Protect Permissions Dump

Here is our full class responsible for permissions. You can view these exact permissions in the game too with the /protect perms command:

````java
package org.mineacademy.protect.model;

import org.mineacademy.fo.command.annotation.Permission;
import org.mineacademy.fo.command.annotation.PermissionGroup;

/**
 * This class holds all permissions used by the plugin.
 */
public final class Permissions {

	private Permissions() {
	}

	@PermissionGroup("Permissions for plugin commands.")
	public static final class Command {

		@Permission("Permission to reload the plugin.")
		public static final String RELOAD = "protect.command.reload";

		@Permission("Permission to view inventory of a player. Replace type with 'regular', 'armor' or 'enderchest'.")
		public static final String INV = "protect.command.inv.{type}";

		@Permission("Permission to write to the inventory of a player.")
		public static final String INV_WRITE = "protect.command.inv.write";

		@Permission("Permission to close the inventory of a player.")
		public static final String INV_CLOSE = "protect.command.invclose";
	}

	@PermissionGroup("Permissions for bypassing certain checks.")
	public static final class Bypass {

		@Permission("Your inventory won't be scanned. By default, this permission is false even for operators.")
		public static final String SCAN = "protect.bypass.scan";

		@Permission("Your commands will be ignored from command spy.")
		public static final String COMMAND = "protect.bypass.command";

		@Permission("Your shop actions will leave no traces.")
		public static final String TRANSACTION = "protect.bypass.transaction";

		@Permission("Permission to bypass item limit for WorldEdit operations. Since some operations work with thousands of items, we do not allow only certain items to be bypassed because of the performance impact could freeze the server.")
		public static final String WORLDEDIT = "protect.bypass.worldedit";
	}

	@PermissionGroup("Permissions for notifications.")
	public static final class Notify {

		@Permission("Permission to receive alerts when a command is executed.")
		public static final String COMMAND_SPY = "protect.notify.commandspy";
		
		@Permission("Permission to receive alerts when a transaction is completed.")
		public static final String TRANSACTION = "protect.notify.transaction";
	}

	@Permission("Permission to be placed in a group. Replace group name with the actual group name.")
	public static final String GROUP = "protect.group.{group_name}";
}
````