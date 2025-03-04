# Special Chests

Winter adds several types of special chests that can be used for events, gifts, and timed rewards. These chests are perfect for seasonal events, daily rewards, or special occasions on your server.

::: tip Chest Sign Creation
To place a sign on a chest, place the chest first, then place a sign directly on it by holding SHIFT while right-clicking with the sign.
:::

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

---

## Gift Chests

Gift chests allow players to create lootable chests for other players. They're great for leaving gifts or running community events.

### Public Gift Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Gift]</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a public gift chest that can be looted by anyone with the <code>winter.chest.gift</code> permission.<br>
  <strong>Note</strong>: Only the first line is required - <code>[Gift]</code>. Leave the other lines empty.
</div>

### Private Gift Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Gift]</div>
  <div class="minecraft-sign-line">playername1</div>
  <div class="minecraft-sign-line">playername2</div>
  <div class="minecraft-sign-line">playername3</div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a private gift chest that can only be looted by the specified players.<br>
  <strong>Lines 2-4</strong>: Usernames of players who should have access (up to 3 players).<br>
  <strong>Permission</strong>: Players still need the <code>winter.chest.gift</code> permission.
</div>

---

## Dated Chests

Dated chests are only available during specific time periods. They are "infinite" - they don't lose items when looted, but each player can only loot them once.

### Daily Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Dated]</div>
  <div class="minecraft-sign-line">24.12</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a chest that is only accessible on December 24th.<br>
  <strong>Second line</strong>: The date in DD.MM format.<br>
  <strong>Permission</strong>: Players need the <code>winter.chest.dated</code> permission.
</div>

### Time-Restricted Daily Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Dated]</div>
  <div class="minecraft-sign-line">24.12</div>
  <div class="minecraft-sign-line">17:00-20:00</div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a chest that is only accessible on December 24th between 5PM and 8PM.<br>
  <strong>Second line</strong>: The date in DD.MM format.<br>
  <strong>Third line</strong>: Time range in HH:MM-HH:MM format.
</div>

### Date Range Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Dated]</div>
  <div class="minecraft-sign-line">25.12-26.12</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a chest that is accessible between December 25th and 26th (inclusive).<br>
  <strong>Second line</strong>: Date range in DD.MM-DD.MM format.
</div>

### Time-Restricted Date Range Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Dated]</div>
  <div class="minecraft-sign-line">25.12-26.12</div>
  <div class="minecraft-sign-line">18:00-19:00</div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a chest that is accessible on December 25th and 26th, but only between 6PM and 7PM each day.<br>
  <strong>Second line</strong>: Date range in DD.MM-DD.MM format.<br>
  <strong>Third line</strong>: Time range in HH:MM-HH:MM format.
</div>

---

## Timed Chests

Timed chests can be looted repeatedly, but players must wait a specified duration between each open. They can be set to unlimited uses or a set number of uses per player.

### Cooldown Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Timed]</div>
  <div class="minecraft-sign-line">60m</div>
  <div class="minecraft-sign-line"></div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a chest that can be looted repeatedly, with a 60-minute cooldown between loots.<br>
  <strong>Second line</strong>: Cooldown duration. Examples: <code>60m</code> (60 minutes), <code>24h</code> (24 hours), <code>20s</code> (20 seconds).<br>
  <strong>Permission</strong>: Players need the <code>winter.chest.timed</code> permission.
</div>

### Limited Uses Chest

<div class="minecraft-sign">
  <div class="minecraft-sign-line">[Timed]</div>
  <div class="minecraft-sign-line">24h</div>
  <div class="minecraft-sign-line">3</div>
  <div class="minecraft-sign-line"></div>
</div>

<div class="sign-description">
  <strong>Usage</strong>: Creates a chest that can be looted 3 times by each player, with a 24-hour cooldown between loots.<br>
  <strong>Second line</strong>: Cooldown duration.<br>
  <strong>Third line</strong>: Maximum number of uses per player.
</div>

---

## Admin Features

Players with the `winter.chest.admin` permission can:

- Break chests created by other players
- Bypass cooldown restrictions on timed chests
- Access any chest regardless of date/time restrictions
- Access private gift chests even if not listed on the sign 