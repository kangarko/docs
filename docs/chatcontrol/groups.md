# Groups

You can group players by certain permission and have ChatControl treat them differently. Such as VIP players can type faster in the chat, etc.

## Configuring Groups

Open settings.yml and see "Groups" section. You can place, edit or remove all subsections at your will. Each subsection is a group with its options, such as the "admin" group has no message delay below:

<div class="image-container">
  <img src="https://i.imgur.com/jLhPHXn.png" alt="Group configuration example" />
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

### Best Practices

When configuring groups, consider these recommendations:

1. **Progressive Privileges**: Create a hierarchy of groups with progressively better chat privileges
2. **Balance Restrictions**: Set reasonable delay and similarity values based on your server's activity
3. **Test Thoroughly**: Always test your configurations to ensure they're working as expected
4. **Documentation**: Keep notes on which groups have which permissions for easier management

<style>
.options-table {
  margin: 20px 0;
}

.options-table table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.options-table th {
  background-color: var(--vp-c-brand-light);
  color: white;
  text-align: left;
  padding: 12px 15px;
  font-weight: 600;
}

.options-table td {
  padding: 10px 15px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.options-table tr:last-child td {
  border-bottom: none;
}

.options-table tr:nth-child(even) {
  background-color: var(--vp-c-bg-soft);
}

.options-table td code {
  background-color: var(--vp-c-bg-soft);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.dark .options-table th {
  background-color: var(--vp-c-brand-dark);
}

.dark .options-table tr:nth-child(even) {
  background-color: var(--vp-c-bg-soft-dark);
}

.dark .options-table td code {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
