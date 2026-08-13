This page covers the configuration of settings.yml. You can also view the default settings by opening Boss.jar file and viewing the setting files from there. **Keep in mind you can't edit them inside your .jar file.**

> Use UTF-8 encoding. Notepad and Wordpad on Windows is broken. Use [Notepad++](https://notepad-plus-plus.org/) while on Windows, or [Sublime Text](https://www.sublimetext.com/) for Windows, Mac and other platforms.

# Folder structure

After the installation, your Boss folder should look like this:

![Boss Folder](/images/boss/gJ9EDww.png)

* **bosses/** - A folder containing individual settings for each Boss.
* **locations/** - A folder with locations you create with /boss tools.
* **regions/** - A folder with regions you create through /boss tools.
* **spawnrules/** - A folder with different spawn rules. Do not edit, this is managed through GUI.
* **lang/** - Appears after you run /boss dumplocale. Holds the message file you can edit.

* **data.yml** - Internal data file. Machine-generated, do not modify.
* **unloaded-bosses.yml** - Bosses recorded in unloaded chunks, used for world limits. Machine-generated.
* **settings.yml** - The main configuration file.

## Automatic Update
Boss updates your configuration automatically and seamlessly. When you update to a new version, all of your configs will get updated automatically.

## Keys worth knowing

| Key | Default | What it does |
|---|---|---|
| `Spawning.Air_Spawn` | true | Right clicking air with a spawner egg spawns the Boss in the distance |
| `Spawning.Air_Spawn_Max_Distance` | 30 | How far that reaches. Over 50 blocks loads a lot of chunks |
| `Spawning.Location_Spawn_Nearby_Player_Radius` | 30 | Location rules need a player this close. `-1` disables the check |
| `Spawning.Nearby_Spawn_Min_Distance_From_Player` | 5 | Bosses never appear closer than this |
| `Spawning.Count_Unloaded_Bosses_In_Limits` | true | Count Bosses in unloaded chunks against world limits. Paper only |
| `Spawning.Live_Updates` | true | Push menu changes onto Bosses already alive in loaded chunks |
| `Spawning.Integration.Lands` | true | Do not spawn in Lands areas that have mob spawning off |
| `Fighting.Retarget_Chance` | 0% | Chance a Boss switches to whoever hit it |
| `Fighting.Disable_Cheats` | FLIGHT, GOD_MODE, INVISIBILITY | Player abilities cut off during a Boss fight |
| `Health.Prevent_Regeneration` | false | Stop all Bosses regenerating health from any source |
| `Skills.Target_Range` | 8 | How close a player must be for a targeting [skill](skills#skills-that-need-a-target) to fire |
| `Variables.Nearby_Boss_Radius` | 20 | How far the `%boss_*%` placeholders look for a Boss |
| `Prevent_Vanilla_Mobs.Enabled` | false | Block vanilla mob spawning entirely, per world and per entity |
| `Timezone` | `""` | Timezone for the real-life clock in spawn rules. Empty uses the server's own |
| `Sort_By_Type` | false | Group the Bosses menu by mob type instead of A-Z |
| `Register_Regions` | true | Boss regions and the `/boss region` command. Restart after changing |
| `Register_Tools` | true | The tools from `/boss tools`. Restart after changing |
| `Debug` | [] | Print diagnostics. Sections: `spawning`, `skills`, `region-keep`, `unloaded`, `commands`, `health` |

Boss Bar and Health Bar live under `Fighting`, see [Customizing Bosses](customizing-bosses#health-bar).
