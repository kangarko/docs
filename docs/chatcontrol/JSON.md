# JSON

JSON stands for **J**ava**S**cript **O**bject **N**otation. When exchanging data between you and the server, or storing data in a database, the data can only be text. JSON is widely used for storing various information, for example about players or server events. It is easy for humans to read and write and easy for machines to parse and generate. 
 
Minecraft uses JSON when handling chat. In addition to the plain chat message, JSON allows other (to you invisible) data to be transferred as well. That way, you may view fancy chat components such as hover text or item specific information. ChatControl aims to fully support JSON and offers several way of using it.

::: tip
To create JSON, you can use this [JSON generator](http://minecraftjson.com). It is a very handy tool that will produce interactive chat messages, for example with elements displaying on clicking or hovering on the message.
:::

## JSON in formats
Starting ChatControl 11, we no longer supports JSON in format parts in favor of increased performance. Please use [MiniMessage format](https://webui.advntr.dev/) which supports all component features.

## JSON in .yml Files
Files such as settings.yml or localization files support JSON just where a normal message would be. There are two ways of using it.

::: warning
If you need to use legacy colors, use the § character because the & will not work anymore.
:::

**a)** Prepending the message with `[JSON]` and then write JSON code directly. 

::: tip
Pay attention to brackets! If you use double brackets " " inside the JSON, use single brackets ' ' in the entire expression (see the example below).
:::

```yaml
Warn_Message: '[JSON] {"text": "Hello World"}'
```

**b)** Using multiple lines with the '|-' line delimiter, placing the `[JSON]` prefix on one line and the JSON code itself on the rest. An example:

```yaml
Example_Message: |-
  [JSON]
  {"text": "Hover Me","hoverEvent": {"action": "show_text","value": {"text": "Hey there!"}}}
```

## JSON in rules
You can use `then warn <format>` operator and reference to a format without the need for raw JSON.

For raw JSON, due to server's limitations, you can use the 'then console' operator and send a 'tellraw' command to the player:

```rs
match ^This area is now protected.
dont verbose
then console tellraw {player} {"text": "This area is now protected."}
```

<style>
code {
  font-family: monospace;
}
</style>