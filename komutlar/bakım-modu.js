const Discord = require('discord.js');
const database = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
if(message.author.id !== ayarlar.sahip) return;

function benbaban(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return benbaban('Bakım artık sona erdi.');

} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', { 
author: message.author,
time: Date.now() 
});

return benbaban('Bakım modu açıldı.\nArtık hiç bir kimse komutları kullanamayacak.');
};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu'
};