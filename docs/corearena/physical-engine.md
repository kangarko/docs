---
title: Physical Engine
description: CoreArena's procedural destruction system
---

# Physical Engine

Our physical engine creates procedural destruction, making blocks fly around realistically during gameplay. Blocks not only get destroyed but also respond to gravity and explosion forces.

::: info How It Works
We use WorldEdit to save two arena states: initial snapshot (starting state) and damaged snapshot (destroyed state).
:::

## Key Features

- Prevents player escape by controlling which parts can be destroyed
- Creates unique destruction patterns in each game

An arena snapshot captures all blocks within the region at a specific moment.

::: warning Compatibility
- **FastAsyncWorldEdit**: May interfere with block physics. Test without FAWE if issues occur.
- **WorldGuard**: Ensure `-build` and `-block-place` flags are not set to "false".
:::

## Making Snapshots

![Taking Snapshot](/images/corearena/aQitSdh.png)

To create snapshots:
1. Get the Region Tool via `/ma tools`
2. Select region with right/left clicks (bottom-first, top-last corners)
3. Create snapshots as follows:

### First Snapshot

::: tip Initial State
Take this before any damage. Arena should be in pristine condition.
:::

1. Type `/ma menu <yourArena>` → click "Snapshot" → "Take the First Snapshot"

### Second Snapshot

::: warning Damaged State
Take after destroying the arena (use Creative mode with Nuker feature for efficient destruction).
:::

1. Use same menu as above, but select "Last Snapshot" option