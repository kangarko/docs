---
title: Commands
description: This is an example for command localization.
---

# Command Localization Example

Below you'll find an example for commands localization.

[Click here for guide](../../guides/localization/commands.md)

=== "EN-US"
    ```markdown
    ban:
      name: ban
      description: Ban a user from the server.
      options:
        - user:
          - name: user
          - description: The user to ban
        - reason:
          - name: reason
          - description: The reason for the ban

    unban:
      name: unban
      description: Unban a user from the server.
      options:
        - user:
          - name: user
          - description: The user to unban
        - reason:
          - name: reason
          - description: The reason for the unban

    kick:
      name: kick
      description: Kick a user from the server.
      options:
        - user:
          - name: user
          - description: The user to kick
        - reason:
          - name: reason
          - description: The reason for the kcik

    vkick:
      name: vkick
      description: Kick a user from the voice channel.
      options:
        - user:
          - name: user
          - description: The user to kick
        - reason:
          - name: reason
          - description: The reason for the vkick

    move:
      name: move
      description: Move a user to another voice channel.
      options:
        - user:
          - name: user
          - description: The user to move
        - channel:
          - name: channel
          - description: The channel to move the user to
        - reason:
          - name: reason
          - description: The reason for the move

    lock:
      name: lock
      description: Lock a channel.
      options:
        - channel:
          - name: channel
          - description: The channel to lock
        - reason:
          - name: reason
          - description: The reason for the lock

    unlock:
      name: unlock
      description: Unlock a channel.
      options:
        - channel:
          - name: channel
          - description: The channel to unlock
        - reason:
          - name: reason
          - description: The reason for the unlock

    timeout:
      name: timeout
      description: Timeout a user.
      options:
        - user:
          - name: user
          - description: The user to timeout
        - duration:
          - name: duration
          - description: The duration of the timeout
        - reason:
          - name: reason
          - description: The reason for the timeout

    untimeout:
      name: untimeout
      description: Untimeout a user.
      options:
        - user:
          - name: user
          - description: The user to untimeout
        - reason:
          - name: reason
          - description: The reason for the untimeout

    clear:
      name: clear
      description: Clear messages from a channel.
      options:
        - amount:
          - name: amount
          - description: The amount of messages to clear
        - reason:
          - name: reason
          - description: The reason for the clear

    slowmode:
      name: slowmode
      description: Set the slowmode of a channel.
      options:
        - time:
          - name: time
          - description: The time of the slowmode
        - channel:
          - name: channel
          - description: The channel to set the slowmode

    wiki:
      name: wiki
      description: Search the MineAcademy wiki.
      options:
        - query:
          - name: query
          - description: The query to search for

    link_account:
      name: link_account
      description: Link your Discord account to your Minecraft account.
      options:
        - username:
          - name: username
          - description: The username of the Minecraft account

    suggest:
      name: suggest
      description: Suggest a feature for the server.

    suggestion:
      name: suggestion
      description: View a suggestion.
      subcommand:
        - approve:
          - name: approve
          - description: Approve a suggestion
          - options:
            - id:
              - name: id
              - description: The ID of the suggestion
            - reason:
              - name: reason
              - description: The reason for the approval
        - deny:
          - name: deny
          - description: Deny a suggestion
          - options:
            - id:
              - name: id
              - description: The ID of the suggestion
            - reason:
              - name: reason
              - description: The reason for the denial

    create_ticket:
      name: create_ticket
      description: Create a support ticket for assistance with any issues or inquiries.
      options:
        - category:
          - name: category
          - description: Select the category that best describes your issue or inquiry.

    close_ticket:
      name: close_ticket
      description: Close a support ticket.

    answer_ticket:
      name: answer_ticket
      description: Send answer notification.
    ```
=== "TR"
    ```markdown
    ban:
      name: yasakla
      description: Sunucudan bir kullanıcıyı yasaklar
      options:
        - user:
          - name: kullanıcı
          - description: Yasaklanacak kullanıcı
        - reason:
          - name: sebep
          - description: Yasaklama sebebi

    unban:
      name: yasak-kaldır
      description: Sunucudan bir kullanıcının yasağını kaldırır
      options:
        - user:
          - name: kullanıcı
          - description: Yasak kaldırılacak kullanıcı
        - reason:
          - name: sebep
          - description: Yasak kaldırma sebebi

    kick:
      name: at
      description: Sunucudan bir kullanıcıyı atar
      options:
        - user:
          - name: kullanıcı
          - description: Atılacak kullanıcı
        - reason:
          - name: sebep
          - description: Atma sebebi

    vkick:
      name: ses-at
      description: Ses kanalından bir kullanıcıyı atar
      options:
        - user:
          - name: kullanıcı
          - description: Atılacak kullanıcı
        - reason:
          - name: sebep
          - description: Atma sebebi

    move:
      name: taşı
      description: Bir kullanıcıyı başka bir ses kanalına taşır
      options:
        - user:
          - name: kullanıcı
          - description: Taşınacak kullanıcı
        - channel:
          - name: kanal
          - description: Kullanıcıyı taşıyacağınız kanal
        - reason:
          - name: sebep
          - description: Taşıma sebebi

    lock:
      name: kilitle
      description: Bir yazı veya ses kanalını kilitle
      options:
        - channel:
          - name: kanal
          - description: Kilitleyeceğiniz kanal
        - reason:
          - name: sebep
          - description: Kilitleme sebebi

    unlock:
      name: kilidi-aç
      description: Bir yazı veya ses kanalının kilidini açar
      options:
        - channel:
          - name: kanal
          - description: Kilidi açılacak kanal
        - reason:
          - name: sebep
          - description: Kilidin açılma sebebi

    timeout:
      name: sustur
      description: Sunucudan bir kullanıcıyı belirli bir süreyle susturur
      options:
        - user:
          - name: kullanıcı
          - description: Susturulan kullanıcı
        - duration:
          - name: süre
          - description: Susturma süresi
        - reason:
          - name: sebep
          - description: Susturma sebebi

    untimeout:
      name: susturmayı-kaldır
      description: Sunucudan bir kullanıcının susturmasını kaldırır
      options:
        - user:
          - name: kullanıcı
          - description: Susturması kaldırılacak kullanıcı
        - reason:
          - name: sebep
          - description: Susturma kaldırma sebebi

    clear:
      name: temizle
      description: Bir yazı kanalındaki mesajları temizler
      options:
        - amount:
          - name: miktar
          - description: Temizlenecek mesaj miktarı
        - reason:
          - name: sebep
          - description: Temizleme sebebi

    slowmode:
      name: yavaş-mod
      description: Bir yazı kanalına yavaş mod ekler
      options:
        - time:
          - name: süre
          - description: Yavaş mod süresi
        - channel:
          - name: kanal
          - description: Yavaş mod ekleyeceğiniz kanal

    wiki:
      name: wiki
      description: MineAcademy wiki'sinde arama yapar.
      options:
        - query:
          - name: sorgu
          - description: Aranacak sorgu

    link_account:
      name: hesap-bağla
      description: Discord hesabınızı Minecraft hesabınıza bağlar
      options:
        - username:
          - name: kullanıcı-adı
          - description: Minecraft hesabınızın kullanıcı adı

    suggest:
      name: öneri-gönder
      description: Bir öneri gönderir

    suggestion:
      name: öneri
      description: Bir öneri
      subcommand:
        - approve:
          - name: onayla
          - description: Bir öneriyi onaylar
          - options:
            - id:
              - name: id
              - description: Onaylanacak öneri
            - reason:
              - name: sebep
              - description: Onaylama sebebi
        - deny:
          - name: reddet
          - description: Bir öneriyi reddeder
          - options:
            - id:
              - name: id
              - description: Reddedilecek öneri
            - reason:
              - name: sebep
              - description: Reddetme sebebi

    create_ticket:
      name: bilet-oluştur
      description: Herhangi bir sorun veya soru için destek bileti oluşturun.
      options:
        - category:
          - name: category
          - description: Sorununuzu veya sorununuzu en iyi tanımlayan kategoriyi seçin.

    close_ticket:
      name: bilet-kapat
      description: Bir destek bileti kapatır

    answer_ticket:
      name: cevaplandı-bildirimi-gönder
      description: Bir destek bileti yanıtlar
    ```