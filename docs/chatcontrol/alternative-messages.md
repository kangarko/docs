# Alternative Messages

In additional to sending messages to chat in the typical boring way, we offer numerous possibilities to spice things up and give your server a fresh breath!

The following information mostly applies to localization/messages_en.yml, but you'll also find it working many other places where you send messages, throughout the plugin.

<div class="image-container">
  <img src="/images/chatcontrol/mHUoKfq.gif" alt="Action bar message demonstration" />
</div>

## Multiline Messages

In your localization file, you can turn any message into a list to send it over multiple lines:

<div class="image-container">
  <img src="/images/chatcontrol/20nG5lS.png" alt="Multiline message example" />
</div>

Outside of localization file, and for those places where this does not work, you can use the` \n` operator, or this syntax:

<div class="image-container">
  <img src="/images/chatcontrol/Tpeq7Bs.png" alt="Alternative multiline syntax" />
</div>

In [Messages](messages), you can use a syntax like that:

<div class="image-container">
  <img src="/images/chatcontrol/Z8imvC2.png" alt="Messages multiline syntax" />
</div>

## Centering Messages With `<center>`

Many places you can simply put `<center>` in front of a message to make it automatically centered. Make sure to surround the message with "" or '' quotes:

<div class="image-container">
  <img src="/images/chatcontrol/5p68n9k.png" alt="Centered message example" />
</div>

## Sending Messages With `<actionbar>, <toast>, <title> and <bossbar>`

You can also prefix your messages using one of the prefixes above to send it through the following means:

* Action Bar (MC 1.8.8+) prefixing your message with `<actionbar>`
* Boss Bar (MC 1.9+) prefixing your message with `<bossbar>`
* Toast (MC 1.12+) prefixing your message with `<toast>`
* Title (MC 1.7.10+) - prefixing your message with `<title>`. To send title and subtitle, split the message with "|"

::: tip
At this time, further customizations such as boss bar color/style, toast icon or title speeds are not available.
:::

## Image Message
Currently, if you drop png or jpg images to your images/ folder in ChatControl, you can show them using "/chc announce image" command. Combining this with the | letter to make multiline message, you can end up with excellent messages like these:

<div class="image-container">
  <img src="/images/chatcontrol/PQvSmNj.png" alt="Creeper image message example" />
</div>

## [JSON]

Finally, for the geeks out there, you can start a message with [JSON] to send raw json code to the player. See [JSON](JSON) for how it's done.