//Hediyemiz olsun ^^
const groncode = require('discord.js');
const moment = require("moment");
const ayarlar = require("../ayarlar.json")
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
    let groncodesahip = ayarlar.sahip
   const groncodesa = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const groncodeist = new groncode.MessageEmbed()
  .setColor("#66ff00")
  .setFooter('Gron Code ©️ 2021 Tüm Hakları Saklıdır. ', client.user.avatarURL())
  .addField("**Bot İstatistikleri**", "Sunucunuz İçin En İyi Koruma!")
  .addField("**Altyapının sahipleri**",  `<@822748323453992980> ve <@589918890864410654>`)
  .addField("**Botun Geliştiricisi**",  `<@${groncodesahip}>`)
  .addField("**Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**Çalışma süresi**", groncodesa)
  .addField("**Kullanıcılar**" , client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("**Sunucular**", client.guilds.cache.size.toLocaleString(), true)
  .addField("**Kanallar**", client.channels.cache.size.toLocaleString(), true)
  .addField("**Discord.JS sürüm**", "v"+groncode.version, true)
  .addField("**Ping**", client.ws.ping+" ms", true)
  .addField("**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("**Bit**", `\`${os.arch()}\``, true)
  .addField("**Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)")
  .addField("**Destek Sunucusu**", "[Tıkla!](Davet linki buraya)", )
  .addField("**Site**", "[Tıkla!](https://code.gronbotlist.ga/)")
  .setImage("https://media.discordapp.net/attachments/822753827030958131/829769369856245832/standard2.gif")
 return message.channel.send(groncodeist);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "istatistik", "botbilgi", "stats"],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "istatistik"
};