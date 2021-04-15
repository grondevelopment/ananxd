const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => { 
let p = ayarlar.prefix
if (!message.guild) return;


const sayfa = [`**${message.guild.name} | Sunucu Ayarları**\n**Botun Prefixi :** \ ${p}\n**Reklam Engel:** ${db.fetch(`reklam_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` } \n**DDOS Koruma:** ${db.fetch(`ddos_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` } \n**Emoji Koruma:** ${db.fetch(`emo_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` } \n**Rol Koruma:** ${db.fetch(`rol_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` } \n**Bot Koruma:** ${db.fetch(`rightbot_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` } \n**Sağ tık ban koruma:** ${db.fetch(`rightban_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` } \n**Sağ tık kick koruma:** ${db.fetch(`rightkick_${message.guild.id}`) ? `<:5519online:829791175069794386>` : `<:kapali:827491317361672235>` }`] 
const ayarReis = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setDescription(sayfa)
.setTimestamp() 
message.channel.send(ayarReis) 
}; 


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ayarlar', 'botayarlar', 'bothelp'], 
  permLevel: 0 
};

exports.help = {
  name: 'botayarlar',
  description: 'Sunucu ayarlarını gösterir',
  usage: 'botayarlar'
};