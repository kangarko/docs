# Proxy Support

Channels, private messages, nicks, warning points, /list, and tab-completion all work across proxy.

## Supported Proxies

* **BungeeCord/Waterfall** — Install [BungeeControl](https://www.builtbybit.com/resources/24248) on the proxy
* **Velocity** — Install [VelocityControl](https://builtbybit.com/resources/43226) on the proxy
* **RedisBungee** (or forks) — Detected automatically

Keep ChatControl on your Bukkit servers.

## Setup

::: warning
MySQL database is required for proxy.
:::

1. Install the proxy addon (above)
2. Enable database in `mysql.yml` and network in `proxy.yml` (both in plugins/ChatControlRed)
3. Set a unique `Server_Name` in `proxy.yml` for each server — must **exactly match** (case-sensitive) the name in your proxy config:

```yaml
servers:
  survival:
    motd: 'Survival Server'
    address: localhost:25566
    restricted: false
```

Make sure server names match exactly with `Server_Name` in ChatControl's proxy.yml.

**Velocity's velocity.toml:**

```toml
[servers]  
  survival = "127.0.0.1:25565"
```

4. Restart. Proxy features are now active.

::: tip
Some proxy features must be manually enabled in ChatControl's settings.yml.
:::

## Proxy Commands

* `/vcreload` / `/bcreload` — Reloads proxy-side config (use `/chc reload` for Bukkit-side)
* `/me` — Network-wide formatted message (configure in proxy settings.yml `Me` section)
* `/say` / `/broadcast` — Network-wide broadcast (configure in `Say` section)

::: warning
If enabling `/say` or `/me` on proxy, disable or rename the same command in ChatControl on Bukkit servers.
:::

## Server Switch Messages

On proxy networks, you can show messages when a player switches between servers. Configure this in the `messages/switch.rs` file on the proxy side.

Switch messages use the same syntax as other messages (see [Messages](./messages)), with additional variables:

* `{from_server}` — The server the player is switching from.
* `{to_server}` — The server the player is switching to.

Players with the `chatcontrol.silence.switch` permission will have their switch message hidden.

To enable switch messages, add `switch` to `Messages.Apply_On` in the proxy settings.yml:

```yaml
Messages:
  Apply_On: [join, quit, switch]
```

## Forwarding Commands

Use `/chc forward` to send commands from a Bukkit server to the proxy or another server:

```
/chc forward proxy <command>
/chc forward <server_name> <command>
```

::: danger Security Restriction
By default, forwarding commands from the proxy console is disabled for security reasons. To enable it, set `Enable_Forward_Command` to `true` in the proxy settings.yml. This allows only the proxy console (not players) to forward commands to Bukkit servers.
:::

## Chat Forwarding

For servers on your network that do **not** have ChatControl installed, you can enable basic chat forwarding in the proxy settings.yml under `Chat_Forwarding`. This only relays raw chat messages — no filtering or formatting is applied on those servers.

```yaml
Chat_Forwarding:
  Enabled: true
  To_Servers:
    - "minigame1"
  From_Servers:
    - "minigame1"
```

## Clusters

You can group servers into clusters to limit data transmission (tab-completion, messages) only within the same cluster. Servers not listed in any cluster will be placed into a "global" cluster automatically.

```yaml
Clusters:
  Enabled: true
  List:
    gameplay:
      - factions
      - pvp
    lobbies:
      - hub1
      - hub2
```

## Redis Integration

If you have RedisBungee (or a fork like RedisBungee-Velocity) installed, we automatically detect it and redirect messages over Redis. You can disable this with `Redis_Integration: false` in the proxy settings.yml.

## Proxy Settings Reference

The proxy settings.yml (inside your VelocityControl or BungeeControl plugins folder) contains these sections:

| Section | Description |
|---------|-------------|
| `Server_Aliases` | Map server names to display aliases |
| `Messages` | Enable join/quit/switch messages, set prefixes, configure ignored servers |
| `Tab_Complete` | Filter proxy command tab-completion suggestions |
| `Chat_Forwarding` | Relay chat for servers without ChatControl |
| `Clusters` | Group servers for scoped data |
| `Integration.Parties` | Party and Friends / Parties plugin integration |
| `Say` | Configure the `/say` broadcast command |
| `Me` | Configure the `/me` broadcast command |
| `Enable_Forward_Command` | Allow console forwarding from proxy |
| `Make_Chat_Links_Clickable` | Auto-clickable URLs on proxy |
| `Redis_Integration` | Toggle RedisBungee support |
| `Debug` | Debug categories: `proxy`, `operator`, `redis`, `player-message` |

## Proxy Permissions

| Permission | Description |
|-----------|-------------|
| `chatcontrol.silence.join` | Hide join messages when player joins on another server |
| `chatcontrol.silence.leave` | Hide leave messages when player leaves from another server |
| `chatcontrol.silence.switch` | Hide switch messages when player changes servers |
| `chatcontrol.bypass.silence.join` | Still see hidden join messages |
| `chatcontrol.bypass.silence.leave` | Still see hidden leave messages |
| `chatcontrol.bypass.silence.switch` | Still see hidden switch messages |
| `chatcontrol.command.forward` | Use `/chc forward` (must be assigned on proxy too) |

## Troubleshooting

- **Errors on server stop:** Pending database operations. Harmless — ensure MySQL is responsive.
- **Duplicate messages:** Ensure only ChatControl handles join/quit/switch. Disable in the other plugin or remove from `Messages.Apply_On`.
- **Tab-completion issues:** Check `Tab_Complete` section in proxy settings.yml.
- **Cannot forward commands:** Set `Enable_Forward_Command: true` in proxy settings.yml (disabled by default for security).
- **Messages missing on a server:** Check `Messages.Ignored_Servers` and verify `Server_Name` matches (case-sensitive).

## Additional Features

You can also forward commands to proxy using "then proxyconsole" in [Rules](./rules) and [Messages](./messages) and "/chc forward" command.