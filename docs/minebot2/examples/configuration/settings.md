---
title: Settings Example
description: This is an example for settings config file.
---

# Settings Example

Below you'll find an example main bot configuration.

[Click here for guide](../../guides/configuration/settings.md)

```markdown
# Bot Token
token: "paste your bot token here"

# Guild Information
default_guild: paste the numerical ID your server here

# Supported Providers: [mongodb, sqlite]
database:
  provider: "mongodb"
  collection: "mineacademy"
  uri: "mongodb+srv://egehan:PASSWORD@cluster0.yvueakw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Server RCON Information
server:
  ip: "0.0.0.0"
  port: 25575
  password: "test"

# Embed Color (Hex)
embedColor:
  success: "#00ff00"
  error: "#ff0000"
```