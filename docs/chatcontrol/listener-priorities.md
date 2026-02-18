# Listener Priorities

::: warning
**Always restart (not reload) after changing listener priorities.**
:::

## How It Works

Bukkit processes events in this order: `LOWEST` → `LOW` → `NORMAL` → `HIGH` → `HIGHEST` → `MONITOR`

Each plugin at its priority can **modify** the event (change message, recipients), **cancel** it (stop it), or **uncancel** it (override a previous cancellation).

### Example Scenario

| Priority | Plugin | Action | Result |
|----------|--------|--------|--------|
| LOWEST | Protection Plugin | Checks if player can build | ❌ Cancels block placement |
| NORMAL | Sign Plugin | Checks if it's a sign | ✅ Uncancels if it's a sign |
| MONITOR | Logging Plugin | Records the final result | 📋 Logs the action |

**ChatControl should process chat FIRST** (LOWEST priority) so it can filter messages before other plugins (e.g., DiscordSRV) see them. If another plugin runs first, unfiltered messages may leak through.

On 1.16+, there are two chat events. If a plugin uses the modern one, append `-MODERN` to the priority (e.g., `LOWEST-MODERN`). Try both if unsure.

## Plugin Compatibility

| Plugin | Recommended Setting | Notes |
|--------|-------------------|-------|
| **Towny / Factions** | `Chat_Listener_Priority: LOWEST` | May need adjustments |
| **LiteBans / BanManager** | `Chat_Listener_Priority: HIGH` | Fixes muted players chatting |
| **PlotSquared** | `Chat_Listener_Priority: LOWEST` | For plot-specific chat |
| **Denizen** | `Chat_Listener_Priority: HIGH` | Allows Denizen chat triggers |
| **DiscordSRV** | `Chat_Listener_Priority: LOWEST` | Filter before Discord relay |

## Troubleshooting

- **ChatControl not filtering?** → Try `LOWEST` or `LOWEST-MODERN`
- **Muted players can still chat?** → Try `HIGH`
- **Chat-dependent plugins broken?** → Start with `LOWEST`, try others
- **Still broken?** → Try each priority, restart after each change

## FAQ

**What does -MODERN do?** Listens to the newer chat event (1.16+). Some plugins use old, some use new.

**How do I find the right priority?** Trial and error with your specific plugin combination.