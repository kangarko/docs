<div align="center">
  <img src="/images/boss/header.png" alt="Boss Logo"/>
</div>

<hr>

# Boss™

Boss is a premium quality Spigot plugin that adds the possibility of creating custom monsters, animals and NPCs on your server. The custom monsters are called Bosses, and it is up to you how they behave or how they spawn. 

## What are Bosses
Bosses are simply vanilla Minecraft monsters and animals with enhanced behavior and features. You can create an Ultimate Zombie Warrior, or a special pig for your in-game events! Almost any animal and monster is supported, even mobs like Snowman, Iron Golem and Bats!

## What Can Be Boss Used for
* Enhancing your Survival server's experience
* Natural spawning of Bosses in your hardcore world
* Bosses in your Monster Arenas (or directly in [CoreArena](https://builtbybit.com/resources/21619/))
* Challenging players in forests and caves
* Bosses with custom drops that unlock gates or give special keys
* And much more!

## Boss Properties

Everything is configured in game. Run `/boss menu`, open **Bosses** and click your Boss to reach the four menus below.

### Settings

| Button | What you can change |
|---|---|
| **Alias** | The name above the Boss's head and in messages. Colors and MiniMessage tags are supported, or hide it entirely |
| **Health** | The health the Boss spawns with, up to your server's `settings.attribute.maxHealth` |
| **Equipment** | Main hand, off hand, helmet, chestplate, leggings and boots, each with its own drop chance. Optionally let Minecraft fill empty slots at random |
| **Particles** | An ambient particle effect around the Boss, in one of eight [shapes](particles) |
| **Potion Effects** | Any potion effect at level 1 to 50, including ones you cannot get in Creative such as Levitation |
| **Attributes** | Whichever of the 24 vanilla attributes your mob type supports, from Attack Damage and Movement Speed to Scale and Step Height, plus a Boss-only Damage Multiplier |
| **Lightning** | Strike a harmless lightning bolt when the Boss spawns, dies, or both |
| **Riding** | Stack the Boss on other Bosses or on vanilla mobs, and choose whether the mount dies with it |
| **AI & Behavior** | Custom targeting, which entities the Boss hunts, target and wander radius, plus skin, speed and custom sounds for Player NPCs |
| **Commands** | Commands on spawn, on death, when the Boss starts targeting a player, and when its health drops below a threshold. See [Boss Commands](boss-commands) |
| **Custom Settings** | Toggles that depend on the mob type: Invulnerable, No AI, Gravity, Silent, Glowing, Collidable, Can Pickup Items, Projectile Immunity, Boss Bar, Hit Cooldown, Burns Under Sunlight, Baby, Slime Size, Phantom Size, Powered (creepers), Enderman Teleport, Enderdragon Grief and Phase, Villager Profession and Type, and more |
| **ModelEngine** | Custom models and attack animations when ModelEngine is installed |

### Skills

22 abilities you can stack on a Boss, each with its own delay, health range, messages and commands. See [Skills](skills).

### Death

| Button | What you can change |
|---|---|
| **Drops** | General drops with a chance per item, ranked rewards for the players who dealt the most damage, and whether vanilla drops still apply |
| **Dropped Experience** | A fixed amount or a range, or the Minecraft default |
| **Reinforcements** | Other Bosses or vanilla mobs that appear when this one dies |

### Spawning

| Button | What you can change |
|---|---|
| **Spawn Rules** | The six automatic spawn rules, see [Natural Spawning](natural-spawning) |
| **World Limits**, **Radius**, **Where Limits Are Applied** | How many of this Boss may live per world and around each other, and which spawn causes those limits apply to. See [Spawning Limits](spawning-limits) |
| **Region Keeping** | Keep the Boss inside the region it spawned in, and pick where it returns when it escapes |
| **Spawn Egg Appearance** | The material, name and lore of this Boss's [spawner egg](spawner-egg) |

You can also duplicate a Boss with all its settings under a new name, hand yourself its spawner egg, or kill every copy of it in loaded chunks, straight from the Boss menu.

See [Skills](skills) or [Natural Spawning](natural-spawning) for more.