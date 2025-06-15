# Boost Reward System Guide

## Overview

The Boost Reward System in MineBot automatically rewards users who boost your Discord server with special perks. This feature enables:

- **Automated rewards** for server boosters
- **Cross-platform benefits** across Discord and Minecraft
- **Custom rewards** based on user groups or servers

## Configuration Structure

The boost reward settings are defined in the settings.json file under the `events.guild_boost` section:

```json
"events": {
  "guild_boost": {
    "log": 1377691201360232479,
    "reward": {
      "mode": "BOTH",
      "role": [1377691159991681139],
      "item": {
        "test1": ["give {minecraft_username} diamond 1"],
        "default": ["give {minecraft_username} apple 1"]
      }
    }
  }
}
```

## Configuration Options

| Option        | Description                          | Example                 | Notes                                    |
| ------------- | ------------------------------------ | ----------------------- | ---------------------------------------- |
| `log`         | Channel ID for logging boost events  | `1377691201360232479`   | Must be a valid Discord channel ID       |
| `reward.mode` | Type of rewards to give              | `"BOTH"`                | Options: `"ROLE"`, `"ITEM"`, or `"BOTH"` |
| `reward.role` | Array of role IDs to grant           | `[1377691159991681139]` | Each ID must be a valid Discord role     |
| `reward.item` | Commands to execute for item rewards | See below               | Server-specific commands                 |

## Item Rewards Configuration

The `reward.item` section supports server-specific commands:

```json
"item": {
  "test1": ["give {minecraft_username} diamond 1"],
  "default": ["give {minecraft_username} apple 1"]
}
```

| Key         | Description                                          |
| ----------- | ---------------------------------------------------- |
| Server name | Key representing a specific Minecraft server         |
| `"default"` | Commands used when no server-specific match is found |

### Available Placeholders

| Placeholder            | Description               | Example              |
| ---------------------- | ------------------------- | -------------------- |
| `{minecraft_username}` | Linked Minecraft username | `Player123`          |
| `{discord_username}`   | Discord username          | `User#1234`          |
| `{discord_user_id}`    | Discord user ID           | `123456789012345678` |

## Example Configurations

### Basic Configuration

```json
"guild_boost": {
  "log": 1377691201360232479,
  "reward": {
    "mode": "BOTH",
    "role": [1377691159991681139],
    "item": {
      "default": ["give {minecraft_username} diamond 5", "broadcast {discord_username} just boosted the server!"]
    }
  }
}
```

### Multiple Server Configuration

```json
"guild_boost": {
  "log": 1377691201360232479,
  "reward": {
    "mode": "BOTH",
    "role": [1377691159991681139, 1377691159991681140],
    "item": {
      "survival": ["give {minecraft_username} diamond 10", "broadcast Server booster {discord_username} has arrived!"],
      "skyblock": ["give {minecraft_username} emerald 20", "eco give {minecraft_username} 5000"],
      "default": ["give {minecraft_username} gold_ingot 5"]
    }
  }
}
```

## Troubleshooting

| Issue                  | Possible Solution                                                       |
| ---------------------- | ----------------------------------------------------------------------- |
| Rewards not granted    | Ensure user has linked their Minecraft account                          |
| Role not assigned      | Verify the role ID is correct and bot has permission to assign it       |
| Commands not executing | Check that command syntax is correct and placeholders are properly used |
| Missing logs           | Confirm the log channel ID is correct and bot has access to the channel |

::: danger
User must have linked their Minecraft account to receive in-game rewards
:::
