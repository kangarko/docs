# API

Boss ships a small developer API so you can find and track Bosses, create or remove them, listen to what happens to them, and add your own skills.

## Importing the API

Since Boss 4, we no longer host the plugin publicly. Just use the downloaded JAR as a systemPath dependency.

If you are a developer, please fill the upgrade form selecting "I made a contribution" and a link to your BuiltByBit profile here: https://mineacademy.org/boss/#upgrade and we'll add you.

````xml
<dependency>
  <groupId>org.mineacademy</groupId>
  <artifactId>Boss</artifactId>
  <version>1</version>
  <scope>system</scope>
  <systemPath>C:/path/to/your/server/plugins/Boss.jar</systemPath>
</dependency>
````

Add `Boss` to `softdepend` in your plugin.yml so it loads first.

## BossAPI

`org.mineacademy.boss.api.BossAPI` is the entry point. Every method is static.

| Method | Returns |
|---|---|
| `createBoss(EntityType type, String name)` | The new `Boss`. The API does not validate the name, it only fails if one is already loaded. The in-game prompt limits names to English letters and numbers, 3 to 24 characters |
| `removeBoss(String name)` | Deletes the Boss definition from disk |
| `isBoss(Entity entity)` | Whether the entity is a spawned Boss |
| `isBoss(ItemStack item)` | Whether the item is a Boss spawner egg |
| `getBoss(Entity entity)` | The `SpawnedBoss`, or null |
| `getBoss(ItemStack item)` | The `Boss` behind a spawner egg, or null |
| `getBoss(String name)` | The `Boss` by its file name, or null |
| `getBosses()` | Every installed `Boss` |
| `getBosses(World world)` | Every alive `SpawnedBoss` in that world |
| `getValidTypes()` | Every `EntityType` a Boss can be made from |

`SpawnedBoss` gives you `getBoss()`, `getEntity()`, `getName()`, `getUniqueId()`, `getSpawnLocation()`, `getSpawnRegion()` and `getSpawnRuleName()`.

To spawn one yourself, call `boss.spawn(location, BossSpawnReason.CUSTOM)`. It returns a `Tuple<BossSpawnResult, SpawnedBoss>`, where the result is one of `SUCCESS`, `FAIL_LIMIT`, `FAIL_API_CANCELLED`, `FAIL_CANCELLED` or `FAIL_MISSING_CITIZENS`.

### Checking if an entity is a Boss

Use `BossAPI.isBoss(entity)`. If you cannot depend on Boss, read the `boss:boss_v4` string from the entity's persistent data container, it holds the Boss name. On Minecraft older than 1.14 that data lives in the plugin's `metadata.yml` instead.

## Events

All three live in `org.mineacademy.boss.api.event`.

| Event | Cancellable | Getters |
|---|---|---|
| `BossSpawnEvent` | yes | `getBoss()`, `getEntity()`, `getSpawnReason()` |
| `BossDeathEvent` | no | `getBoss()`, `getEntity()`, `getDrops()`, `getDeathEvent()` |
| `BossEggEvent` | yes | `getBoss()`, `getPlayer()`, `getAction()` |

`getDrops()` on `BossDeathEvent` is the live vanilla drop list from the underlying `EntityDeathEvent`. Boss has already dropped its own custom items, equipment and player rewards by then, and those never enter this list.

`BossSpawnReason` is one of `EGG`, `COMMAND`, `RIDING`, `REINFORCEMENTS`, `SLIME_SPLIT`, `SPAWN_RULE`, `DISPENSE` or `CUSTOM`.

## Adding New Skills

Two steps: write the skill, then register it. It shows up in the Boss menu automatically.

### Registering a Skill

When your plugin enables:

```java
BossSkill.registerSkill("YourSkillUniqueName", YourSkillClass.class);
```

The name is also the YAML key under `Skills:` in each Boss file, so keep it stable.

### Writing a Skill

Extend `BossSkill` and give the class a **private no-args constructor**. Skills may not implement `Listener`, put your event handlers in a separate class.

You get these for free, no code needed: Delay, Messages, Commands, Health Range and Stop More Skills. Two things are on you: call `sendSkillMessage(target, boss)` and `executeSkillCommands(target, boss)` when the skill succeeds, otherwise messages and per-skill commands silently do nothing.

Return `false` from `execute` when the skill decided not to fire. The delay is not consumed and Boss retries a second later.

Two helpers on `BossSkill` are worth knowing:

- `findNearestTarget(LivingEntity boss, double range)` returns the closest player Boss is allowed to hit, or null
- `runOnBoss(LivingEntity boss, int intervalTicks, int totalRuns, IntConsumer task)` runs a repeating effect on the Boss's own region thread, which is what keeps it Folia-safe, and stops if the Boss dies

To act only on the player the Boss is fighting, extend `AbstractTargetSkill` instead and implement `execute(Player target, LivingEntity boss)`. It handles the target lookup, the `Skills.Target_Range` check and the `executeSkillCommands` call, leaving you only `sendSkillMessage`.

Here is the shipped Enderman skill, with its default messages inlined rather than pulled from our locale file.

```java
package org.mineacademy.boss.skill;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.bukkit.conversations.ConversationContext;
import org.bukkit.entity.Entity;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import org.mineacademy.boss.model.Boss;
import org.mineacademy.fo.collection.SerializedMap;
import org.mineacademy.fo.conversation.SimpleDecimalPrompt;
import org.mineacademy.fo.menu.Menu;
import org.mineacademy.fo.menu.button.Button;
import org.mineacademy.fo.menu.button.StartPosition;
import org.mineacademy.fo.menu.button.annotation.Position;
import org.mineacademy.fo.menu.model.ItemCreator;
import org.mineacademy.fo.model.RangedSimpleTime;
import org.mineacademy.fo.remain.CompMaterial;
import org.mineacademy.fo.remain.CompSound;
import org.mineacademy.fo.remain.Remain;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class SkillEnderman extends BossSkill {

	/**
	 * How many blocks away from the Boss to look for?
	 */
	private int radius;

	@Override
	public RangedSimpleTime getDefaultDelay() {
		return RangedSimpleTime.fromString("45 seconds - 2 minutes");
	}

	@Override
	public boolean execute(LivingEntity boss) {
		final List<Player> found = new ArrayList<>();

		for (final Entity nearby : boss.getNearbyEntities(this.radius, this.radius - 1, this.radius))
			if (nearby instanceof Player)
				found.add((Player) nearby);

		if (!found.isEmpty()) {
			Collections.shuffle(found);

			final Player target = found.get(0);

			if (Boss.canTarget(target)) {
				Remain.teleport(boss, target.getLocation());
				CompSound.ENTITY_ENDERMAN_TELEPORT.play(target);

				this.sendSkillMessage(target, boss);
				this.executeSkillCommands(target, boss);

				return true;
			}
		}

		return false;
	}

	@Override
	public String[] getDefaultMessage() {
		return new String[] {
				"I was lonely far from you so I wanted to say hey",
				"Say hey! {boss} has <red>teleported itself to you <gray>!",
				"I thought we were friends, so here I come!"
		};
	}

	@Override
	public ItemStack getIcon() {
		return ItemCreator.from(
				CompMaterial.ENDER_PEARL,
				"Enderman",
				"",
				"Boss will teleport itself",
				"to a random player.")
				.make();
	}

	@Override
	public void readSettings(SerializedMap map) {
		this.radius = map.getInteger("Radius", 5);
	}

	@Override
	public SerializedMap writeSettings() {
		return SerializedMap.fromArray("Radius", this.radius);
	}

	@Override
	public Menu getMenu(Menu parent) {
		return new SkillSettingsMenu(parent);
	}

	/* ------------------------------------------------------------------------------- */
	/* Classes */
	/* ------------------------------------------------------------------------------- */

	private class SkillSettingsMenu extends Menu {

		@Position(start = StartPosition.CENTER)
		private final Button radiusButton;

		SkillSettingsMenu(Menu parent) {
			super(parent);

			this.setSize(9 * 3);
			this.setTitle("Enderman Skill Settings");

			this.radiusButton = Button.makeSimple(ItemCreator.from(
					CompMaterial.ENDER_PEARL,
					"Radius",
					"",
					"Current: &f" + SkillEnderman.this.radius,
					"",
					"How many blocks around",
					"should Boss look for players",
					"to teleport itself to?"),

					player -> {
						new SimpleDecimalPrompt("Enter how many blocks around the Boss will look for players. Current: '" + SkillEnderman.this.radius + "'.") {

							@Override
							protected boolean isInputValid(ConversationContext context, String input) {
								try {
									final int newRadius = Integer.parseInt(input);

									if (newRadius > 0 && newRadius <= 50) {
										SkillEnderman.this.radius = newRadius;
										SkillEnderman.this.save();

										return true;
									}

								} catch (final Throwable t) {
									// see getFailedValidationText
								}

								return false;
							}

							@Override
							protected String getFailedValidationText(ConversationContext context, String invalidInput) {
								return "Invalid radius, enter a whole number between 1-50";
							}

						}.show(player);
					});
		}

		@Override
		public Menu newInstance() {
			return new SkillSettingsMenu(this.getParent());
		}
	}
}
```

`SerializedMap` and the menu classes come from Foundation, our open-source library bundled inside the plugin JAR.
