# Upgrading to ChatControl 11

## From ChatControl 10
Upgrade is 99% automatic. Replace the jar and restart. A backup of your old folder is created automatically. The new folder is named "ChatControl".

## From ChatControl Pro (8, 9)
Upgrade to ChatControl 10 first, then to 11.

## From ChatControl Free
Not possible except for /rules (some operators may have changed — check console).

## Breaking Changes

::: warning
* **Localization** format changed completely (yml → json). No automatic migration yet.
* **Renamed variables** for consistency: `isp` → `player_isp`, `town` → `player_town`, `nms_version` → `server_nms_version`, etc. See [Variables](variables).
* **HEX colors**: Some syntax no longer supported. Migrate to MiniMessage `<#123456>` or `<red>`. Legacy `&c` codes still work. Old syntax can be re-enabled temporarily in Performance section of settings.yml.
* **Variable syntax**: `%syntax%` replaced with `{syntax}`. Can be re-enabled in Performance section if needed.
:::

## ChatControl 11 Changelog

### Major Changes
* **Major** | The plugin is now called "ChatControl" only, marking the end of ChatControl Red series.⁠

### New Features
* **New** | Added "clear chat history" operator which removes past  messages from the sending player. Requires ProtocolLib.
* **New** | Updated some variable syntax, such as `{warn_prefix}` etc. is now `{prefix_warn}`. See [Variables](variables) for up-to-date placeholders.
* **New** | Custom tablist header and footer with formats/ support.
* **New** | You can now use `{sender_x}` and `{receiver_x}` variables in private messages where x can be anything in our synced cache, where previously that was limited to just player names.
* **New** | Added a new antispam feature whereby you can exclude commands without arguments from similarity check, preventing the annoying blocking of /help being typed 2x for example.
* **New** | Added /dummy command that does absolutely nothing, please give a 5* review. This is not a joke, this command was added to allow command rules properly register in tab-completion. For example, if you made a /ping command in rules/commands.rs, [route to it in commands.yml](/images/chatcontrol/pe48BkR.png). (TIP: Remove the $1- if you do not want player names to complete after the main command label).
* **New** | Added ultra fast "require variable `<variable> <value>`" rule operator to replace use of heavy "require script" whenever possible. For example "require variable `{player_vanished}` true" will be about 2x faster. See our docs for examples and usage.
* **New** | Added /say command to replace Mojang limited /say command with robust formatting capabilities. Proxy addons have their own network-wide /say and /me commands too.
* **New** | Added ability to use colors or minimessage tags on anvils, books and signs, including gradients. On books, you can include hover and click events. Those are protected by an extra `chatcontrol.action.<name>` permission.
* **New** | Full-stack support for emojis on Discord<>Minecraft. When ItemsAdder is enabled, we render the proper emoji images. If it's not installed, we translate emojis to tags like :heart: etc. The only limit is we can't translate emojis not in ItemsAdder or not on Discord, both platforms must have the same tag.
* **New** | Added sexy as hell dynmap integration including rules, proxy and Discord support.
* **New** | You might be greeted by occassional "Unable to find cached database player" during the beta, yay! Don't panic. Still better than leaks. Let this be your personal guide to freedom. And don't forget to report all such occurences to my GitHub.
* **New** | Added "ignore commandprefix" operator to rules to ignore the "/chc:me" in "/chc:me hello world" and only test this rule against "hello world" to prevent false catches.
* **New** | Added the ability to make links in chat, private messages, /me and /say auto clickable. Proxy supported.
* **New** | Added support proxy and per-serve mute.

### Improvements
* Auto-capitalization works with `&` colors and MiniMessage tags
* Reworked proxy join messages (more stable)
* Spigot placeholders now work on Velocity (e.g. `{player_nick}` in proxy join messages)
* `{killer_item}` now matches vanilla death message format
* Spy messages no longer sent from ignored players
* `{sender_x}`, `{receiver_x}`, `{killer_x}` variables for player messages
* /toggle join/quit works on proxy
* Book spy works over proxy / after disconnect
* "then deny silently" shows `[denied]` prefix to spying players
* The `|` in "then console/command/proxy" now picks one command randomly (was: run all)

### Fixes
* Fixed sounds in channels, -f option in "/chc clear", Anti_Bot cooldown options
* Fixed fallback command prefix (now `/chatcontrol:`)

### Removed
* Packet rules (performance issues, rarely used; other packet features like [X] removal were reimplemented)
* `%%` variable syntax (use `{syntax}` — 2x performance improvement)
* Integration.Discord.Forward_From_Proxy (install DiscordSRV on each server instead)
* Resource pack delay for join messages (unneeded on modern MC)
* Receiver_Condition/Permission in variables/ files
* Support for Minecraft 1.7.10 and older

## Known Limitations

::: warning
* Anvil-renamed items lose colors without `chatcontrol.use.color.anvil` permission
* `Server_Name` in proxy.yml must exactly match velocity.toml / BungeeCord config.yml
* JavaScript variables reduce performance (unavoidable — realtime JS compilation is heavy)
* `/chc sendas <player>` requires the player on the same server
:::

## ChatControl 10 Support

::: info
Critical fixes and security patches for ChatControl 10 were provided until March 2025. General support is no longer available.
:::