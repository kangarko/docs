# Skills

![Skills Menu](/images/boss/xcUtlFe.png)

::: tip What are Skills?
Skills are special abilities that make your bosses more dynamic and engaging, significantly enhancing player experience on your server. Each Boss can have unlimited skills, with customizable activation timing based on random delays between minimum and maximum values.
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

### 🔥 Fire
- **Description**: Sets the player on fire
- **Features**:
  - Customizable burn duration
  - Adds damage-over-time pressure to fights

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

::: warning Advanced Configuration
Each skill can be individually configured with its own activation delay, effects, and other specific parameters. See the configuration file for detailed options.
:::

## Skill Combinations

Some recommended skill combinations that work well together:

| Combat Style | Recommended Skills | Effect |
|-------------|-------------------|--------|
| Aggressive | 🔥 Fire + 🏹 Arrow + 💣 Bomb | High damage output |
| Tactical | 😵 Confuse + 🔫 Disarm + 🧲 Teleport | Control-oriented fight |
| Defensive | 👥 Minions + 💉 Steal Life + ❄️ Freeze | Sustained battles |
| Chaotic | 🚀 Throw + ⚡ Lightning + 🌀 Enderman | Unpredictable encounters |

## Extending With Custom Skills

::: info Developer API
With our developer-friendly API, creating new skills is straightforward and quick. The possibilities for custom skills are virtually limitless.
:::

For more information on creating custom skills, please visit the [Developer API](./API) page.