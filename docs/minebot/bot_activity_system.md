# Bot Activity System

## Overview

Discord bots can display status information and activities just like regular users. The `bot` section in your `settings.json` file lets you control:

- **Online status** (online, idle, do not disturb, invisible)
- **Activity type** (playing, streaming, listening, etc.)
- **Activity details** (name, state, URL)

## Status Options

| Status           | Symbol | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| `ONLINE`         | 🟢     | Green dot, bot appears available             |
| `IDLE`           | 🌙     | Yellow/orange moon, bot appears idle         |
| `DO_NOT_DISTURB` | 🔴     | Red circle with line, bot appears busy       |
| `OFFLINE`        | ⚪     | Gray/invisible, bot appears offline to users |

```json
"status": "ONLINE"
```

## Activity Configuration

### Activity Type

Choose how your bot's activity is displayed:

| Type        | Format              | Example                  |
| ----------- | ------------------- | ------------------------ |
| `PLAYING`   | Playing [name]      | Playing Minecraft        |
| `STREAMING` | Streaming [name]    | Streaming tutorials      |
| `LISTENING` | Listening to [name] | Listening to music       |
| `WATCHING`  | Watching [name]     | Watching server activity |
| `COMPETING` | Competing in [name] | Competing in tournaments |

### Activity Properties

| Property | Description                          | Required?            |
| -------- | ------------------------------------ | -------------------- |
| `name`   | Main activity text                   | Yes                  |
| `state`  | Additional descriptive text          | No                   |
| `url`    | Streaming URL (for `STREAMING` only) | Only for `STREAMING` |

## Example Configurations

### Streaming Setup

```json
"bot": {
  "status": "ONLINE",
  "activity": {
    "name": "new courses on MineAcademy.org",
    "state": "LEARNING NEW THINGS",
    "url": "https://mineacademy.org",
    "type": "STREAMING"
  }
}
```

### Gaming Setup

```json
"bot": {
  "status": "ONLINE",
  "activity": {
    "name": "Minecraft",
    "state": "Creative Mode",
    "type": "PLAYING"
  }
}
```

### Music Setup

```json
"bot": {
  "status": "IDLE",
  "activity": {
    "name": "relaxing music",
    "type": "LISTENING"
  }
}
```

## Important Notes

::: warning Keep these points in mind for your bot's activity settings:

- **Valid Statuses:** Ensure `status` is one of `ONLINE`, `IDLE`, `DO_NOT_DISTURB`, or `OFFLINE`.
- **Valid Activity Types:** `type` must be `PLAYING`, `STREAMING`, `LISTENING`, `WATCHING`, or `COMPETING`.
- **Streaming URL:** If `type` is `STREAMING`, a valid URL (starting with `http://` or `https://`) is **required**. For all other types, `url` should not be set.
- **Restart Required:** Changes to status or activity will only apply after restarting your bot.
- **Activity Name Length:** The `name` for an activity has a maximum length of 128 characters.

Getting these settings right will ensure your bot displays its status and activity correctly!
:::
