# Custom Tab Completion

Making your custom commands you created in rules/commands.rs show via tab completion is easy in ChatControl 11.

Thanks to @TheIntolerant for contributing!

## Solution 1: Use /dummy in the ``commands.yml``

### Step 1)
Open the ``commands.yml`` file in the root/server directory and use the "/dummy" command to route your custom command OR add the actual command.

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

The "/dummy" command is provided by ChatControl and does NOTHING! This command was created to allow people to register commands in this file while using ChatControl rules to manage the command itself.


#### Explanation for ``/staffchat`` command
In the first example, ``/staffchat`` command, uses "/dummy" which is a registered command by ChatControl that does nothing. This is useful when you want ChatControl to manage how that command functions using rules. See below for an example of how you could do this. 

#### Explanation for ``/adminchat`` command
In the second example, we simply redirect typing ``/adminchat`` to ``/channel send admin <message>``  
You don't need to make any other changes unless you'd like ChatControl to add additional functionality to this command.

### Step 2) Create Command Rule _(optional)_

::: warning
**You can skip this step if you have the actual command in ``commands.yml``.**
:::

Based on the setup in Step 1, we are making rules for the ``/staffchat`` command as it is using the "/dummy" command in the commands.yml file and requires rules for the command to function.

Add your specific rules to ``/plugins/ChatControl/rules/command.rs``  
Which allows ChatControl to manage how this command functions, see below for an example.

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
**Failure to add ``then deny`` will result in the command from ``commands.yml`` also being executed, however, this isn't an issue when using /dummy in commands.yml.**
:::

---

## Solution 2: Use a third-party plugin.

Use a third-party plugin, which can "register commands" or create "custom commands". The level of complexity will depend on the plugin you choose to use. Usually, these plugins should register the commands making them work with tab completion! However, it will be up to you to work out if a plugin does this or not by testing it yourself.

For example, [CustomCommands](https://www.spigotmc.org/resources/customcommands-new-1-19-tab-completion-in-game-configs-edition.14363/). Please note, this is developed by someone else! If you need help you will need to contact them!

<style>
code {
  font-family: monospace;
}
</style>


