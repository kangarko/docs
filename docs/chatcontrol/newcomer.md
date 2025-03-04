# Newcomer

You can make ChatControl behave differently for players that spend less than a configured time on your server, and/or is located on a certain world.

---

Newcomers can have the following attributes:

* Different permissions
* Get more warning points for breaking rules (stops new players who just join to spam)
* Have chatting or seeing chat disabled
* Have certain commands disabled (blacklist or whitelist are both supported)

You can configure everything in the Newcomer section of settings.yml.

<div class="image-container">
  <img src="https://i.imgur.com/mzUFFcW.png" alt="Newcomer settings in settings.yml" />
</div>

## Newcomer Message Of The Day

You can also send different welcome message to newcomers using `Motd.Format_Motd_Newcomer` option from settings.yml.

<div class="image-container">
  <img src="https://i.imgur.com/YPucDl4.png" alt="Newcomer MOTD configuration" />
</div>

## Newcomer Variable

The `{player_newcomer}` variable returns true or false. You can so use it in JavaScript conditions to show a format in [Formats](formats) or custom [JavaScript Variables](javascript-variables).
