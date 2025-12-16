# Configuration

This page covers Protect's files configuration. 

While editing files, use UTF-8 encoding. Notepad and Wordpad on Windows are broken. Use [Notepad++](https://notepad-plus-plus.org/downloads/) while on Windows and [Sublime Text](https://www.sublimetext.com/) for macOS and other platforms.

# Folder structure

Here's all the files that will appear in your Protect folder.

![Protect Folder](/images/protect/nmDE2tQ_d.webp)

### Folders

* **rules/ folder:** The main folder with rules for scanning and confiscating items. You can even run actions when items are found in a container to create brand new game mechanics and replace other plugins! See [Rules](rules) for documentation.

### Files

* **settings.yml file:** Our main configuration file. Do not edit! Just kidding, you can edit it as you like :) However, any comments will reset back to defaults on restart.
* **sqlite.db file:** Stores confiscated items, shop transactions or spied commands when remote database is disabled.

To view how these files looks like on a fresh installation, open Protect .jar file using WinRar or any unzipping program. You will see these files in their default states in there. Keep in mind you can't edit them there because they will be reset.