---
title: Messages
description: This is an example for message localization.
---

# Message Localization Example

[Click here for guide](../../guides/localization/messages.md)

=== "EN-US"
    ```markdown
    ban:
      user:
        title: "You banned a member!"
        description: "**User**: {user}\n**Reason**: {reason}"
      log:
        title: "User Banned!"
        description: "**User**: {user}\n**Moderator**: {moderator}\n**Reason**: {reason}"  

    unban:
      user:
        title: "You unbanned a member!"
        description: "**User**: {user}\n**Reason**: {reason}"
      log:
        title: "User Unbanned!"
        description: "**User**: {user}\n**Moderator**: {moderator}\n**Reason**: {reason}"

    kick:
      user:
        title: "You kicked a member!"
        description: "**User**: {user}\n**Reason**: {reason}"
      log:
        title: "User Kicked!"
        description: "**User**: {user}\n**Moderator**: {moderator}\n**Reason**: {reason}"

    vkick:
      user:
        title: "You kicked a member from Voice Channel!"
        description: "**User**: {user}\n**Reason**: {reason}"
      log:
        title: "User Kicked from Voice Channel!"
        description: "**Moderator**: {moderator}\n**Reason**: {reason}"

    move:
      user:
        title: "You moved a member!"
        description: "**User**: {user}\n**Channel**: {channel}\n**Reason**: {reason}"
      log:
        title: "User Moved!"
        description: "**Moderator**: {moderator}\n**Channel**: {channel}\n**Reason**: {reason}"

    lock:
      user:
        title: "You locked the channel!"
        description: "**Reason**: {reason}"
      log:
        title: "Channel Locked!"
        description: "**Moderator**: {moderator}\n**Channel**: {channel}\n**Reason**: {reason}"

    unlock:
      user:
        title: "You unlocked the channel!"
        description: "**Channel**: {channel}\n**Reason**: {reason}"
      log:
        title: "Channel Unlocked!"
        description: "**Moderator**: {moderator}\n**Channel**: {channel}\n**Reason**: {reason}"

    timeout:
      user:
        title: "You timed out a member!"
        description: "**User**: {user}\n**Duration**: {duration}\n**Reason**: {reason}"
      log:
        title: "User Timed Out!"
        description: "**User**: {user}\n**Moderator**: {moderator}\n**Duration**: {duration}\n**Reason**: {reason}"
        
    untimeout:
      user:
        title: "You removed the timeout from a member!"
        description: "**User**: {user}\n**Reason**: {reason}"
      log:
        title: "User Timeout Removed!"
        description: "**User**: {user}\n**Moderator**: {moderator}\n**Reason**: {reason}"

    clear:
      user:
        title: "You cleared messages!"
        description: "**Amount**: {amount}\n**Reason**: {reason}"
      log:
        title: "Messages Cleared!"
        description: "**Moderator**: {moderator}\n**Channel**: {channel}\n**Amount**: {amount}\n**Reason**: {reason}"

    slowmode:
      user:
        title: "You set the slowmode!"
        description: "**Channel**: {channel}\n**Time**: {time}"
      log:
        title: "Slowmode Set!"
        description: "**Moderator**: {moderator}\n**Channel**: {channel}\n**Time**: {time}"

    wiki:
      user:
        title: "__Query: {query}__"
        description: "{result}"

    link_account:
      user:
        embed:
          title: "You linked your account!"
          description: "Your account has been linked successfully"
        modal:
          title: "Link Account"
          codeInputLabel: "Code"
          codeInputPlaceholder: "Enter the code here"
      log:
        title: "Account Linked!"
        description: "**User**: {user}\n**Username**: {username}\n**UUID**: {uuid}"
      code:
        message: "Your verification code is: &l&f{code}"
      toast:
        material: "ARROW"
        style: "GOAL"
        message: "Your account has been successfully linked!"
      error:
        material: "BARRIER"
        style: "GOAL"
        incorrectCode: "The code you entered is incorrect. Please try again."
        accountAlreadyLinked: "This account is already linked to another user."

    suggest:
      user:
        embed:
          title: "Your suggestion has been sent!"
          description: "Your suggestion has been sent to the moderators for review"
        modal:
          title: "Send Us Your Perfect Idea!"
          suggestionInputLabel: "Suggestion"
          suggestionInputPlaceholder: "Enter your suggestion here"
      log:
        title: "New Suggestion!"
        description: "**User**: {user}\n**Username**: {username}\n**Suggestion**: ```{suggestion}```"

    suggestion:
      embed:
        approve:
          title: "Suggestion Accepted!"
          description: "You have accepted the suggestion"
        deny:
          title: "Suggestion Denied!"
          description: "You have denied the suggestion"
      log:
        approve:
          title: "Suggestion Accepted!"
          description: "**Moderator**: {moderator}\n**Reason**: {reason}\n**Suggestion**: ```{suggestion}```"
        deny:
          title: "Suggestion Denied!"
          description: "**Moderator**: {moderator}\n**Reason**: {reason}\n**Suggestion**: ```{suggestion}```"
      toast:
        approve:
          material: "EMERALD"
          style: "GOAL"
          message: "Your suggestion has been accepted!"
        deny:
          material: "REDSTONE"
          style: "GOAL"
          message: "Your suggestion has been denied!"

    ticket:
      embed:
        post_message:
          title: "You can open a ticket!"
          description: "You can open a ticket by clicking the button below"
        post_information:
          title: "Ticket Opened!"
          description: "```{message}```"
      modal:
        post_information:
          title: "Give Us More Information!"
          label: "Information"
          placeholder: "Enter your message here"
      notification:
        staff:
          mention:
            material: "EMERALD"
            style: "GOAL"
            message: "You mentioned in {channel}"
        user:
          mention:
            material: "EMERALD"
            style: "GOAL"
            message: "You mentioned in {channel}"
          answer:
            material: "EMERALD"
            style: "GOAL"
            message: "Your ticket has been answered!"
          close:
            material: "EMERALD"
            style: "GOAL"
            message: "Your ticket has been closed!"
      message:
        post_information_success: "Thank you for the information provided! Your ticket has been created and will be answered as soon as possible."
        channel_created: "Your ticket has been created! You can follow your ticket by going to the {channel} channel."
        notification_send: "Notification sent."

    other:
      noReason: "No reason provided"
      responsibleModerator: "**Responsible Moderator**: {moderator}"

    error: 
      title: "Error"
      unknownError: "An error occurred while executing the command"
      canNotModerate: "You can not moderate this user"
      invalidUserId: "Invalid user ID"
      invalidMessageId: "Invalid message ID"
      playerNotOnline: "Player is not online"
      canNotFindPlayer: "Can not find player for {uuid}"
      canNotFindUUID: "Can not find UUID for {username}"
      unknownRole: "The role to be given to the user could not be found."

    success:
      title: "Success"
      processCompleted: "The process has been completed successfully"
    ```
=== "TR"
    ```markdown
    ban:
      user:
        title: "Bir Kullanıcı Yasakladınız!"
        description: "**Kullanıcı**: {user}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Yasaklandı!"
        description: "**Kullanıcı**: {user}\n**Moderatör**: {moderator}\n**Sebep** {reason}"

    unban:
      user:
        title: "Bir Kullanıcı Yasak Kaldırdınız!"
        description: "**Kullanıcı**: {user}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Yasak Kaldırıldı!"
        description: "**Kullanıcı**: {user}\n**Moderatör**: {moderator}\n**Sebep** {reason}"

    kick:
      user:
        title: "Bir Kullanıcı Attınız!"
        description: "**Kullanıcı**: {user}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Atıldı!"
        description: "**Kullanıcı**: {user}\n**Moderatör**: {moderator}\n**Sebep** {reason}"

    vkick:
      user:
        title: "Bir Kullanıcı Ses Kanalından Attınız!"
        description: "**Kullanıcı**: {user}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Ses Kanalından Atıldı!"
        description: "**Moderatör**: {moderator}\n**Sebep** {reason}"

    move:
      user:
        title: "Bir Kullanıcı Taşıdınız!"
        description: "**Kullanıcı**: {user}\n**Kanal**: {channel}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Taşındı!"
        description: "**Moderatör**: {moderator}\n**Kanal**: {channel}\n**Sebep** {reason}"

    lock:
      user:
        title: "Kanalı Kilitleme!"
        description: "**Sebep**: {reason}"
      log:
        title: "Kanal Kilitlendi!"
        description: "**Moderatör**: {moderator}\n**Kanal**: {channel}\n**Sebep** {reason}"

    unlock:
      user:
        title: "Kanalı Kilidi Açma!"
        description: "**Kanal**: {channel}\n**Sebep**: {reason}"
      log:
        title: "Kanal Kilidi Açıldı!"
        description: "**Moderatör**: {moderator}\n**Kanal**: {channel}\n**Sebep** {reason}"

    timeout:
      user:
        title: "Bir Kullanıcı Susturdunuz!"
        description: "**Kullanıcı**: {user}\n**Süre**: {duration}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Susturuldu!"
        description: "**Kullanıcı**: {user}\n**Moderatör**: {moderator}\n**Süre**: {duration}\n**Sebep** {reason}"

    untimeout:
      user:
        title: "Bir Kullanıcı Susturmasını Kaldırdınız!"
        description: "**Kullanıcı**: {user}\n**Sebep**: {reason}"
      log:
        title: "Kullanıcı Susturması Kaldırıldı!"
        description: "**Kullanıcı**: {user}\n**Moderatör**: {moderator}\n**Sebep** {reason}"

    clear:
      user:
        title: "Mesajları Temizlediniz!"
        description: "**Kullanıcı**: {user}\n**Miktar**: {amount}\n**Sebep**: {reason}"
      log:
        title: "Mesajlar Temizlendi!"
        description: "**Moderatör**: {moderator}\n**Kanal**: {channel}\n**Miktar**: {amount}\n**Sebep** {reason}"

    slowmode:
      user:
        title: "Yavaş Mod Ayarladınız!"
        description: "**Süre**: {time}\n**Sebep**: {reason}"
      log:
        title: "Yavaş Mod Ayarlandı!"
        description: "**Moderatör**: {moderator}\n**Kanal**: {channel}\n**Süre**: {time}\n**Sebep** {reason}"

    wiki:
      user:
        title: "__Sorgu: {query}__"
        description: "{result}"

    link_account:
      user:
        embed:
          title: "Hesap Bağlandı"
          description: "Hesabınız başarıyla bağlandı"
        modal:
          title: "Hesap Bağla"
          codeInputLabel: "Kod"
          codeInputPlaceholder: "Kodu buraya girin"
      log:
        title: "Hesap Bağlandı!"
        description: "**Kullanıcı**: {user}\n**Kullanıcı Adı**: {username}\n**UUID**: {uuid}"
      code:
        message: "Doğrulama kodunuz: &l&f{code}"
      toast:
        material: "ARROW"
        style: "GOAL"
        message: "Hesabınız başarıyla bağlandı!"
      error:
        material: "BARRIER"
        style: "GOAL"
        incorrectCode: "Girdiğiniz kod yanlış. Lütfen tekrar deneyin."
        accountAlreadyLinked: "Bu hesap zaten başka bir kullanıcıya bağlı."

    suggest:
      user:
        embed:
          title: "Öneriniz gönderildi!"
          description: "Öneriniz moderatörler tarafından incelenmek üzere gönderildi"
        modal:
          title: "Bize Mükemmel Fikrinizi Gönderin!"
          suggestionInputLabel: "Öneri"
          suggestionInputPlaceholder: "Önerinizi buraya girin"
      log:
        title: "Yeni Öneri!"
        description: "**Kullanıcı**: {user}\n**Kullanıcı Adı**: {username}\n**Öneri**: ```{suggestion}```"
      
    suggestion:
      embed:
        approve:
          title: "Öneri Kabul Edildi!"
          description: "Öneri baraşıyla kabul edildi"
        deny:
          title: "Öneri Reddedildi!"
          description: "Öneri başarılı bir şekilde reddedildi"
      log:
        approve:
          title: "Öneri Kabul Edildi!"
          description: "**Yetkili**: {moderator}\n**Sebep**: {reason}\n**Öneri**: ```{suggestion}```"
        deny:
          title: "Öneri Reddedildi!"
          description: "**Yetkili**: {moderator}\n**Sebep**: {reason}\n**Öneri**: ```{suggestion}```"
      toast:
        approve:
          material: "EMERALD"
          style: "GOAL"
          message: "Öneriniz kabul edildi!"
        deny:
          material: "REDSTONE"
          style: "GOAL"
          message: "Öneriniz reddedildi!"

    ticket:
      embed:
        post_message:
          title: "Bu kanaldan bir bilet açabilirsiniz!"
          description: "Aşağıdaki butona tıklayarak bir bilet oluşturabilirsinz"
        post_information:
          title: "Bilet Açıldı!"
          description: "```{message}```"
      modal:
        post_information:
          title: "Bize Biraz Bilgi Verin!"
          label: "Ön Bilgi"
          placeholder: "Biletiniz hakkında biraz bilgi verin"
      notification:
        staff:
          mention:
            material: "EMERALD"
            style: "GOAL"
            message: "{channel} kanalında bahsedildiniz"
        user:
          mention:
            material: "EMERALD"
            style: "GOAL"
            message: "{channel} kanalında bahsedildiniz"
          answer:
            material: "EMERALD"
            style: "GOAL"
            message: "Biletiniz yanıtlandı!"
          close:
            material: "EMERALD"
            style: "GOAL"
            message: "Biletiniz kapatıldı!"
      message:
        post_information_success: "Verdiğiniz bilgiler için teşekkür ederiz! Biletiniz oluşturuldu ve en kısa sürede yanıtlanacaktır."
        channel_created: "Biletiniz oluşturuldu! {channel} kanalına giderek biletinizi takip edebilirsiniz."
        notification_send: "Bildirim gönderildi"

    other:
      noReason: "Sebep belirtilmedi"
      responsibleModerator: "**Sorumlu Moderatör**: {moderator}"

    error:
      title: "Hata"
      unknownError: "Komut çalıştırılırken bir hata oluştu"
      canNotModerate: "Bu kullanıcıya moderasyon yapamazsınız"
      invalidUserId: "Geçersiz kullanıcı ID'si"
      invalidMessageId: "Geçersiz mesaj ID'si"
      playerNotOnline: "Oyuncu çevrimdışı"
      canNotFindPlayer: "{uuid} için oyuncu bulunamadı"
      canNotFindUUID: "{username} için UUID bulunamadı"
      unknownRole: "Kullanıcıya verilecek rol bulunamadı."

    success:
      title: "Başarılı"
      processCompleted: "İşlem başarıyla tamamlandı"
    ```