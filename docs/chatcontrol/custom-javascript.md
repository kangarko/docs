# Custom JavaScript

ChatControl does not natively support [running arbitrary JavaScript code](https://winterbe.com/posts/2014/04/05/java8-nashorn-tutorial) but you can hack that feature in using the following tutorial.

Check out this link for official documentation: https://github.com/szegedi/nashorn/wiki/Java-Type-Objects

## 1. Create a rule

The following rule goes into rules/chat.rs. If you want to run JavaScript in a command, make a rule in rules/command.rs. Same applies for other rule types.

For example, we want our code to be executed whenever the chat message contains "run my secret script". If you want the code to be run always, use "match .*"

The "then alert" will call the test_script variable which we will install below. Since it will return an empty output, the player will not see anything in the chat.

If you want the player's message to be blocked, write "then deny" operator after "then alert" below.

```rs
match run my secret script
then alert {test_script}
```

## 2. Create your custom variable

In the following example, we will make a file test-script.yml in the variables/ folder with the following values:

```yaml
Type: FORMAT
Key: "test_script"
Value: ""
Sender_Condition: |-
    function runMyMethod() {
        // write your code here
    
        return false;
    }

    runMyMethod();
```

The type must be FORMAT. The key must match the same as you put in the rule so that it will get replaced. The trick here is that before it gets replaced, the Sender_Condition is evaluated. Inside, we can run arbitrary JS code and just return false for the empty Value not be sent back to the player.

## Security Implications

::: warning
Running arbitrary JavaScript code like this lets anyone having access to your disk files run commands with OP-level permissions. ChatControl is secure by default as this code requires direct disk access, and if someone gets access to your database, world, player files, you are in big trouble regardless.

JavaScript has been in ChatControl for years, and it poses no greater security threat than giving people access to your server files.
:::

<style>
code {
  font-family: monospace;
}
</style>