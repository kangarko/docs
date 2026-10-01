# Sound Notify

We can allow players to mention others in the chat: "Hello @kangarko!" and play a sound to the player who is mentioned.

You can specify the cooldown between each mention, the sound and the color. You can also restrict this feature only if the player is afk, or prefixed with a certain string like "@".

<div class="image-container">
  <img src="/images/chatcontrol/h0lhv40.gif" alt="Sound notify demonstration" />
</div>

## Setting Up Sound Notify

Sound notify requires channels. To configure it, open Sound_Notify sections of settings.yml:

For a resource pack sound, set `Sound_Notify.Sound` to `custom:custompack:message 1F 1F`, replacing `custompack:message` with the sound's identifier. The same syntax works for `Private_Messages.Sound`. Players need the resource pack to hear it. Set the sound to `none` to disable it.

<div class="image-container">
  <img src="/images/chatcontrol/mmqpo5o.png" alt="Sound notify configuration" />
</div>
