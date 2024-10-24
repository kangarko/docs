---
title: Proxy
description: proxy setup guide
hide:
  - toc
---

# Currently supported proxies:
<hr>
<!-- Remember to replace the example links with the actual links -->
* Bungee - Install [Bans-Bungee](https://example.com) on your proxy and keep ***Bans-Plugin*** on Bukkit servers.
* Velocity - Install [Bans-Velocity](https://example.com) on your proxy and keep ***Bans-Plugin*** on Bukkit servers.

<hr>
# Requirements

* MySQL database

<hr>
# 1. Install Proxy Addons

Keep ***Bans-Plugin*** on your Bukkit servers and install our addons on proxy from above.

<hr>
# 2. Enable MySQL


We require a database connection to synchronize data between your network effectively.

a. Enable database in `settings.yml` inside plugins/Bans-Plugin folder. b. Enable network in `Settings.yml` inside plugins/Bans-Plugin folder. c. Change "Server_Name" in the section called `Proxy` to be unique for each server (see below).

<hr>
# 3. Link Your Server Name


Ensure that your server name on proxy equals to the "Server_Name" key from step 2c.

Example for BungeeCord's config.yml:

![image](https://github.com/user-attachments/assets/15f03126-ded6-4e73-8315-887aedbe5ead)

Example for Velocity's velocity.toml:

![image](https://github.com/user-attachments/assets/51ee20be-16a0-4967-82af-26d692025325)

<hr>
# 4. Restart

After a restart, you should now be able to use proxy features automatically.

