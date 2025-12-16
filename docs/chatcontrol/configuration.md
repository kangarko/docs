# Configuration

This page covers ChatControl's folder and its files. We have quite a lot of files, but once you understand how they work it'll be very easy to navigate through them.

::: warning
**WARNING**: You must use a compatible text editor to edit our configuration. See [Use Right Encoding](../general/use-right-encoding) for more info.
:::

## Folder structure

Here are (almost) all files that will appear in your ChatControl folder.

<div class="image-container">
  <img src="/images/chatcontrol/Moi8ZPe.png" alt="ChatControl Folder" />
</div>

### Folders

* **books/ folder:** Stores books you can create and open for yourself or players, see [Books](books).
* **formats/ folder:** Stores the different formats to display chat channels, timed, join or other messages with hover/click events. Each format contains parts, each of which can be shown or hidden depending on what permission the sender or receiver has, and more. See [Formats](formats).
* **images/ folder:** Place png or jpg images here and we'll show them in the game in chat, such as with "/chc announce image".
* Optional: **lang/ folder:** Not created by default unless you dump your language keys, see [Localization](../general/localization). Allow you to customize plugin's messages.
* **messages/ folder:** Create messages for when your players join, quit or die on this server (for network join/quit/switch, see [Proxy](proxy) and configure messages on the addon itself). Also stores automated broadcasts in the 'timed.rs' file. See [Messages](messages) for more.
* **rules/ folder:** Filter any message, command, or even messages from other plugins, edit them or do anything you desire. Create new commands, replace 12 plugins with our powerful rules system. See [Rules](rules) for documentation.
* **variables/ folder:** Create placeholders you can use in your formats such as `{player_rank}` or even by players in the chat such as "I hold and [item]' using JavaScript." See [Variables](variables).

### Files

* Optional: **error.log file:** Not created unless there's a problem with our plugin. Send this to us and we'll fix it!
* **database.yml file:** Lets you configure how we store player data and sync it across proxy.
* **proxy.yml file:** Lets you configure [Proxy](proxy).
* **settings.yml file:** Our main configuration file. Do not edit! Just kidding, you can edit it as you like :) However, any comments will reset back to defaults on restart.
* Optional: **sqlite.db file:** Not created unless you're using local database, see database.yml file.

::: tip
To see the default contend of these files, ChatControl .jar file using WinRar or any unzipping program and you will see these files in their default states in there. Keep in mind you can't edit them there.
:::
