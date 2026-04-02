# API

Boss contains easy-to-understand developer API that allows you to find and track Bosses, add or remove Bosses, or edit custom skills

## Checking if entity is a Boss.
Simply check if the entity has a "Boss_V4" scoreboard tag (or check for metadata of the same tag name if you are on a legacy Minecraft version).

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

## All API Classes 
![img](/images/boss/FE9owGu.png)

Where should you start? Use BossAPI to access main API calls and BossSkillRegistry to add custom skills.

## Adding New Skills
Creating new skills is a simple process that takes two steps. Firstly, you need to create the skill itself. Then, you need to register it within the plugin. **They will appear in the Boss' menu automatically.**


### Registering a Skill
When your plugin enables, register the skill inside of the Boss plugin:

```java
BossSkill.registerSkill("YourSkillUniqueName", YourSkillClass.class);
```


### Creating a new Skill
Please take a look at the example skill to understand how a Skill should be made. We use open-source library Foundation available in our main repository.

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
import org.mineacademy.fo.collection.SerializedMap;
import org.mineacademy.fo.conversation.SimpleDecimalPrompt;
import org.mineacademy.fo.menu.Menu;
import org.mineacademy.fo.menu.button.Button;
import org.mineacademy.fo.menu.button.StartPosition;
import org.mineacademy.fo.menu.button.annotation.Position;
import org.mineacademy.fo.menu.model.ItemCreator;
import org.mineacademy.fo.model.HookManager;
import org.mineacademy.fo.model.RangedSimpleTime;
import org.mineacademy.fo.remain.CompMaterial;
import org.mineacademy.fo.remain.CompSound;

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
		return RangedSimpleTime.parse("45 seconds - 2 minutes");
	}

	@Override
	public boolean execute(LivingEntity entity) {
		final List<Player> found = new ArrayList<>();

		for (final Entity nearby : entity.getNearbyEntities(this.radius, this.radius - 1, this.radius))
			if (nearby instanceof Player && !HookManager.isNPC(nearby))
				found.add((Player) nearby);

		if (!found.isEmpty()) {
			Collections.shuffle(found);

			final Player target = found.get(0);

			if (this.getBoss().canTarget(target)) {
				entity.teleport(target.getLocation());
				CompSound.ENDERMAN_TELEPORT.play(target);

				this.sendSkillMessage(target, entity);
				return true;
			}
		}

		return false;
	}

	@Override
	public String[] getDefaultMessage() {
		return new String[] {
				"I was lonely far from you so I wanted to say hey",
				"Say hey! {boss} has &cteleported itself to you &7!",
				"I thought we were friends, so here I come!"
		};
	}

	@Override
	public ItemStack getIcon() {
		return ItemCreator.of(
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
		final SerializedMap map = new SerializedMap();

		map.put("Radius", this.radius);

		return map;
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

			this.radiusButton = Button.makeSimple(ItemCreator.of(
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
									// see getFailedValiationText
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
