# Custom Commands

Commands like '/tag nick' are long and can be annoying. In the following example, I illustrate how you can allow the players to just type '/nick' instead.

You can find and uncomment this code like the example below in rules/command.rs and learn more about how it works at [Rules](rules).

```rs
# -----------------------------------------------------------------------------------------------
# Create a /nick command that executes a longer /tag nick command.
# -----------------------------------------------------------------------------------------------

# Create a simple alias for /tag nick to just type /nick instead, using two rules.
# This rule only sends the usage message, and the rule below actually forwards the command.
match ^\/nick$
require perm nick.set.own &cInsufficient permission ({permission}).
then warn &cDescription: Sets your own nickname.
then warn &cUsage: /nick <nick>
then deny

# An example used for /nick command alias with the help of group matching (see the $2), it will
# replace what players type in /nick - that is pulled from the (.*) part
match ^\/nick (.*)
require perm nick.set.own &cInsufficient permission ({permission}).
then command tag nick $1
then deny
```

Using our rules you can literally create unlimited amount of aliases, simple and complex, the way you want it and how you need it. Check out our [Rules](rules) section for how they work, and see the defaults in rules/ for tons of examples.

## On Using Commands.yml

::: tip
Some people prefer Bukkit's way of creating command aliases. This is more limited but will work just fine, here's a tutorial on it: https://bukkit.fandom.com/wiki/Commands.yml
:::

<style>
code {
  font-family: monospace;
}
</style>