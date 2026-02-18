# Vanilla Commands Overwriting ChatControl's Commands

Vanilla commands can override plugin commands when they share the same name (e.g. `/tell`). Fix this by overriding them in `commands.yml` or using command namespacing (`/chatcontrol:msg` etc).

::: tip
ChatControl commands follow this syntax: `/chatcontrol:Command`, such as `/chatcontrol:msg` etc.
:::

If you need help with other command issues, see [common-issues with commands](common-issues#commands-section).

## Step-by-Step Guide

### Step 1. Find The Commands Namespacing

Open `settings.yml` and look at the command aliases. For example, the `Private_Messages` section and its command aliases:
```yml
  # The tell command aliases.
  # EDIT AS YOU WISH BUT THERE MUST BE AT LEAST ONE ALIAS
  Tell_Aliases: [tell, w, m, t, pm, message, msg, whisper]
```

Based on these settings, the corresponding namespaced commands:
```
/chatcontrol:tell
/chatcontrol:w
/chatcontrol:m
/chatcontrol:t
/chatcontrol:pm
/chatcontrol:message
/chatcontrol:msg
/chatcontrol:whisper
```

### Step 2. Open `commands.yml` File

Open `commands.yml` in your server root directory (same location as `server.jar`).

### Step 3. Add Overrides

Add command aliases under `aliases` using the namespaced commands from Step 1.

Example of `commands.yml` setup based on the `Private_Messages.Tell_Aliases` settings in ChatControl:

```yml
aliases:
  tell:
  - chatcontrol:tell $1-
  w:
  - chatcontrol:w $1-
  m:
  - chatcontrol:m $1-
  t:
  - chatcontrol:t $1-
  pm:
  - chatcontrol:pm $1-
  message:
  - chatcontrol:message $1-
  msg:
  - chatcontrol:msg $1-
  whisper:
  - chatcontrol:whisper $1-
```

### Step 4. Restart The Server

Restart the server for changes to take effect.