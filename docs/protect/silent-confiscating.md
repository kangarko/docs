# Silent Confiscating

You can accomplish silent matching of items without actually editing or taking the item away by simply not including an action to take in your rules. Although if you do not add delay it will trigger repeatedly. This can be easily accomplished by using player delay:

````
match *
name silent
player delay 10 seconds
then console say >{player}< has triggered {rule_name}!
````

In the example above, this rule would silently trigger once every 10 seconds per player.

It is also possible to use the ignore perm and give a player a temporary permission from your permissions plugin, here is an example with LuckPerms, to accomplish the same delay:

````
match *
name silent
ignore perm we.test
then console lp user {player} permission settemp we.test true 10s
then console say >{player}< has triggered {rule_name}!
````