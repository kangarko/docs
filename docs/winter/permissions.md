# Permissions

Winter uses a straightforward permission system that gives you fine-grained control over who can access various features.

---

## Command Permissions

All command permissions follow the pattern `winter.command.X` where X is the name of the subcommand.

| Permission | Description |
|------------|-------------|
| `winter.command.snow` | Access to the `/winter snow` command |
| `winter.command.populate` | Access to the `/winter populate` command (console only) |
| `winter.command.psycho` | Access to the `/winter psycho` command |
| `winter.command.region` | Access to the `/winter region` command |
| `winter.command.reload` | Access to the `/winter reload` command |

## Chest Permissions

Winter implements several special chest types that require specific permissions to access.

| Permission | Description |
|------------|-------------|
| `winter.chest.gift` | Allows access to gift chests |
| `winter.chest.dated` | Allows access to dated chests |
| `winter.chest.timed` | Allows access to timed chests |
| `winter.chest.admin` | Allows breaking chests from other players and bypassing restrictions |

::: warning Administrator Permission
The `winter.chest.admin` permission should only be given to trusted staff members as it allows them to bypass restrictions and break other players' chests.
:::

## Permission Examples

Here are some example permission setups for different user roles:

### Regular Players
```
winter.command.help
winter.chest.gift
```

### VIP Players
```
winter.command.help
winter.command.snow
winter.chest.gift
winter.chest.dated
winter.chest.timed
```

### Staff Members
```
winter.command.*
winter.chest.gift
winter.chest.dated
winter.chest.timed
```

### Administrators
```
winter.command.*
winter.chest.*
``` 