# Common Issues

## Critical Compatibility Notes

::: warning IMPORTANT
- **Stacking plugins**: We support StackMob, RoseStacker and WildStacker. Others may need an exception — open a ticket.
- **Non-Paper forks**: Some forks remove our Boss tag. Test with [Paper](https://papermc.io) first before reporting.
- **Citizens**: When a Boss uses Citizens, the Citizens plugin handles most attributes. Use `/npc` to configure those settings.
:::

## Spawning Issues

### Bosses are not spawning!
- Check Spawning Limits: /boss menu > Bosses > Your Boss > Spawning Limits
- Check if your Spawn Rule includes the Boss and its delay, chance, and other properties
- Check if other plugins block mob spawning (WorldGuard, GriefPrevention, Factions, Residence, etc.)
- Try spawning with `/boss egg` to see error messages:

![Spawn Egg Message](/images/boss/DelmK5F.png)

- Set `Debug` to `[spawning]` in settings.yml and restart

### Spawning Configuration Questions

**Spawn Bosses at a certain time?**  
Create a spawn rule for the given time in /boss menu > Spawn Rules.

**Rotating spawns (one of several Bosses at a location)?**  
Use a **Respawn After Death** spawn rule. Add all bosses to one rule with a delay (e.g., 30 seconds). Only **one boss from the rule is alive at any time** — when it dies, the next spawns after the delay.

**Spawn Bosses when entering a region?**  
Create the region using /boss tools, then make a spawn rule via /boss menu > Spawn Rules > Entering a Region. Alternatively, use [CommandRegions](https://www.spigotmc.org/resources/18001/) with WorldGuard.

## Entity and Behavior Issues

### Bosses disabling after restart or losing abilities / Boss Eggs / Riding broken!
- **Do not use spaces in world folder names** — this is unsupported
- **SimplePets or other pets plugins**: Exclude your Boss type from them
- **StackMob and other mob stacking plugins**: Contact their author to add a Boss exception
- **ViaVersion, ProtocolSupport**: May break Boss Eggs or riding. Test without them first

### Boss Name and Display Issues

**HEX / RGB colored names?**  
Open /boss menu > select Boss > Settings > Alias. Use MiniMessage format: `"<#123456>My Boss Name"`.

**Boss name doesn't display?**  
Likely a mob stacking plugin conflict. We support StackMob as an exception.

**Console spams "Named entity X was slain by Y"?**  
Set `settings.log-named-deaths` to `false` in spigot.yml.

### Custom AI and Behavior

**Dragon boss behavior issues?**  
Minecraft's dragon behavior is inconsistent when spawned manually. Experiment with custom rules to change the spawning phase.

**Make animals aggressive / add better AI?**  
Install Citizens and enable custom pathfinder in /boss menu > Bosses > Your Boss > Settings > Citizens. Only affects newly spawned Bosses.

**Change skins for NPC Bosses?**  
Open Boss > Settings > Citizens Settings and change the skin there.

**Customize Player or Citizen boss behavior (speed, follow distance, armor toughness)?**  
Enable Citizens integration in Boss > Settings > Citizens, then use `/npc select` while looking at the Boss and configure with `/npc` commands.

## Permissions and World Management

**Restrict Boss Eggs to a region?**  
Use [LuckPerms](https://www.spigotmc.org/resources/28140) with the [ExtraContent](https://github.com/lucko/ExtraContexts) addon ("WorldGuard Regions") and give `boss.use.spawneregg` permission in that region only.

**Prevent Boss Eggs in a certain world?**  
Give negative `boss.use.spawneregg` permission for that world. In LuckPerms, set it to `false`.

## Interface Issues

**Odd creative inventory issues / Menu items disappearing?**  
Caused by ViaVersion, ProtocolSupport, CMI, or OpenInv — not a Boss issue. Switch to survival or clear your inventory.

![Inventory issue](/images/boss/L7iKd90.png)

## Customization Options

**Custom messages or commands on Boss death/spawn/health threshold?**  
Open Boss menu > Settings > Commands.

**Disable a message?**  
Set it to `"none"`, `""`, or `[]`.

**Increase maximum Boss health from 2048?**  
Change it in spigot.yml. Health values over 256 may cause weird behavior and are unsupported.

## Health and Damage Issues

**Boss health bar shows 0 but boss is still alive**  
This was caused by a bug where the health bar used raw event damage instead of final damage after armor/enchantment reductions. Update to the latest Boss version which fixes this.

**Boss damage display seems wrong**  
The damage display shows the hit damage, not total damage dealt. Area-of-effect attacks (sweeping edge, explosions) may show lower numbers because damage is split or modified by armor.

**Multiple health trigger commands not all activating**  
Health-triggered commands fire when the Boss crosses a health threshold. If a single hit crosses multiple thresholds (e.g., Boss goes from 80% to 20% in one hit), only the lowest crossed threshold fires. Space your thresholds further apart or use Bosses with higher health.

**Boss regenerating player's life**  
This is likely caused by the Steal Life skill working in reverse due to a configuration error. Check your Boss > Skills > Steal Life settings.

**Evoker fang attack not affected by damage multiplier**  
Some entity attack types (like evoker fangs) are separate entities in Minecraft and don't inherit the Boss's damage multiplier. This is a Minecraft limitation.

**PlaceholderAPI kill variables not working**  
Boss variables (like `{boss_kills}`) require the Boss to be killed by direct player damage. If a Boss dies from /effect commands, fire damage, or other indirect causes, kill placeholders won't trigger.

## Common Tips

::: tip Formatting
- Use **[color codes](http://minecraft.gamepedia.com/Formatting_codes)** with the & character in quotes: `Random_Message: '&cHello &aworld'`
- Use `\n` for new lines. See [Use Right Encoding](../general/use-right-encoding) page.
:::

## Startup and Loading Issues

**"Failed to download library" error**  
Your server couldn't download required libraries from Maven Central (network outage, firewall, DNS issues). Restart to retry.

**"Counting unloaded Bosses requires modern Paper software. Disabling..."**  
Another plugin bundles an incompatible Adventure library. This is a [Jar Hell](../chatcontrol/jar-hell) issue — find and fix the conflicting plugin.

**Boss packs not working on legacy versions (1.8.8)**  
Pre-made Boss packs use modern entity types and materials. You need to manually adapt them for legacy versions.