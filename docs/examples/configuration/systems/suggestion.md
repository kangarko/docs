---
title: Suggestion Config Example
description: This is an example for suggestion config.
---

# Suggestion Example

Below you'll find an example for suggestion system configuration.

[Click here for guide](../../../guides/configuration/systems/suggestion.md)

```markdown
text:
  min: 10 # character(s)
  max: 1000 # character(s)

log:
  channel: 1163899262044745790
  notification: true # Send a notification when suggestion accepted or denied
  color: "#00ff00"

approve:
  channel: 1267509345076117566

deny:
  channel: 1267509345076117566

reward_mode: "both" # none, role, item, both

reward:
  role: 1173046888820375552 # role id
  item: # give command(s)
    - "give {player} minecraft:golden_apple 1"
```