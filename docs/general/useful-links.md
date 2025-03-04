# Useful Resources & Links

This page provides a collection of useful tools, websites, and resources to help you maintain your Minecraft server and MineAcademy plugins. These resources are recommended by our development team and community.

## 🎮 Minecraft Server Resources

<div class="resource-section">

* [**MiniMessage Viewer**](https://webui.advntr.dev/) - Preview and test MiniMessage formatting for Minecraft chat messages.
* [**Color Codes**](http://minecraft.gamepedia.com/Formatting_codes) - A comprehensive list of all Minecraft color and formatting codes for use in plugin configurations.
* [**JSON Generator**](https://minecraftjson.com) - Create interactive chat messages with clickable elements, hoverable text, and advanced formatting.

</div>

## 🔒 Security & Protection Resources

<div class="resource-section">

* [**Minecraft exploits and how to fix them**](https://github.com/YouHaveTrouble/minecraft-exploits-and-how-to-fix-them) - A comprehensive guide on network security through tweaks in your server software
* [**LWC Extended**](https://www.spigotmc.org/resources/lwc-extended.69551/) - For additional chest and container protection
* [**Plan Player Analytics**](https://www.spigotmc.org/resources/plan-player-analytics.32536/) - Track player activity and protection-related metrics

</div>

## 📝 Text Editors

<div class="resource-section">

::: tip Recommended
These editors properly handle UTF-8 encoding, which is crucial for plugin configuration files:

* [**Notepad++**](https://notepad-plus-plus.org/downloads) - A powerful yet lightweight text editor for Windows with syntax highlighting and proper encoding support.
* [**Sublime Text**](https://www.sublimetext.com/) - A sophisticated text editor with a beautiful interface and advanced features.
:::

::: warning Not Recommended
* **Windows Notepad** / **WordPad** - These editors do not properly handle UTF-8 encoding and can corrupt your configuration files. Use with extreme caution!
* **macOS TextEdit** - This default macOS editor may save files with incorrect encoding or formatting, potentially corrupting your configuration files. Avoid using it for editing plugin configurations.
:::

</div>

## 🛠️ Troubleshooting Tools

<div class="resource-section">

* [**YAML Parser**](http://yaml-online-parser.appspot.com/) - Validate your YAML syntax and identify errors in configuration files. 
* [**JSON Validator**](https://jsonlint.com/) - Check your JSON syntax for localization files and other JSON configurations.
* [**Pastebin**](https://pastebin.com) - Share error logs, configuration files, and code snippets with syntax highlighting.

</div>

## 📚 Learning & Support

<div class="resource-section">

* [**MineAcademy Discord**](https://mineacademy.org/discord) - Join our community for direct support, updates, and discussions.
* [**Project Orion**](https://mineacademy.org/project-orion?st=docs&sc=general_useful_links) - Learn to create your own Minecraft plugins. This course has helped over 4,000 students become plugin developers.

</div>

<hr>

## 🐉 Cool Plugins

<div class="resource-section">

* [**ModelEngine**](https://mythiccraft.io/index.php?resources/35/) - Create custom 3D models for your boss mobs
* [**ItemsAdder**](https://www.spigotmc.org/resources/73355/) - Create custom items for boss drops
* [**Holographic Displays**](https://dev.bukkit.org/projects/holographic-displays) - Create beautiful health bars and boss information displays

</div>

<style>
.resource-section {
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid var(--vp-c-brand);
}

.resource-section ul {
  list-style-type: none;
  padding-left: 0;
}

.resource-section li {
  margin-bottom: 12px;
  padding-left: 0;
}

/* Dark mode adjustments */
.dark .resource-section {
  border-left-color: var(--vp-c-brand-dark);
}
</style> 