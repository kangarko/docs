# Signs

There is a great range of signs you can you within the CoreArena plugin. Here are all of them.

### How to create?
Simply place a new sign and write the text as shown on the signs below.

<style>
.minecraft-sign {
  width: 220px;
  background-color: #755441;
  color: #fff;
  border: 4px solid #513a2c;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
  font-family: monospace;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  position: relative;
}

.minecraft-sign:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(0,0,0,0.1),
    rgba(0,0,0,0.1) 2px,
    transparent 2px,
    transparent 10px
  );
  pointer-events: none;
}

.minecraft-sign-line {
  margin: 5px 0;
  width: 100%;
  min-height: 18px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 2px;
}

.sign-description {
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>

## Join sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[arena]</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Joins the player to an arena.<br>
  <strong>Note</strong>: Use the first alias in Command_Aliases from your settings.yml (by default "arena"), wrapped in [].
</div>

## Leave sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[leave]</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Kicks the player out of an arena.
</div>

## Class sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[class]</div>
  <div class="minecraft-sign-line">Warrior</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Gives the player in lobby a class instantly.<br>
  <strong>Second line:</strong> The class name (e.g., "Warrior", "Archer", etc.)
</div>

## Classes sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[classes]</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Opens the class selection menu.
</div>

## Power sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[power]</div>
  <div class="minecraft-sign-line">start</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a redstone power from the sign itself at a certain event.<br>
  <strong>Second line:</strong> When to power the sign? Available options: lobby, start, phase, end
</div>

## Rewards sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[rewards]</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Opens the reward selection menu.
</div>

## Upgrade sign

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[upgrade]</div>
  <div class="minecraft-sign-line">Strength</div>
  <div class="minecraft-sign-line">3</div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Gives an upgrade to the player.<br>
  <strong>Second line</strong>: Upgrade name<br>
  <strong>Third line</strong>: Level<br>
</div>