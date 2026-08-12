# API

If you are a developer, ChatControl offers a comprehensive API to implement your own functionality into this plugin. The API source code is now available on GitHub, providing direct access to all events, parties, and other integration points.

## API Source Code Access

The complete API source code is accessible at:
[GitHub - ChatControl API](https://github.com/kangarko/ChatControl/tree/master/chatcontrol-bukkit/src/main/java/org/mineacademy/chatcontrol/api)

## Key API Classes

ChatControl's API is organized into several categories of classes that serve different purposes:

### Chat Events
- `ChannelPreChatEvent` - Called before a message is processed in a channel
- `ChannelPostChatEvent` - Called after a message is processed in a channel
- `PlayerMessageEvent` - Called when a player sends a chat message
- `PlayerPreMentionEvent` - Called before a player mention is processed
- `PlayerMentionEvent` - Called when a player mentions another player
- `PrePrivateMessageEvent` - Called before a private message is sent

### Channel Events
- `ChannelJoinEvent` - Called when a player joins a channel
- `ChannelLeaveEvent` - Called when a player leaves a channel
- `ChatChannelProxyEvent` - Called when handling proxy chat channels

### Moderation Events
- `MuteEvent` - Called when a player is muted
- `SpyEvent` - Called when chat spying is activated
- `PreRuleMatchEvent` - Called before a rule is matched
- `RuleReplaceEvent` - Called when a rule replaces text

### Utility Classes
- `ChatControlAPI` - Main API entry point with useful methods
- `Party` - Utility for creating custom chat channels
- `SampleCustomPlaceholders` - Examples of custom placeholder creation

## Creating a Custom Party Channel

A party channel in ChatControl allows only players in the same group (such as a faction, town, clan or plot) to see each others' messages. Many plugins are supported out of the box (see the `Party` comment in the `Channels` section of your settings.yml), including SimpleClans via `simpleclans-clan` and `simpleclans-ally` — check that list before writing your own integration. Here's how to create one:

::: warning
Custom parties registered through the two-argument `Party.register()` are evaluated on the sender's server only, so in proxy networks, messages in such channels do not reach players on other servers. If your plugin shares its group data across servers (i.e. over a database), use the three-argument overload `Party.register(name, isInParty, isInRemoteParty)` where the last function resolves membership from the receiver and the remote sender's UUID, and your channel will work network-wide.
:::

### Step 1: Configure Dependencies

Add ChatControl as a dependency in your plugin's `plugin.yml`:

```yaml
name: YourPlugin
version: 1.0
main: com.yourplugin.Main
softdepend: [ChatControl]
```

This ensures your plugin loads after ChatControl, allowing you to access its API.

### Step 2: Register Your Party

Register your party name in your plugin's `onLoad()` method. ChatControl loads its channels while it enables, and `softdepend` makes your plugin enable after it, so a party registered in `onEnable()` arrives too late and ChatControl fails to load the channel using it with "No such channel party". Bukkit runs every plugin's `onLoad()` before any plugin is enabled, so registering there always works. If you must register later, run `/chc reload` afterwards to re-read the channels.

```java
import org.mineacademy.chatcontrol.api.Party;

public class YourPlugin extends JavaPlugin {
    
    @Override
    public void onLoad() {
        // Only register if ChatControl is present
        if (Bukkit.getPluginManager().getPlugin("ChatControl") != null) {
            registerCustomParty();
        }
    }
    
    private void registerCustomParty() {
        Party.register("myplugin-claim", (receiver, sender) -> {
            // Replace with your own logic to determine if players are in the same group
            Claim claim = findClaimLocation(receiver.getLocation());
            List<UUID> claimPlayers = claim.getOnlinePlayers();
            
            // Return true if both players are in the same group
            return claimPlayers.contains(sender.getUniqueId()) && 
                   claimPlayers.contains(receiver.getUniqueId());
        });
    }
    
    private Claim findClaimLocation(Location location) {
        // Your custom logic to find a claim at a location
        return new Claim(); // Example
    }
}
```

### Step 3: Configure in settings.yml

After registering your party, you can use it in the `Party` key in `Channels.List` in ChatControl's `settings.yml`:

```yaml
Channels:
  List:
    claims:
      Format: claims-chat
      Party: myplugin-claim
```

## Working with Events

You can listen to ChatControl events in your plugin. Here's an example of monitoring when players are muted:

```java
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.mineacademy.chatcontrol.api.MuteEvent;
import org.mineacademy.fo.model.SimpleTime;
import java.util.UUID;
import org.mineacademy.chatcontrol.api.Channel;

public class ChatEventListener implements Listener {
    
    @EventHandler
    public void onPlayerMuted(MuteEvent event) {
        // Check what type of mute event occurred
        if (event.isPlayerMute()) {
            // Handle player mute event
            String playerName = event.getTargetPlayerName();
            UUID playerUUID = event.getTargetPlayerUniqueId();
            
            if (event.isMute()) {
                // This is a mute action (not unmute)
                SimpleTime duration = event.getDuration();
                String durationText = duration != null ? duration.toString() : "permanently";
                
                getLogger().info("Player " + playerName + " was muted for " + durationText);
                
                // You can also cancel the mute if needed
                // event.setCancelled(true);
            } else {
                // This is an unmute action
                getLogger().info("Player " + playerName + " was unmuted");
            }
        } else if (event.isChannelMute()) {
            // Handle channel mute event
            Channel channel = event.getTargetChannel();
            
            if (event.isMute()) {
                SimpleTime duration = event.getDuration();
                getLogger().info("Channel " + channel.getName() + " was muted for " + duration);
            } else {
                getLogger().info("Channel " + channel.getName() + " was unmuted");
            }
        } else if (event.isServerMute()) {
            // Handle server-wide mute
            if (event.isMute()) {
                SimpleTime duration = event.getDuration();
                getLogger().info("Server chat was muted for " + duration);
            } else {
                getLogger().info("Server chat was unmuted");
            }
        }
    }
}
```

## Using ChatControlAPI

The `ChatControlAPI` class provides several utility methods for interacting with the plugin:

::: warning
Player data is loaded from the database asynchronously around the time a player joins, and unloaded when he quits. Any method that works with a player's data, such as `getCache`, `checkMessage`, `checkRules` or `sendMessage`, throws an exception when his data is not loaded yet. Call `ChatControlAPI.isPlayerCached(player)` first and skip your logic when it returns false. This matters most when you call us from a join listener or from a task you schedule on join, because the data is often not ready at that point.
:::

```java
import org.bukkit.entity.Player;
import org.bukkit.command.CommandSender;
import org.mineacademy.chatcontrol.api.ChatControlAPI;
import org.mineacademy.chatcontrol.model.Checker;
import org.mineacademy.chatcontrol.model.RuleType;
import org.mineacademy.chatcontrol.model.Channel;
import org.mineacademy.chatcontrol.model.db.PlayerCache;
import org.mineacademy.chatcontrol.operator.Rule.RuleCheck;

// Check if server chat is globally muted
boolean isChatMuted = ChatControlAPI.isChatMuted();

// Always check that a player's data is loaded before using any method that needs it
if (!ChatControlAPI.isPlayerCached(player))
    return;

// Get a player's cache data
PlayerCache playerCache = ChatControlAPI.getCache(player);

// Check if a message would trigger any filters (antispam, anticaps, etc.)
Checker messageCheck = ChatControlAPI.checkMessage(player, "Hello world!");
if (messageCheck.isCancelled()) {
    getLogger().info("Message would be blocked: " + messageCheck.getCancelReason());
}

// Apply specific rules to a message (CHAT, COMMAND, JOIN, etc.)
RuleCheck ruleCheck = ChatControlAPI.checkRules(RuleType.CHAT, player, "Hello world!");
if (ruleCheck.isMatched()) {
    getLogger().info("Message matched rule: " + ruleCheck.getMatchedRule().getName());
}

// Check if a player is considered a newcomer
boolean isNewcomer = ChatControlAPI.isNewcomer(player);

// Check if a specific channel exists
boolean channelExists = ChatControlAPI.isChannelInstalled("global");

// Send a message to a channel through a player
if (channelExists) {
    ChatControlAPI.sendMessage(player, "global", "Hello everyone!");
}
```

This example demonstrates the core API functionality for:
- Checking global chat mute status
- Verifying a player's data is loaded before using it
- Accessing player data
- Filtering messages through various checks
- Testing messages against specific rule types
- Determining newcomer status
- Working with channels

## Advanced Integration

For more advanced integrations, refer to the API source code on GitHub. The code is well-documented and provides comprehensive examples of how to use each component.