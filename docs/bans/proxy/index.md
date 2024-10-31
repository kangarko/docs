---
title: Proxy
description: Proxy setup guide
icon: simple/traefikproxy
hide:
  - toc
---

# :simple-traefikproxy: Proxy

## 1. Install Proxy Addons

Keep **Bans** on your Bukkit servers and install our addons on proxy from above.

* BungeeControl - Install Bans-Bungee.
* Velocity - Install Bans-Velocity.

## 2. Enable MySQL

We require a database connection to synchronize data between your network effectively.

- A. Enable database in `settings.yml` inside plugins/Bans folder. 
- B. Enable network in `Settings.yml` inside plugins/Bans folder. 
- C. Change "Server_Name" in the section called `Proxy` to be unique for each server (see below).

## 3. Link Your Server Name

Ensure that your server name on proxy equals to the "Server_Name" key from step 2c.

Where to find server name in BungeeCord's config.yml:

![BungeeCord config.ym](../../assets/bans/bungeecord-config.png)

Where to find server name in Velocity's velocity.toml:

![Velocity config.yml](../../assets/bans/velocity-config.png)

## 4. Restart

After a restart, you should now be able to use proxy features automatically.
