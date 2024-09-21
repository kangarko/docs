---
title: Ticket
description: This is an example for ticket config.
---

# Ticket Example

[Click here for guide](../../../guides/configuration/systems/ticket.md)

```markdown
ticket_system: Thread

starting:
  style: Post Information

opening:
  method: Dropdown
  style: Post Message
  message_channel: 1275571829657833584
  categories:
    General:
      channel_format: "ticket-{username}"
      channel_id: 1268916282405949510
      category_id: 1270857751366602783
      emoji: "🎫"
    Report:
      channel_format: "report-{username}"
      channel_id: 1275236634937393173
      category_id: 1270857751366602783
      emoji: "📝"

closing:
  method: Button
  buttons:
    close:
      name: Close
      emoji: ⛔
    answer:
      name: Answer
      emoji: 🙋

transcript:
  method: Send Channel as HTML
  category_id: 1270857751366602783 
  upload:
    method: Github
    channel_id: 1277218813632450662
    token: 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
    repo: EgehanKilicarslan/minebot-transcript-example
    branch: master

notification:
  staff:
    mention: true
  user:
    mention: true
    answer: true
    close: true

staff:
  roles:
    - 1268916599881207908
  required_permissions:
    - MANAGE_MESSAGES
```