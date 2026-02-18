This page covers the configuration of settings.yml. You can also view the default settings by opening Boss.jar file and viewing the setting files from there. **Keep in mind you can't edit them inside your .jar file.**

> Use UTF-8 encoding. Notepad and Wordpad on Windows is broken. Use [Notepad++](https://notepad-plus-plus.org/) while on Windows, or [Sublime Text](https://www.sublimetext.com/) for Windows, Mac and other platforms.

# Folder structure

After the installation, your Boss folder should look like this:

![Boss Folder](/images/boss/gJ9EDww.png)

* **bosses/** - A folder containing individual settings for each Boss.
* **localization/** - A folder with the message file you can edit to design the plugin to your needs.
* **locations/** - A folder with locations you create with /boss tools.
* **regions/** - A folder with regions you create through /boss tools.
* **spawnrules/** - A folder with different spawn rules. Do not edit, this is managed through GUI.

* **data.db** - Internal database file. This is a machine-generated file, please do not modify.
* **settings.yml** - The main configuration file.

## Automatic Update
Boss updates your configuration automatically and seamlessly. When you update to a new version, all of your configs will get updated automatically.