# Commands

Protect has a vast command offering. Everything you need to know about commands is shown in the game using feature-rich interactive system. Just hover over commands to get more information.

## How to Use Commands
To use commands, simply execute them in your console or the in-game chat. Many commands support additional parameters, see below.

* **[]** = optional arguments (in filters, you can use multiple)
* **<>** = required arguments

**TIP**: The alias for **/protect** is **/p**. You can change it in settings.yml in the Command_Aliases key.

## Permissions

Type /protect perms to view all available command permissions.

![Perms](https://i.imgur.com/J8j7nt0.png)

You can also view the required permission directly in the error message when you attempt to execute a command you don't have access to.

![Permission](https://i.imgur.com/LgEfscQ.png)

# Main Commands

![Commands](https://i.imgur.com/WSR1NqZ.png)

To see more on how commands works and how it can be used, simply hover your mouse over it and additional information will follow. 

### /protect debug
If you want to report a bug, run this command. It will compile all files into a single ZIP file that you can then upload to GitHub when creating an Issue. We remove your MySQL password and other sensitive data.

### /protect edititem
Edit properties such as name, lore, enchants or potions of the held item.

### /protect inspect
Utility command to view the content of the container you're looking at without opening it and remove items at certain slots. Useful for removing crashed items in containers that can't be viewed as they kick clients.

### /protect inv
View player inventory, armor or enderchest content. Offline players are supported.

### /protect invclose
Utility command to forcefully close an opened inventory for a player.

### /protect iteminfo
Show your or a player's [held item properties](https://i.imgur.com/zVDGsUN.png): NBT tag, material, id, data, durability and Bukkit toString()

### /protect logs
A complex command to view database logs for confiscated items, spied commands or shop transactions. Run `/protect logs <tableType> ?` to view all of the filtering options.

There are many options, example: `/protect logs items date:1h location:here,10` will find all confiscated items in the last hour at your location within a 10-block radius.

![Sample filter](https://i.imgur.com/PxMg9JA.png)

### /protect perms
Display all plugin's permissions.

### /protect playtime
Utility command to display how long a player has played on your server.

### /protect reload
Reloads the plugin and its configuration. Some things by their nature, such as listener priorities, console filtering etc. cannot be reloaded. PlugMan is unsupported and may break. Please use /protect reload instead of /rl or plugman and restart as soon as possible.

### /protect scan
Manually scan a player's inventory.