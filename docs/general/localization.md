# Localization Guide

This guide explains how to customize messages in MineAcademy plugins, such as "Wait (x) seconds before chatting again" in ChatControl.

## Overview

All MineAcademy plugins store language keys in a JSON format. By default, these files are not exported to your server folder unless you specifically request them.

::: warning IMPORTANT
Some messages cannot be reloaded with a simple plugin reload. For major language changes, you may need to do a clean server restart.
:::


::: tip Quick Translation Using AI
You can quickly translate your localization files by dumping the generated locale JSON into a language model such as [Claude](https://claude.ai/) or [Google Gemini](https://deepmind.google/gemini/) (models with large context windows). Simply ask the AI to translate the JSON content into your desired language for free.
:::



## Customizing Localization

Follow these steps to customize messages for any MineAcademy plugin:

1. Type `/<plugin> dumplocale` in the game (for example, `/chc dumplocale` for ChatControl, `/boss dumplocale` for Boss). 
   This generates a `lang/xx_YY.json` file in your plugin folder (using whatever language you specified in the `Locale` key in `settings.yml`).

2. Edit the file to your liking. To hide a message, you can set its value to "none" if an empty value does not work.

3. If a new version of the plugin adds more language keys, simply re-run the command again to update your disk file. The plugin will default to the embedded language file in the plugin JAR for keys which are missing.

## Tips and Tricks

### Hiding Messages

::: tip
To hide a message, set its value to "none" or "".
```json
{
  "example-message": "none"
}
```
:::

### Using the Right Encoding

Make sure you save the language file in UTF-8 encoding to properly support special characters.

::: info See Our Guide on Encoding
We have a dedicated guide on [Using the Right File Encoding](use-right-encoding.md) that explains how to ensure your files are saved with UTF-8 encoding.
:::

### Removing Prefixes

Many plugins use prefixes like [X] or [!] before messages. You can typically hide these by finding keys that start with "prefix-" and setting them to "none":

```json
{
  "prefix-announcement": "none",
  "prefix-warning": "none"
}
```