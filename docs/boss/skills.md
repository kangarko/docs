# Skills

![Skills Menu](/images/boss/xcUtlFe.png)

::: tip What are Skills?
Skills are special abilities that make your bosses dynamic and engaging. Each Boss can have unlimited skills with customizable activation delays.
:::

## Available Skills

Below is a comprehensive list of available skills that can be assigned to bosses:

### 🏹 Arrow
- **Description**: Surprises the player by shooting an arrow at them
- **Features**:
  - Can be configured with custom potion effects
  - Works with any mob type, not just skeletons

### 💣 Bomb
- **Description**: Spawns TNT above the player
- **Features**:
  - Customizable height and fuse duration
  - Option to disable block destruction for safety

### 😵 Confuse
- **Description**: Disorients the player with blindness and random rotation
- **Features**:
  - Customizable potion effect duration and intensity
  - Creates challenging combat scenarios

### 🔫 Disarm
- **Description**: Forces the player to drop their currently held item
- **Features**:
  - Creates tactical combat situations
  - Makes players improvise during fights

### 🌀 Enderman
- **Description**: Boss teleports to a random player's location
- **Features**:
  - Configurable search radius for potential targets
  - Creates surprising encounters

### ☄️ Fireball
- **Description**: Launches a ghast-like fireball at the player
- **Features**:
  - Adjustable explosion power
  - Option to disable block destruction

### ❄️ Freeze
- **Description**: Temporarily prevents player movement
- **Features**:
  - Customizable duration
  - Server-friendly implementation (no lag)

### ⚡ Lightning
- **Description**: Strikes the player with lightning from the sky
- **Features**:
  - Visual and sound effects
  - Causes fire and damage

### 👥 Minions
- **Description**: Boss spawns reinforcement mobs to assist in combat
- **Features**:
  - Configurable minion types and amounts
  - Creates more complex combat scenarios

### 💉 Steal Life
- **Description**: Boss absorbs a portion of the player's health
- **Features**:
  - Self-healing mechanism for bosses
  - Makes prolonged fights increasingly difficult

### 🧲 Teleport
- **Description**: Pulls distant players closer to the boss
- **Features**:
  - Adjustable radius and number of affected players
  - Prevents players from staying at a safe distance

### 🚀 Throw
- **Description**: Launches the player into the air
- **Features**:
  - Customizable launch power
  - Creates opportunities for fall damage

### 💊 Potions
- **Description**: Applies potion effects to the targeted player
- **Features**:
  - Configure multiple potion effects via the GUI menu
  - Customize type, duration, and amplifier for each effect
  - Overrides existing effects of the same type

### 🔥 Ignite
- **Description**: Sets the targeted player on fire for a configurable duration
- **Features**:
  - Adjustable burn duration (1 second to 3 minutes)
  - Standard Minecraft fire damage mechanics apply

### 🖥️ Commands
- **Description**: Run custom console commands at intervals without a target player
- **Features**:
  - No target player context — cannot use `{player}` variable
  - Commands run from the server console
  - Useful for global effects or broadcasts

### 🎯 Commands Target
- **Description**: Run custom commands for the player the Boss is currently targeting
- **Features**:
  - Full player context — `{player}` variable and `tell` commands work
  - Commands can run as console or as the player

### 📡 Commands Nearby
- **Description**: Run custom commands for all nearby players within a radius
- **Features**:
  - Configurable radius (1-50 blocks)
  - Max players limit (-1 for all nearby players)
  - Players sorted by distance, closest first

::: warning Advanced Configuration
Each skill can be individually configured with its own activation delay, effects, and parameters. See the configuration file for detailed options.
:::

## Extending With Custom Skills

::: info Developer API
You can create custom skills with our API. See the [Developer API](./API) page.
:::