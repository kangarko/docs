---
title: Settings Example
description: This is an example for settings config file.
---

# Settings Example

Below you'll find an example main bot configuration.

[Click here for guide](../../guides/configuration/settings.md)

```markdown
# Bot Token
token: "UYVwMDIwUnQyOTU1NDA2NDI2OI.NFpiYn.oiO2zlTUjJPGvc-CoMxTBxGozZH4Mb3sNqsip4"

# Guild Information
default_guild: 1162063738841616474

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