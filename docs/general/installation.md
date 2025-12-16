# Install & Update Plugins

This guide covers the installation process for all MineAcademy plugins. Whether you're installing ChatControl, Protect, Boss, Winter, or any of our other premium plugins, this guide will help you get started quickly and avoid common issues.

---

## Detailed Installation Process

### Step 1: Download Your Plugin

After purchasing a plugin from BuiltByBit.com (we only sell there), download the latest version of the plugin JAR file.

### Step 2: Place the File

Copy the downloaded JAR file into your Minecraft server's `plugins/` folder.

### Step 3: Restart Your Server

Stop your server completely using the `stop` command.

::: warning IMPORTANT - AVOID /RELOAD
Never use `/reload` or plugin managers like PlugMan for installation or updates. These tools can cause data loss and unexpected behavior.

Always perform a complete server shutdown and restart when installing or updating plugins.
:::

### Step 4: Verify Installation

After your server starts up, you can verify that the plugin installed correctly by:

1. Check the console for startup messages like these:

   ```
   [ChatControl] Loaded!
   ```

2. Check that the plugin appears green in `/plugins` command.

3. Run the primary command for your plugin:

   | Plugin | Primary Command |
   |--------|----------------|
   | ChatControl | `/chatcontrol` or `/chc` |
   | Boss | `/boss` |
   | CoreArena | `/corearena` |
   | Protect | `/protect` |
   | Winter | `/winter` |

### Step 5: Initial Configuration

Most MineAcademy plugins feature initial setup assistants:

- **ChatControl** offers a quick start tour: `/chc tour`
- **Boss, CoreArena, Protect, Winter and others** automatically create configuration files you can edit

---

::: tip Command Shortcuts

You can use Bukkit's `commands.yml` file to create shortcuts for any plugin command.

Here is an example of creating a custom `/snow` command that will execute `/winter snow`.

```yaml
aliases:
  snow:
  - winter snow
```

:::

---

## Upgrading Plugins

::: info Upgrade Process
1. Download the latest version
2. Remove the old JAR file from your `plugins/` folder
3. Add the new JAR file to your `plugins/` folder
4. **Restart your server completely**
:::

MineAcademy plugins feature an automatic update system between versions of the same generation. Your configuration files will be automatically updated and any changes will be reported in the console:

![Update notification example](/images/general/v5uydb8.png)

::: tip Backup Your Configurations
Before updating, it's always a good practice to back up your configuration files.
:::


---

## Troubleshooting

If you encounter issues during installation:

1. Check plugin-specific Compatibility page to ensure your server meets the minimum requirements.
2. Check your server console for error messages.
3. Try deleting library/ folder in your root server folder while the server is stopped and reboot.

::: info Need More Help?
Join our [Discord community](https://mineacademy.org/discord) or refer to the specific plugin's troubleshooting guide.
::: 