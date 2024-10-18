---
title: Account Linking Config Example
description: This is an example for link account config.
---

# Link Account Example

Below you'll find an example for account linking configuration.

[Click here for guide](../../../guides/configuration/systems/link_account.md)

```markdown
code_length: 12 # character(s)

reward_mode: "both" # none, role, item, both

reward:
  role: 1173046888820375552 # role id
  item: # give command(s)
    - "give {player} minecraft:iron_ingot 64"
    - "give {player} minecraft:diamond 32"
```