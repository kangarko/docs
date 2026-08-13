# Common Issues

## Critical Compatibility Notes

::: warning IMPORTANT
- **Stacking plugins**: We support StackMob, RoseStacker and WildStacker. Others may need an exception — open a ticket.
- **Non-Paper forks**: Some forks remove our Boss tag. Test with [Paper](https://papermc.io) first before reporting.
- **Citizens**: When a Boss uses Citizens, the Citizens plugin handles most attributes. Use `/npc` to configure those settings.
:::

## Spawning Issues

### Bosses are not spawning!
- Check the limits: /boss menu > Bosses > Your Boss > Spawning > World Limits, Radius and Where Limits Are Applied
- Check if your Spawn Rule includes the Boss and its delay, chance, and other properties
- Check if other plugins block mob spawning (WorldGuard, GriefPrevention, Factions, Residence, etc.)
- Try spawning with `/boss egg` to see error messages:

![Spawn Egg Message](/images/boss/DelmK5F.png)

- Set `Debug` to `[spawning]` in settings.yml and restart

### Spawning Configuration Questions

**Spawn Bosses at a certain time?**  
Create an On A Block At A Given Time rule in /boss menu > Spawning.

**Rotating spawns (one of several Bosses at a location)?**  
Use a **Respawn After Death** spawn rule. Add all bosses to one rule with a delay (e.g., 30 seconds). Only **one boss from the rule is alive at any time** — when it dies, the next spawns after the delay.

**Spawn a Boss after players kill a number of other Bosses?**  
Use an **After A Kill Goal** spawn rule in /boss menu > Spawning. Select which Bosses count, the kill goal and the locations to spawn at. Kills from all players share one persistent counter, and only kills by a player count.

**Spawn Bosses when entering a region?**  
Create the region using /boss tools, then make an **On Entering A Region** rule via /boss menu > Spawning. It needs `Register_Regions: true` in settings.yml, otherwise the button is greyed out.

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
Open Boss > Settings > **AI & Behavior**, turn on Custom Targeting, then pick Follow, Attack and at least one entry under Target Entities. Leaving Target Entities empty is why most Bosses stand still. Only affects newly spawned Bosses.

**Change skins for NPC Bosses?**  
Open Boss > Settings > AI & Behavior > Skin. Player Bosses need Citizens installed.

**Customize Player or Citizen boss behavior (speed, follow distance, armor toughness)?**  
Use the AI & Behavior menu first. For anything Citizens owns, run `/npc select` while looking at the Boss and configure with `/npc` commands.

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

**Custom messages or commands on Boss death/spawn/target/health threshold?**  
Open Boss menu > Settings > Commands. Skills have their own command list too.

**Skills never fire?**  
Skills ignore players in Creative or Spectator mode, vanished players and NPCs, so testing in Creative looks broken. Targeting skills also need the Boss to have a target within `Skills.Target_Range` blocks (8 by default). Set `Debug` to `[skills]` in settings.yml to see the reason for every skip.

**Disable a message?**  
Set it to `"none"`, `""`, or `[]`.

**Increase maximum Boss health?**  
Raise `settings.attribute.maxHealth` in spigot.yml. Health values over 256 may cause weird behavior and are unsupported.

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
The kill placeholders (`%boss_<name>_<player>_kills%` and `%boss_<name>_top_kills_<n>_<player/value>%`) require the Boss to be killed by direct player damage. If a Boss dies from /effect commands, fire damage, or other indirect causes, nothing is counted.

## Common Tips

::: tip Formatting
- Use **[color codes](http://minecraft.gamepedia.com/Formatting_codes)** with the & character in quotes: `Random_Message: '&cHello &aworld'`
- Use `\n` for new lines. See [Use Right Encoding](../general/use-right-encoding) page.
:::

## Startup and Loading Issues

**"Failed to download library" error**  
Your server couldn't download required libraries from Maven Central (network outage, firewall, DNS issues). Restart to retry.

**"Counting unloaded Bosses requires a modern Paper software. Disabling..."**  
Your server is not Paper, or it is too old to have the event we need. Boss turns `Spawning.Count_Unloaded_Bosses_In_Limits` off for you and world limits then only count loaded chunks.

**Boss packs not working on legacy versions (1.8.8)**  
Pre-made Boss packs use modern entity types and materials. You need to manually adapt them for legacy versions.