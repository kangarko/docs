# Custom Tab Completion

Making custom commands from rules/commands.rs show via tab completion.

Thanks to @TheIntolerant for contributing!

## Solution 1: Use /dummy in `commands.yml`

### Step 1)
Open `commands.yml` in your server root directory and route your custom command using `/dummy` or the actual command:

```yml
command-block-overrides: []
ignore-vanilla-permissions: false
aliases:
  # First example
  staffchat:
  - dummy $1-
  # Second example
  adminchat:
  - channel send admin $1-
```

The `/dummy` command is provided by ChatControl and does nothing — it exists to let you register commands in this file while using ChatControl rules to handle the logic.

In the first example, `/staffchat` uses "/dummy" which is useful when you want ChatControl to manage how that command functions using rules (see Step 2 below).

In the second example, `/adminchat` simply redirects to `/channel send admin <message>` — no rules needed.

### Step 2) Create Command Rule _(optional)_

Skip this step if you used the actual command in `commands.yml` instead of `/dummy`.

For the `/staffchat` example, add rules to `rules/command.rs`:

```
# If the user is WRITING in the STANDARD channel, this rule
# will switch the user to the STAFF channel.
match ^[/]staffchat\b
dont verbose
then warn `{prefix_success}` You are now writing to the admin channel.
ignore channel staff write
then command channel join admin write
then deny

# If user is WRITING in the STAFF channel, this rule
# will switch the user to the STANDARD channel.
match ^[/]staffchat\b
dont verbose
then warn `{prefix_success}` You are no longer writing to the admin channel.
require channel staff write
then command channel join standard write
then deny
```

::: warning
Without `then deny`, the command from `commands.yml` will also execute (not an issue when using `/dummy`).
:::

---

## Solution 2: Use a third-party plugin

Use a plugin that registers custom commands, such as [CustomCommands](https://www.spigotmc.org/resources/customcommands-new-1-19-tab-completion-in-game-configs-edition.14363/). Test tab completion yourself as it depends on the plugin.

