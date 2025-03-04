# Formats

Formats are a way of styling your chat.

ChatControl enables you to take full control on how any chat message looks like. You can create unlimited amount of different chat styles and use them in all places of the plugin, not just while chatting.

You can use formats to send interactive messages with hover and click elements, such as creating an entire help system that will show a book to player when he clicks a part of a format!

## Placeholders

We support PlaceholderAPI and thousands of variables you can use in your chat messages.

You can also allow players to use certain placeholders in chat, such as "[item]". 

<div class="image-container">
  <img src="https://i.imgur.com/c1AiZ6H.gif" alt="Chat placeholders demonstration" />
</div>

See [Variables](variables).

## How Formats Work
Formats are created very simple. Each format has its own file in the formats/ folder. The name of the file is the name of the format, such as "pm-sender", which for example can then be called in another part of the plugin to format a private message shown to its sender.

Each format has unlimited amount of parts. Each part has different settings, such as hover setting, so you can hover your mouse and get different information from each part of the message.

That's it.

## Creating Our First Format
 
I really recommend you check out formats/chat.yml to see an example format. Don't worry, this is a beast of a format so don't expect to be an overnight expert on it. We start very simple, by creating a "first-format.yml" file in formats/ folder.

<div class="image-container">
  <img src="https://i.imgur.com/xtF0sVV.png" alt="First format example" />
</div>

Now we have a fully finished format we can use elsewhere, such as in [Channels](channels) by setting the "Format" key in channel configuration to "first-format".

This format has no variables and so it will always print "Hello World". It has two parts that are meaningless, so let's add some variables and effects. I also renamed the format parts to be more appropriately named.

<div class="image-container">
  <img src="https://i.imgur.com/o90ybjV.png" alt="Chat format example" />
</div>

Such format is suitable to use as a chat message. It has three parts. The Prefix part, which simply prints the player prefix (if the player has it, it will also append a space " " at the end thanks to the "+" you see at the variable end). It also shows hover information when hovering over player's prefix with your mouse, and opens the given URL when clicking on it.

The second part, PlayerName, simply shows player name and will suggest the /tell command when clicked. The last part, Message, prints player's suffix and the message he typed. 

### Configuration

Below you find every option that you can put into any part. You can create infinite amount of parts and delete those you don't need. Again, please see chat.yml for cool examples and uses.

#### "Message"
The only mandatory part option. Specifies what message this part prints to chat or console.

#### "Sender_Permission"
Optional permission that the message sender must have, for this part to be shown to players.

#### "Sender_Variable"
Syntax is: "Sender_Variable: {placeholder} value" or you can prefix the value with "!" to negate it.

This will only show the format part if the variable parsed for the message sender equals the given value.

For example: "Sender_Variable: {player_gamemode} creative" or "Sender_Variable: {player_gamemode} !creative".

#### "Sender_Condition"
A JavaScript script that must return true (boolean) for this part to show. You can use "player" variable in the script to get Bukkit Player class as the sender.

You can use variables inside that condition, but you must make the script return either true or false.

See chat.yml format for examples.

::: warning
Parsing JavaScript imposes a performance penalty.
:::

#### "Receiver_Permission"
Permission that makes the part only show to the receivers having it, regardless if the sender has it or not. Useful for showing administrators extra message information.

You can use {sender_name} and {channel_name} variables which are replaced before this condition is evaluated. See [Variables](variables#placeholderapi-syntax) article for examples.

#### "Receiver_Variable"
See "Sender_Variable" above but the variable is parsed against every receiver.

You can use {sender_name} and {channel_name} variables which are replaced before this condition is evaluated. See [Variables](variables#placeholderapi-syntaxyntax) article for examples.

#### "Receiver_Condition"
Works like sender condition but is evaluated against every receiver and so the "player" variable will change for every receiver. 

You can use {sender_name} and {channel_name} variables which are replaced before this condition is evaluated. See [Variables](variables#placeholderapi-syntax) article for examples.

::: warning
Parsing JavaScript imposes a performance penalty, especially if it's compiled for every message receiver.
:::

#### "Hover"
Simple list of texts to show when hovering over this part with mouse.

#### "Hover_Item"
A JavaScript script with "player" instance as variable that must return a valid ItemStack to show when hovering over this part (e.g. "player.getItemInHand()")

#### "Open_Url"
What website should we open when clicking on this part?

#### "Suggest_Command"
What command to put into player's command window when clicking on this part?

#### "Run_Command"
What command to run when clicking on this part? It will run for the receiving player with his permissions. Only 1 command is supported in Minecraft

#### "Insertion"
The text to insert into the chat when this component (and child components) are clicked while pressing the shift key.

#### "Copy_To_Clipboard"
The text to copy to clipboard when the user clicks this chat part. (Requires Minecraft 1.16+)

#### "Inherit"
(Limited) A name of another format from another file to import and use.

#### "Inherit_Part"
(Limited) A name of another part from the same file to import and use.

#### "Gradient"
Make the entire part in gradient colors. (Requires Minecraft 1.16+)

Syntax: &lt;from&gt; - &lt;to&gt;

Examples: "RED - GOLD" or "#123456 - #123456"

#### "Image_File"
Display an image to the left of the entire Messages of this part?

Syntax: "&lt;fileName.&lt;fileExtension&gt;&gt;"

Example: Image_File: creeper-head.png - This will pull the creeper-head.png file from images/ folder in ChatControl folder.

<div class="image-container">
  <img src="https://i.imgur.com/yn2zxcT.png" alt="Image file example" />
</div>

#### "Image_Head"
Similar to Image_File except we will display the image of the player's skin head by name of the player placed in the variable. Keep in mind this is a blocking operation!

Example: Image_Head: 'Herobrine' - will always display head avatar of Herobrine player

Example: Image_Head: '{player}' - will dynamically display message receiver's avatar

#### "Image_Url"
Similar to Image_File except you can download any images from the internet. Keep in mind this is a blocking operation!

Example: Image_Url: 'https://mywebsite.com/images/creeper.png'

Example: Image_Url: 'https://mywebsite.com/api/avatar/{player}.png'

Example: Image_Url: "https://mc-heads.net/avatar/{player_uuid}"

#### "Image_Height"
See Image_File. The Image_Height key determines how many lines in the chat the image should take. Minimum 8.

Example: 'Image_Height: 15'
Default: 8

#### "Image_Type"
See Image_File. The Image_Type key determines the type of character used to render images.

Available: BLOCK, DARK_SHADE, MEDIUM_SHADE, LIGHT_SHADE
Default: BLOCK

Example: 'Image_Type: DARK_SHADE'

Example in action: 
<div class="image-container">
  <img src="https://i.imgur.com/SuHB3JS.png" alt="Image type example" />
</div>

## TIP: Making Player Prefixes

Some people prefer to use ChatControl instead of any prefix-management or permission plugin for different ranks. 

Here's an example that works fine. To use this, place these parts in your format where you want to use it. Please study the sections above on how to use this.

```yaml
    Rank_1:
      Message: "&c[Admin] "
      Sender_Permission: "my.rank.admin"
    Rank_2: 
      Message: "&9[Mod] "
      Sender_Permission: "my.rank.mod"
    Rank_3: 
      Message: "&6[Helper] "
      Sender_Permission: "my.rank.helper"
    The_Rest: 
      Message: "&7{pl_prefix+}{player}&7: &f{message}"
```
