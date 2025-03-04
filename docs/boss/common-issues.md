# Common Issues

This page covers common issues and gives you tips on maintaining stability over Boss and other Bukkit plugins in general.

## Critical Compatibility Notes

::: warning IMPORTANT
### Plugin Compatibility Issues

- **Using stacking plugins?**  
  Boss™ supports StackMob, RoseStacker and WildStacker, but not others (yet). If you are using a popular free stacking plugin simply open at ticket and we'll add support for it, otherwise it will be incompatible.

- **Using Purpur / non-Paper forks?**  
  Weird forks tend to remove our Boss tag breaking our entities! Test using [Paper](https://papermc.io) if having issues before opening a ticket. We are a small dev team and can't test using 159+ forks on the market, I hope you understand.

- **Citizens API limitations**  
  If a Boss is linked with Citizens, the other plugin takes care of most of its attributes and features. Unfortunately in some cases this breaks Boss' settings as we are relying on the native Bukkit API. This is NOT a bug in Boss, but rather in the fact that Citizens re-implements vanilla features to be more customizable. You would need to use the /npc command to reconfigure your Boss manually.
:::

## Spawning Issues

### Bosses are not spawning!
- Check Spawning Limits for your Boss (/boss menu > Bosses > Your Boss > Spawning Limits).
- Check if your Spawn Rule has the Boss included, check its delay, chance and other properties.
- Check if other plugins or server are not blocking mob spawning (WorldGuard, GriefPrevention, Factions, Residence, Towny, PlotSquared etc.)
- Try spawning the Boss with its egg, using /boss egg to see if you get an error message with more info.
- Set the Debug key in settings.yml to [spawning], restart (not reload), and see the console for more information.

Use Spawn Eggs to often discover why Bosses are not spawning, we will give you a smart message so you avoid wasting time:

![Spawn Egg Message](https://i.imgur.com/DelmK5F.png)

### Spawning Configuration Questions

**Can I spawn Bosses individually at a certain time?**  
**Yes, you can!** Simply create a spawn rule for the given time in /boss menu > Spawn Rules.

**Is it possible to let Bosses spawn if you enter a region?**  
**Yes, you can (since Boss 4)!** Simply create the region using /boss tools and then make a spawn rule using /boss menu > Spawn Rules > Entering a Region.

PS: You can also use the [CommandRegions](https://www.spigotmc.org/resources/18001/) plugin with WorldGuard, or even a Command Block to run `/boss spawn` command when a player is nearby or enters the region.

## Entity and Behavior Issues

### Bosses disabling after restart or losing abilities / Boss Eggs / Riding broken!
- **DO NOT USE SPACES IN YOUR WORLDS**, THIS IS UNSUPPORTED
- **SimplePets or other pets plugins** are known to cause this, you need to exclude your Boss type from them or ask their developer to add an exception for Boss.
- **StackMob, MobStacker and other mob stacking plugins** will break Bosses, again, contact their author to add an exception for Boss. We have an exception for StackMob to not stack Bosses when spawned.
- **ViaVersion, ProtocolSupport and other packet hacks** may break Boss Eggs in creative inventory, riding of Bosses, and weird stuff. Always test without those plugins first before reporting issues with Boss.

### Boss Name and Display Issues

**How to give Bosses HEX / RGB colored names?**  
Open the Boss menu in "/boss menu" > select Boss > Settings > Alias and edit its alias. 

Use the MiniMessage format such as `"<#123456>My Boss Name"`.

**Boss name doesn't display**  
Likely caused by a mob stacking plugin. We support StackMob as an exception. If you have another plugin, try contacting their developer. We are nice and give them a free copy so they can integrate with us.

**Console spams with "Named entity X was slain by Y" messages**  
Set "settings.log-named-deaths" to "false" in spigot.yml file in the root server folder.

### Custom AI and Behavior

**Dragon boss behavior issues**  
Unfortunately Minecraft vanilla behavior is inconsistent when spawning dragons manually. You can experiment with custom rules to change the spawning phase of the dragon to find another behavior of him.

**Can you make animals aggressive / add better AI?**  
**Yes, you can (since Boss 4)!** Just install Citizens and you will be able to enable custom pathfinder in /boss menu > Bosses > Your Boss > Settings > Citizens. Keep in mind this only will affect newly spawned Bosses.

**How to change skins for NPC Bosses?**  
Open your Boss settings > Citizens Settings and change your skin there. You can have a custom skin and a completely different Boss name!

**How can I customize Player or other Citizen bosses (speed control, follow distance, armor toughness?)**  
If you have Citizens plugins, enable Citizens integration in your Boss > Settings > Citizens, and you can then customize anything you want and any controller by /npc select while looking at your Boss and then using /npc commands from Citizens plugin for that.

## Permissions and World Management

**Can I only allow using Boss Eggs within a region?**  
**Yes, using WorldGuard with LuckPerms.**

If you use [LuckPerms](https://www.spigotmc.org/resources/28140), you can install [ExtraContent](https://github.com/lucko/ExtraContexts) addon and look for "WorldGuard Regions") and simply give `boss.use.spawneregg` permission in that region(s) only.

**How to prevent using Boss Eggs in a certain world?**  
Give your players negative `boss.use.spawneregg` permission for that world. For LuckPerms, the permission needs to be set as "false". For PermissionsEx, it needs to start with an - so it's `-boss.use.spawneregg`.

## Interface Issues

**Odd creative inventory issues (ViaVersion/ProtocolSupport) / Menu doesn't work properly / Items disappear in the menu!**  
Unfortunately this is unrelated to Boss but how these packet hacking plugins handle inventories: https://i.imgur.com/L7iKd90.png This is a wontfix for us unfortunately, you'd have to switch into survival or clear your inventory.

Also, plugins such as CMI or OpenInv may cause this, always make sure to test without them before reporting issue on our end.

## Customization Options

**How can I send custom messages or commands when a Boss dies/spawns/reached certain health threshold?**  
**Yes, you can!** Open your Boss menu > Settings > Commands.

**How to disable message for X?**  
Set it to "none", or "", or "[]".

**How to increase maximum Boss health from 2048?**  
You can increase this in spigot.yml file in your root server folder. BEWARE: Minecraft was never intended to have extremely high health values and thus they will cause issues and weird behavior. If you set the health over 256.0 and have issues, you will get no support.

## Common Tips

::: tip Formatting and Appearance
- To use **[color codes](http://minecraft.gamepedia.com/Formatting_codes) using the & character**, put the entire message in quotes (double quotes "" also work). Example: `Random_Message: '&cHello &aworld'`
- Use `\n` to make a new line. Put the message in quotes. Some systems require different file encoding, see [Use Right Encoding](../general/use-right-encoding) page.
:::