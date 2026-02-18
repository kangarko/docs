# Groups

You can group players by certain permission and have ChatControl treat them differently. Such as VIP players can type faster in the chat, etc.

## Configuring Groups

Open settings.yml and see "Groups" section. You can place, edit or remove all subsections at your will. Each subsection is a group with its options, such as the "admin" group has no message delay below:

<div class="image-container">
  <img src="/images/chatcontrol/jLhPHXn.png" alt="Group configuration example" />
</div>

You apply this group by giving players "chatcontrol.group.`{groupName}`" permission, in this case "chatcontrol.group.admin".

## Group Options

ChatControl offers several group options to customize how different player groups interact with the chat system:

<div class="options-table">
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
        <th>Example Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Max_Read_Channels</strong></td>
        <td>Maximum number of channels a player can read simultaneously</td>
        <td><code>3</code></td>
      </tr>
      <tr>
        <td><strong>Message_Delay</strong></td>
        <td>Time delay required between chat messages for this group</td>
        <td><code>"2 seconds"</code></td>
      </tr>
      <tr>
        <td><strong>Message_Similarity</strong></td>
        <td>Minimum allowed difference between consecutive messages (prevents spam)</td>
        <td><code>"50%"</code></td>
      </tr>
      <tr>
        <td><strong>Command_Delay</strong></td>
        <td>Time delay required between commands for this group</td>
        <td><code>"3 seconds"</code></td>
      </tr>
      <tr>
        <td><strong>Command_Similarity</strong></td>
        <td>Minimum allowed difference between consecutive commands</td>
        <td><code>"50%"</code></td>
      </tr>
      <tr>
        <td><strong>Sound_Notify_Format</strong></td>
        <td>Color for <a href="Sound-Notify">Sound Notify</a> when tagging other players</td>
        <td><code>"&6"</code> (gold)</td>
      </tr>
      <tr>
        <td><strong>Format_Motd</strong></td>
        <td>Name of the format that displays the message of the day when player joins</td>
        <td><code>"vip_motd"</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Common Group Setups

Below are some example group configurations for different player types:

::: tip VIP Players Configuration
```yaml
Groups:
  vip:
    Message_Delay: "1 second"
    Command_Delay: "1 second"
    Max_Read_Channels: 3
    Sound_Notify_Format: "&6"
    Format_Motd: "vip_motd"
```
Permission: `chatcontrol.group.vip`
:::

::: tip Staff Configuration
```yaml
Groups:
  staff:
    Message_Delay: "0 seconds"
    Command_Delay: "0 seconds"
    Max_Read_Channels: 5
    Sound_Notify_Format: "&c"
    Format_Motd: "staff_motd"
```
Permission: `chatcontrol.group.staff`
:::

