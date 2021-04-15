const groncode = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      " Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmanız gerek."
    );
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new groncode.MessageEmbed()
      .setDescription(`Doğru kullanım: \`${prefix}yavaşmod [0/21600]\``)
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send({ embed });
    return;
  }
  if (limit > 21600) {
    return message.channel.send(
      new groncode.MessageEmbed()
        .setTitle("HATA!")
        .setDescription("Süre limiti maksimum **21600** saniye olabilir.")
        .setColor("RED")
    );
  }
  message.channel.send(
    new groncode.MessageEmbed()
      .setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
      .setColor("RANDOM")
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "yavas-mod", "yavasmod", "yavaşmod"],
  permLevel: 1
};
 
exports.help = {
  name: "slowmode",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "slowmode [1/21600]"
};