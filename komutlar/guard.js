
const groncode = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = async (client, msg, args) => {
  if(args[0] === "yardım") {
    msg.channel.send(new groncode.MessageEmbed().setTitle("Koruma kodları yardımı").setDescription(`**DDOS**: ${prefix}guard ddos aç/kapat\n**Emoji**: ${prefix}guard emoji aç/kapat\n**Rol**: ${prefix}guard rol aç/kapat\n**Bot**: ${prefix}guard bot aç/kapat\n**Ban**: ${prefix}guard sağ-tık-ban aç/kapat\n**Kick**: ${prefix}guard sağ-tık-kick aç/kapat\n`).setFooter(msg.author.tag, msg.author.displayAvatarURL()).setColor("RANDOM").setImage("https://media.discordapp.net/attachments/822753827030958131/829769369856245832/standard2.gif"))
  } else if(args[0] === "ddos") {
    let sistem = await db.fetch(`ddos_${msg.guild.id}`)
    let ayar = args[1]
    if(ayar === "aç") {
      db.set(`ddos_${msg.guild.id}`, "acik")
      msg.channel.send(new groncode.MessageEmbed().setColor("GREEN").setDescription(`DDOS koruma sistemi açıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
    } else if(ayar === "kapat") {
      db.set(`ddos_${msg.guild.id}`, "null")
      msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`DDOS koruma sistemi kapatıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      if(sistem === null) {
        msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`DDOS koruma sistemi hâlihazırda kapalı.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      } else {
        db.delete(`ddos_${msg.guild.id}`)
      }
    }
  } else if(args[0] === "emoji") {
    let sistem = await db.fetch(`emo_${msg.guild.id}`)
    let ayar = args[1]
    if(ayar === "aç") {
      db.set(`emo_${msg.guild.id}`, "acik")
      msg.channel.send(new groncode.MessageEmbed().setColor("GREEN").setDescription(`Emoji koruma sistemi açıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
    } else if(ayar === "kapat") {
      db.set(`emo_${msg.guild.id}`, "null")
      msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Emoji koruma sistemi kapatıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      if(sistem === null) {
        msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Emoji koruma sistemi hâlihazırda kapalı.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      } else {
        db.delete(`emo_${msg.guild.id}`)
      }
    }
  } else if(args[0] === "rol") {
    let sistem = await db.fetch(`rol_${msg.guild.id}`)
    let ayar = args[1]
    if(ayar === "aç") {
      db.set(`rol_${msg.guild.id}`, "acik")
      msg.channel.send(new groncode.MessageEmbed().setColor("GREEN").setDescription(`Rol koruma sistemi açıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
    } else if(ayar === "kapat") {
      db.set(`rol_${msg.guild.id}`, "null")
      msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Rol koruma sistemi kapatıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      if(sistem === null) {
        msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Rol koruma sistemi hâlihazırda kapalı.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      } else {
        db.delete(`rol_${msg.guild.id}`)
      }
    }
  } else if(args[0] === "bot") {
    let sistem = await db.fetch(`rightbot_${msg.guild.id}`)
    let ayar = args[1]
    if(ayar === "aç") {
      db.set(`rightbot_${msg.guild.id}`, "acik")
      msg.channel.send(new groncode.MessageEmbed().setColor("GREEN").setDescription(`Bot koruma sistemi açıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
    } else if(ayar === "kapat") {
      db.set(`rightbot_${msg.guild.id}`, "null")
      msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Bot koruma sistemi kapatıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      if(sistem === null) {
        msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Bot koruma sistemi hâlihazırda kapalı.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      } else {
        db.delete(`rightbot_${msg.guild.id}`)
      }
    }
  } else if(args[0] === "sağ-tık-ban") {
    let sistem = await db.fetch(`rightban_${msg.guild.id}`)
    let ayar = args[1]
    if(ayar === "aç") {
      db.set(`rightban_${msg.guild.id}`, "acik")
      msg.channel.send(new groncode.MessageEmbed().setColor("GREEN").setDescription(`Sağ tık ban sistemi açıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
    } else if(ayar === "kapat") {
      db.set(`rightban_${msg.guild.id}`, "null")
      msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Sağ tık ban sistemi kapatıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      if(sistem === null) {
        msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Sağ tık ban sistemi hâlihazırda kapalı.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      } else {
        db.delete(`rightban_${msg.guild.id}`)
      }
    }
  } else if(args[0] === "sağ-tık-kick") {
    let sistem = await db.fetch(`rightkick_${msg.guild.id}`)
    let ayar = args[1]
    if(ayar === "aç") {
      db.set(`rightkick_${msg.guild.id}`, "acik")
      msg.channel.send(new groncode.MessageEmbed().setColor("GREEN").setDescription(`Sağ tık kick sistemi açıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
    } else if(ayar === "kapat") {
      db.set(`rightkick_${msg.guild.id}`, "null")
      msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Sağ tık kick sistemi kapatıldı!`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      if(sistem === null) {
        msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Sağ tık kick sistemi hâlihazırda kapalı.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
      } else {
        db.delete(`rightkick_${msg.guild.id}`)
      }
    }
  } else if(!args[0]) {
    msg.channel.send(new groncode.MessageEmbed().setColor("RED").setDescription(`Komutun kullanımını bilmiyorsanız lütfen **${prefix}guard yardım** yazarak yardım alabilirsiniz.`).setFooter(msg.author.tag, msg.author.displayAvatarURL()))
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["koruma"],
  permLevel: 3
};

exports.help = {
  name: "guard"
};