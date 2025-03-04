# Common Issues & Troubleshooting

This page covers common issues and gives you tips on maintaining stability over CoreArena and other Bukkit plugins in general.

## Frequently Asked Questions

### Using CoreArena for dungeons

::: tip Using Maps in Dungeons
You can see some good tips on using our maps in your dungeons including chest refills and waves of mob fights here: [Issue #507](https://github.com/kangarko/CoreArena/issues/507)
:::

### Can I have a class limit for players?

::: tip Class Limits
Yes, there's currently a workaround available, see this: [Issue #401 Comment](https://github.com/kangarko/CoreArena/issues/401#issuecomment-746900595)
:::

## Troubleshooting

### Procedural damage doesn't work

<div class="vp-troubleshoot">
  <div class="vp-trouble-item">
    <div class="vp-trouble-title">Minecraft Version</div>
    <div class="vp-trouble-solution">This feature requires Minecraft 1.13 or greater.</div>
  </div>
  <div class="vp-trouble-item">
    <div class="vp-trouble-title">WorldGuard Settings</div>
    <div class="vp-trouble-solution">Ensure that block-break flag is <strong>true</strong>. If you set it to false in the <strong>global</strong> region, you need to make a custom WorldGuard region around the arena and set it to true there.</div>
  </div>
</div>

### Teleport commands on Player_Leave don't function

If you're having trouble teleporting players to a custom location right after the arena ends, especially if using Multiverse-Core, please use [a small plugin made for this](https://github.com/kangarko/CoreArena/files/3245901/ArenaTeleport.zip) by myself. Enter the command to that plugin and test with different delays to see what works. For more information, [see this issue](https://github.com/kangarko/CoreArena/issues/54).

### Users don't see classes

Please add the permission `corearena.class.KIT_NAME`.

### Arenas phases get stuck randomly?

If you are using `monsters` as your `next_phase_mode` in arenas.yml, please kill all entities or mobs when saving arena snapshots, and if you like, you can use the `%corearena_player_current_nearestmob%` in a scoreboard to track down mobs inside your arena if you can't find them.

### I have FastAsyncWorldEdit and the procedural damage does not work!

<div class="vp-alert">
  <p>Check console for "[FAWE <code>tick-limiter</code>] Detected and cancelled physics lag source (...)" messages. Try to disable tick-limiter to see if it helps. Make sure you have both latest FastAsyncWorldEdit and CoreArena.</p>
  <p>As of 1.16.x and possibly earlier, FAWE does not work with CoreArena, this is not because of CoreArena, but rather the fact that FAWE is very unstable at this point in time. But don't worry, you can simply use the normal WorldEdit plugin and enable <code>Block_Bulk_Restore_Amount</code> in settings.yml to stop lag when loading large arenas!</p>
</div>

### How to run commands / give items on certain/every nth phase?

See this section in your arena.yml file:

![Phase commands example](https://i.imgur.com/atVztMh.png)

## Text Formatting

::: tip Color Codes & New Lines
- To use **[color codes](http://minecraft.gamepedia.com/Formatting_codes) using the & character**, put the entire message in quotes (double quotes "" also work). Example: `Random_Message: '&cHello &aworld'`
- Use `\n` to make a new line. Put the message in quotes. Some systems require different file encodings, see below.
- In localization, you can hide a message by setting it to 'none' or ''.
:::