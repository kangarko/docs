# Proxy Support

::: tip Feature Support
Most features such as channels, private messages, nicks, warning points etc. are fully supported on proxy. That means you can tab-complete player names from the entire network, and manipulate with these data easily. You can even list proxy players using /list command and much more.
:::

## Currently Supported Proxies

* BungeeCord/Waterfall - [Install BungeeControl](https://www.builtbybit.com/resources/24248) on your proxy and keep ChatControl on Bukkit servers.
* Velocity - Install [VelocityControl](https://builtbybit.com/resources/43226) on your proxy and keep ChatControl on Bukkit servers. 
* RedisBungee or forks - Install addons from above and we'll enable Redis support automatically.

## Requirements

::: warning Database Required
MySQL database is required for proper proxy functionality.
:::

::: warning Velocity Configuration Required
A change is required in your Velocity proxy configuration for inter-server communication.

Set "bungee-plugin-message-channel" to "false" in your "velocity.toml" file. This is necessary for the proxy to correctly broadcast on the BungeeCord channel and ensure all plugins function as intended.
:::

## Installation Guide

### 1. Install Proxy Addons

Keep ChatControl on your Bukkit servers and install our addons on proxy from above.

### 2. Enable MySQL

::: info Database Configuration
We require a database connection to synchronize data between your network effectively.

a. Enable database in **mysql.yml** inside plugins/ChatControlRed folder.
b. Enable network in **proxy.yml** inside plugins/ChatControlRed folder.
c. Change "**Server_Name**" in **proxy.yml** to be unique for each server (see below).
:::

### 3. Link Your Server Name

Ensure that your server name on proxy equals to the "Server_Name" key from step 2c.

#### Example for BungeeCord's config.yml:

```yaml
servers:
  survival:
    motd: 'Survival Server'
    address: localhost:25566
    restricted: false
```

Make sure the server names (lobby, survival, creative) match exactly with what you set in your ChatControl's proxy.yml "Server_Name" value.

#### Example for Velocity's velocity.toml:

```toml
[servers]  
  survival = "127.0.0.1:25565"
```

Make sure the server names (lobby, survival, creative) match exactly with what you set in your ChatControl's proxy.yml "Server_Name" value.

### 4. Restart

After a restart, you should now be able to use proxy features automatically. 

::: tip Note
Some proxy features must manually be enabled in settings.yml of ChatControl.
:::

## Additional Features

You can also forward commands to proxy using "then proxyconsole" in [Rules](./rules) and [Messages](./messages) and "/chc forward" command.
