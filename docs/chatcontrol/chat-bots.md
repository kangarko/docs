# Chat Bots

Using [Rules](rules) and [Formats](formats) you can create different types of chat bots to help your players learn how things work on your server. You can also create advanced bots to store data.

<div class="image-container">
  <img src="https://i.imgur.com/mLZCXbZ.gif" alt="Chat bot demonstration" />
</div>

---

## Creating An Educational Bot

Let's create a simple bot that will listen to questions similar to "how to set a home" and give people a command to click on.

1. Install the following rule to rules/chat.rs. If you want to change the question, play around with it and use https://regex101.com/ to check if your regular expression (the thing after "match ") is catching the question properly:

```rs
match ^how (do|can|to)(| I| you) (set|create|place)(| a) home
then warn sethome
then deny
```

2. Then install this format into formats/sethome.yml. How formats work is described at [Formats](formats) page.

```yaml
Parts: 
  front: 
    Message: "&8[&cBot&8] &7`{player}`, click "
  clickable:
    Message: "&4[here]"
    Hover: "Click me to set your home!"
    Run_Command: "/sethome"
  end:
    Message: " &7to set a home at your location!"
```

3. Use "/chc reload", and your bot will be ready! Feel free to change anything you desire, or create multiple bots for all frequently asked questions.

## Creating A Data Saving Bot

You can create advanced bots saving and loading player data using the "ignore key", "require key" and "save key" operators. In the example below, we need to create multiple rules for four different scenarios to handle saving a simple key.

The data saved is stored permanently in your data.db or database even after server is restarted. You can use it in variables `{data_KEYNAME}` anywhere else too!

For a tutorial on how these operators work, see [Rules](rules).

```rs
# Listens to "@bot name" and prints error message if there's no key.
match ^(\@bot name)$
ignore key name
then warn &8[&dBot&8] &7Please enter your name.
then deny

# Listens to "@bot name" and prints the key.
match ^(\@bot name)$
require key name
then warn &8[&dBot&8] &7Your name is: {data_name}
then deny

# Listens to "@bot name null" and removes the key.
match ^(\@bot name) null$
save key name
then warn &8[&dBot&8] &7Removed your name.
then deny

# Listens to "@bot name X" and saves the parameter as key "name".
match ^(\@bot name)(.*)
save key name "$2".trim()
then warn &8[&dBot&8] &7Saved your name as: `{data_name}`.
then deny
```

<style>
.image-container {
  margin: 20px 0;
  text-align: center;
}

.image-container img {
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.dark .image-container img {
  border-color: var(--vp-c-divider-dark);
}
</style>