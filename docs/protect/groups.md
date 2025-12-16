# Groups

Groups allow you to put together operators from rules and call them at once, preventing duplicated code.

## Creating A Group

> Groups are stored in group.rs file and nowhere else. Attempting to create a group outside of this file will result in an error.

Open rules/groups.rs and make a new group using "group" operator. Give it a unique name since we will be referencing to it later.

Example of a group called "beginner":

![Sample Group](/images/protect/ol1y4uA.png)

## Using Groups

You can use groups in your other .rs files by the `group <name>` operator. Example:

![Sample Using Group](/images/protect/eecZdH6.png)