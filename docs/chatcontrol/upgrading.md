# Upgrading to ChatControl 11

## From ChatControl 10:
Upgrading from v10 to v11 is 99% automatic. We will make a backup of your old folder. The new folder is named just "ChatControl".

To upgrade, simply replace the jar files and restart your server. Observe the console logs in case you need to do something manually.

See the Breaking Changes and Changelog below for changes.

## Upgrading From ChatControl Pro (8, 9)
Upgrade to ChatControl 10 first, then upgrade to 11. Simply replace jar files when upgrading.

## From ChatControl Free
Not possible except for /rules, although specifically for these archaic versions some operators might have been changed. You will be informed in the console about this.

## ChatControl 11 Breaking Changes

::: warning Important
* Localization format has changed completely and drastically and automatic update is not offered at the moment. Some people reported using AI with long context window (Claude Sonnet, Google Gemini) with some prompt engineering can with migrating the syntax from yml to json.
* Renamed some variables to ensure consistency, i.e. isp is now player_isp, town to player_town, nms_version to server_nms_version etc. The only exception is still `{player}` and `{nick}` but we recommend you change them to `{player_name}` and `{player_nick}` too. See [Variables](variables) for up-to-date syntax.
* Some HEX color syntax is no longer supported, but we temporarily added support back in the new Performance section of settings.yml. Migrating to the official MiniMessage `<#123465>` or `<red>` syntax is advised. Legacy & color codes will always be supported.
* Replaced %syntax% variable syntax with `{syntax}`. If you absolutely need to use the percentage syntax, see Performance section of settings.yml and enable it back.
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
* **Improve** | Improved "then deny silently" so that spying players will receive the soft muted message with [denied] prefix (configurable), plus you can use `{message_is_denied_silently}` placeholder in chat formats to show that the message was soft muted to the sender. This variable is unsupported in spy format since they have a custom prefix if denied silently already.
* **Improve** | The | divider in "then console", "then command" and "then proxy" is now used to pick one command randomly. Since you can use this operator multiple times, this now opens a whole lot of new possibilities. For comparison, on ChatControl 10 the | was used to separate multiple commands (all of which will be executed at the same time).
* **Improve** | Auto-capitalization now works even for sentences starting with a & color or a minimessage tag.
* **Improve** | Resolved all instabilities when sending join messages on proxy, reworked this communication system completely.
* **Improve** | Solved Spigot placeholders not working on Velocity such as you can now use `{player_nick}` in your proxy join messages on VelocityControl and this will get replaced by the nick consistently over all servers.
* **Improve** | In death messages, the `{killer_item}` variable now properly shows the exact ItemStack as it appears in vanilla Minecraft death messages.
* **Improve** | You no longer will receive spy messages from players you ignore.
* **Improve** | Rewritten variables for player messages. You can now use `{sender_x}`, `{receiver_x}` and `{killer_x}` variables such as to get these player's nicks etc.
* **Improve** | The /toggle `<join/quit>` now properly ignores messages set on proxy too. The only limit is you cannot toggle individual message groups.
* **Improve** | Spying on books will now properly open them over proxy or if player has disconnected when clicked the spy message.

### Fixes
* **Fix** | Fixed sounds in channels not working.
* **Fix** | Solved -f option in "/chc clear" command not working.
* **Fix** | Solved Anti_Bot.Cooldown.Chat_After_Login and Command_After_Login options not working.
* **Fix** | Solved fallback command prefix for commands not being ChatControl. Starting this release, you can tab /chatcontrol: and you will see all commands we have as a result. Thus, you can do /chatcontrol:me to explicitly invoke the me command.

### Removed Features
* **Remove** | Removed /chc tour secret command and simplified the plugin enabling process.
* **Remove** | Removed packet rules. Current implementation had numerous flaws, showed up heavily in spark reports and was unreliable due to how component trees are now serialized. Additionally we found this feature to be extremely rarely used. All other packet features such as removing messages with [X] were re-implemented with higher performance.
* **Remove** | Dropped support for %% variables, and made all variables support the `{syntax}`. This 2x the plugin performance because we no longer need to check for placeholders twice.
* **Remove** | Removed Integration.Discord.Forward_From_Proxy because it was poorly implemented and required online players on the master server. We recommend having DiscordSRV installed on all servers from which you want to send or receive messages.
* **Remove** | Removed waiting until the resourcepack is loaded to send player join message, because this is now unneeded on modern Minecraft versions as resourcepacks are loaded before the player join event is fired. And maintaining this insanity for multi-version is above my time and nerve scope. Btw on v10 right now we actually invoke 2x database calls due to this, dragging down performance and opening up for potential issues, so I recommend you turn off this option there as well if you are waiting with the upgrade.
* **Remove** | Removed rarely used Receiver_Condition/Permission keys from variables/ files due to unsupported behavior with the new minimessage format.
* **Drop** | Support for Minecraft 1.7.10 and older.
* **Drop** | The mic.

## ChatControl 11 Technical Limitations

::: warning Limitations
* Items renamed on Anvil will lose colors the player does not have the permission for. Give the player the "chatcontrol.use.color.anvil" permission and see the other permissions under the Colors section of settings.yml for specific colors configuration.
* You MUST set your Server_Name in proxy.yml to be exactly matching the one set in velocity.toml or Bungee's config.yml for proxy to work.
* Performance is reduced if JavaScript variables are used. Compiling realtime JavaScript is simply put heavy, do not complain about performance if you use JavaScript variables, there is nothing we can do and a cache is unfeasable because it is unfeasible. This is the same in ChatControl 10.
* /chc sendas `<player>` requires the player to be on the same server because formats need a Bukkit entity to build their conditions
:::

## ChatControl 10 Support

::: info Support Timeline
I will continue to deliver critical fixes and security patches for ChatControl 10 until March 2025 but other general support will not be provided.
:::

Thanks for reading!

PS: Don't forget to update your BungeeControl and VelocityControl too. I hope you will enjoy the plugin as much as I did making it. Thanks for everyone who participated and those eagerly waiting.

Enjoy!

-Matej