# Protect API

Protect is not obfuscated so you can use all of it. If you are a developer, we offer you many ways how you can extend Protect to meet your needs for even the most complex networks.

---

## Events

Currently, there is one event called `PreRuleMatchEvent` which is called when a rule is matched, before anything happens. You can customize the operator and actions there or cancel the scan.

## Manual Scan

* `Rule#filter` - Call this to manually scan a container or a player.

## Custom Shop Transaction Logging

* `Transaction#log` - **Call this to log a shop transaction from your custom plugin.**

---

## Custom Filters

To add custom database filtering in "/protect logs", you can create a new filter.

### Step 1: Create a filter class

Here is an example of a gamemode filter which will only display database logs for players in the given gamemodes. It supports multiple values: `filter:gamemode1|gamemode2`. 

::: tip Example Usage
`/protect logs items gamemode:survival`
:::

```java
package org.mineacademy.protect.filter;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.bukkit.GameMode;
import org.bukkit.command.CommandSender;
import org.mineacademy.fo.Common;
import org.mineacademy.protect.model.db.Row;
import org.mineacademy.protect.model.db.Table;

public final class FilterGamemode extends Filter {

	// The values we are filtering for. These fields are reset every time the filter is used
	private final Set<GameMode> gamemodes = new HashSet<>();

	// Make a public no arguments constructor
	public FilterGamemode() {
		super("gamemode");
	}

	// Return where the filter can be used, i.e. true means everywhere, or "return table == Table.ITEMS;" 
	// for filters used on the items table only
	@Override
	public boolean isApplicable(Table table) {
		return true;
	}

	// Return how the filter is displayed in help of the command
	@Override
	public String[] getUsages() {
		return new String[] {
				"gamemode:<gamemode|gamemode2> - Show results for the given gamemode.",
		};
	}

	// Tab complete value values for the filter
	@Override
	public Collection<String> tabComplete(CommandSender sender) {
		return Common.convert(GameMode.values(), mode -> mode.name().toLowerCase());
	}

	// Load fields when the filter is used
	// Return true if the value is valid, false otherwise
	@Override
	public boolean validate(CommandSender sender, String value) {
		this.gamemodes.clear();

		for (final String split : value.split("\\|"))
			try {
				this.gamemodes.add(GameMode.valueOf(split.toUpperCase()));

			} catch (final IllegalArgumentException ex) {
				Common.tell(sender, "No such gamemode '" + split + "'. Available: " + Common.join(GameMode.values()));

				return false;
			}

		return true;
	}

	// Filter the database entries
	// You can cast Row to Item, Transaction or Command depending on #isApplicable(Table)
	@Override
	public boolean canDisplay(Row row) {
		return this.gamemodes.contains(row.getGamemode());
	}
}
```

### Step 2: Register the filter

Register your filter in your onLoad() method (or onPluginLoad() if using Foundation):

```java
Filter.register("gamemode", new FilterGamemode());
```

### Step 3: Add Protect to softdepend

Place Protect to softdepend in your plugin.yml

```yaml
softdepend: [Protect]
```

### Step 4: Test

You are done! The filter should now load and display in `/protect <table> ?`. 

::: info
If you believe you done everything right and it still won't show, open a new issue and we are happy to help!
:::