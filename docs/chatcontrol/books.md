# Books

You can use ChatControl to create, edit, and open books for players.

::: info
When creating books, we use the same interface as mails have. That's why you will see messages that your mail is ready to sent, etc. This is intended.
:::

<div class="image-container">
  <img src="https://i.imgur.com/txBAmLm.gif" alt="Books demonstration" />
</div>

## Books Commands

### /chc book new
Create a new book.

### /chc book save
Save a book you just created to books/ folder in your ChatControl/ folder.

### /chc book delete
Delete a saved book.

### /chc book open
Open a book for a player

### /chc book list
List saved books.

## Books In Rules
You can simply use "then book" operator in [Rules](rules) and [Messages](messages) to open any saved book for the player.

## Creating A /Help Command That Open Books

1. You can create the following rule in rules/command.rs file (we already have it there as an example):

<div class="image-container">
  <img src="https://i.imgur.com/aZYR0p4.png" alt="Help command rule example" />
</div>

2. Then you can create a new format "help" that will show a message that has a special part that, when clicked, will open your saved book for the player.

<div class="image-container">
  <img src="https://i.imgur.com/IdT3FFE.png" alt="Help format example" />
</div>