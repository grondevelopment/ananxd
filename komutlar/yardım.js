//Hediyemiz olsun ^^
const groncode = require('discord.js');
const moment = require("moment");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {

let prefixa = ayarlar.prefix
const yardim = new groncode.MessageEmbed()
.setColor("RANDOM")
.setTitle("Gron Code", client.user.avatarURL())
.setTimestamp()
.addField(`**${prefixa}mod-log-ayarla <#kanal>**`, `Mod log kanalını ayarlar`)
.addField(`**${prefixa}mod-log-sıfırla**`, `Mod log kanalını sıfırlar.`)
.addField(`**${prefixa}link-engel <aç-kapat>**`, `Link engel sistemini açar/kapatırsınız.`)
.addField(`**${prefixa}slowmode <0-21600>**`, `Kullandığınız kanala slowmode ayarlar.`)
.addField(`**${prefixa}bakım**`, `Botu bakım moduna alırsınız.`)
.addField(`**${prefixa}istatistik**`, `Botun istatistiklerini gösterir.`)
.addField(`**${prefixa}ban <@isim>**`, `Etiketlediğiniz kişiyi banlar.`)
.addField(`**${prefixa}unban id**`, `Etiketlediğiniz kişinin banını açar.`)
.addField(`**${prefixa}mute <@isim> <süre> <sebep>**`, `Etiketlediğiniz kişiyi muteler.`)
.addField(`**${prefixa}unmute <@isim> <sebep>**`, `Etiketlediğiniz kişinin mutesini açar.`)
.addField(`**${prefixa}guard yardım**`, `Guard yardım menüsünü gösterir.`)
.setFooter(`Gron Code ©️ 2021 Tüm Hakları Saklıdır`, client.user.avatarURL())
.setImage("https://media.discordapp.net/attachments/822753827030958131/829769369856245832/standard2.gif")

return message.channel.send(yardim);

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y', 'h', 'help'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Botun pingini gösterir',
  usage: 'yardım'
};