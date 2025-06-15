# Command Configuration Guide

This document explains the command configuration system used in our Discord bot. We'll break down the structure using the "ban" command as an example.

## Command Configuration Structure

Each command is configured through a JSON structure that determines its behavior, permissions, cooldowns, and logging features.

### Basic Structure

```json
"ban": {
    "permissions": ["BAN_MEMBERS"],
    "cooldown": {
        "algorithm": "fixed_window",
        "bucket": "user",
        "window_length": 60,
        "allowed_invocations": 1
    },
    "log": 1163899262044745790
}
```

## Components Explained

### Command Activation

Commands are activated by their presence in the configuration. To disable a command, simply remove it from the configuration file.

### Permissions

```json
"permissions": ["BAN_MEMBERS"]
```

| Property      | Purpose                              | Values                       | Default    |
| ------------- | ------------------------------------ | ---------------------------- | ---------- |
| `permissions` | Defines required Discord permissions | Any valid Discord permission | `["NONE"]` |

- **Special Value**: `"NONE"` allows anyone to use the command
- **Multiple Permissions**: Specify multiple permissions in the array if needed
- **Behavior**: Users must have ALL listed permissions to use the command

### Cooldown System

```json
"cooldown": {
    "algorithm": "fixed_window",
    "bucket": "user",
    "window_length": 60,
    "allowed_invocations": 1
}
```

| Property              | Purpose                    | Values                               | Default        |
| --------------------- | -------------------------- | ------------------------------------ | -------------- |
| `algorithm`           | How cooldown is calculated | `fixed_window`, `sliding_window`     | N/A (required) |
| `bucket`              | What cooldown applies to   | `user`, `channel`, `guild`, `global` | N/A (required) |
| `window_length`       | Time period in seconds     | Integer value                        | N/A (required) |
| `allowed_invocations` | Uses allowed within period | Integer value                        | N/A (required) |

- **Algorithm Types**:

  - `fixed_window`: Resets after a fixed time period
  - `sliding_window`: Continuously moves the time window

- **Bucket Types**:
  - `user`: Individual users have separate cooldowns
  - `channel`: Cooldown applies to all users in a channel
  - `guild`: Cooldown applies to the entire server
  - `global`: Cooldown applies across all servers

### Command Logging

```json
"log": 1163899262044745790
```

| Property | Purpose             | Values                   | Default |
| -------- | ------------------- | ------------------------ | ------- |
| `log`    | Channel ID for logs | Valid Discord channel ID | None    |

- **Note**: If `log` is not specified, logging is disabled for the command

## Optional Configuration and Defaults

You can simplify command configurations by omitting certain sections when default behavior is desired:

```json
"simple-command": {
    "permissions": ["NONE"]
}
```

This minimal configuration:

- Enables the command by its presence in the configuration
- Sets permissions to `"NONE"` (anyone can use it)
- Has no cooldown restrictions
- Has logging disabled

## Configuration Cheat Sheet

```json
{
  "command-name": {
    "permissions": ["PERM1", "PERM2"], // Optional, defaults to ["NONE"]
    "cooldown": {
      // Optional, no cooldown if omitted
      "algorithm": "fixed_window|sliding_window",
      "bucket": "user|channel|guild|global",
      "window_length": 60, // Time in seconds
      "allowed_invocations": 5 // Number of allowed uses
    },
    "log": 1234567890123456789 // Optional, Discord channel ID for logging
  }
}
```
