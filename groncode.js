const groncode = require('discord.js');
const client = new groncode.Client();
const ayarlar = require('./ayarlar.json');
const moment = require('moment');
const express = require('express')
const fs = require('fs');
const chalk = require('chalk');
const db = require('quick.db');
const ms = require('ms');
const app = express();
const http = require('http');
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

require('./util/eventLoader')(client);


var prefix = ayarlar.prefix;


//----------------------KOMUT YÜKLEME GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KOMUT YÜKLEME GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KOMUT YÜKLEME GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new groncode.Collection();
client.aliases = new groncode.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error (err);
    log(`${files.length} komut yüklenecek. Gron Code`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//----------------------KOMUT YÜKLEME SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KOMUT YÜKLEME SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KOMUT YÜKLEME SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.


//----------------------PERM LEVEL AYAR GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------PERM LEVEL AYAR GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------PERM LEVEL AYAR GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2; //Artık permlvl yerine 2 yazarsak sunucudaki banlama yetkisine cevap verecek
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3; //Artık permlvl yerine 3 yazarsak sunucudaki yönetici yetkisine cevap verecek
  if (message.author.id === ayarlar.sahip) permlvl = 4; //Artık permlvl yerine 4 yazarsak ayarlar.json daki sahip id sine cevap verecek
  return permlvl;
};
//----------------------PERM LEVEL AYAR SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------PERM LEVEL AYAR SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------PERM LEVEL AYAR SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------ERROR CODE BAŞLANGIÇ GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ERROR CODE BAŞLANGIÇ GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ERROR CODE BAŞLANGIÇ GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
var hata = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(hata, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgYellow(e.replace(hata, 'that was redacted')));
});
//----------------------ERROR CODE SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ERROR CODE SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ERROR CODE SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------GİRİŞ YAPMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------GİRİŞ YAPMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------GİRİŞ YAPMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.login(process.env.token) //Tokeninizi .env ye yazın.
//----------------------GİRİŞ SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------GİRİŞ SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------GİRİŞ SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------MOD LOG GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MOD LOG GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MOD LOG GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on('messageDelete', message => {
let modlogs =  db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (message.content.length > 1024) {
      modlogkanal.send({embed: {
    Color: "#080000",
    author: {
      name: `${message.channel.name} Kanalında ${message.author.tag} tarafından gönderilen bir mesaj silindi`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
        value: `\`\`\`Bilinmiyor...\`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
});
    } else {
      modlogkanal.send({embed: {
Color: "#080000",
    author: {
      name: `${message.channel.name} Kanalında ${message.author.tag} kullanıcısının mesajı silindi\n`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj:`,
        value: `\`\`\` ${message.content} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
});
    }
  }
})



client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new groncode.MessageEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`Gron Code | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
 let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new groncode.MessageEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişinin yasağı kaldırıldı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`Gron Code | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('channelCreate', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      Color: "#080000",
      fields: [{
          name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
          value: `\`\`\` ${channel.name} \`\`\``
        },
        {
          name: `Oluşturulan Kanalin Türü`,
          value: `\`\`\` Metin Kanalı \`\`\``
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `Gron Code | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Oluşturulan Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('channelDelete', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
     Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Metin Kanalı \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
        text: `Gron Code | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
 Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('roleDelete', async role => {
 let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
});
  }
});

client.on('emojiDelete', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
});
  
  }
});


client.on('roleCreate', async role => {
let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
     modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `Gron Code | Mod-Log Sistemi`
    }
  }
});
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
 let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`)
  const modlogkanal = oldMessage.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }
    modlogkanal.send({embed: {
      Color: "#080000",
      author: {
      name: `${oldMessage.channel.name} Kanalında ${oldMessage.author.tag} mesajını düzenledi:\n`,
      icon_url: oldMessage.author.DisplayAvatarURL
      },
      fields: [{
        name: `Eski mesaj:`,
        value: `\`\`\` ${oldMessage.content} \`\`\``
      },
      {
        name: `Yeni Mesaj:`,
        value: `\`\`\` ${newMessage.content} \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: oldMessage.author.DisplayAvatarURL,
      text: `Gron Code | Mod-Log Sistemi`
      }
    }
    });
  }
});


client.on('emojiCreate', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir emoji eklendi. \nEklenen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `Gron Code | Mod-Log Sistemi`
    } 
   } 
});
  }
});
//----------------------MOD LOG SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MOD LOG SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MOD LOG SON GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------MUTE DATABASE GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MUTE DATABASE GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MUTE DATABASE GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on('guildMemberAdd', async(member) => {
let mute = member.guild.roles.cache.find(r => r.name === "Muted");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.roles.add(mute.id)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.roles.remove(mute.id);
  }, ms(süre));
}
})
//----------------------MUTE DATABASE GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MUTE DATABASE GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------MUTE DATABASE GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------REKLAM ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------REKLAM ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------REKLAM ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on("message", async  msg => {
 var reklam = await db.fetch(`reklam_${msg.guild.id}`)
    if (reklam == 'acik') {
        const reklamyapangot = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg", ".ga",];
        if (reklamyapangot.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !')
                      .then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (reklam == 'kapali') {
      
    }
    if (!reklam) return;
  })
//----------------------REKLAM ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------REKLAM ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------REKLAM ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------KÜFÜR ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KÜFÜR ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KÜFÜR ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//Küfür engel "Selam" gibi şeyler yazıncada engelledeği için bottan kaldırdım.

//----------------------KÜFÜR ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KÜFÜR ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------KÜFÜR ENGEL GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------DDOS KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------DDOS KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------DDOS KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on("message", async msg => {
  var sistem = await db.fetch(`ddos_${msg.guild.id}`);
  if (sistem === "acik") {
    if (client.ws.ping > 400) {
      var bölgeler = [
        "singapore",
        "eu-central",
        "india",
        "us-central",
        "london",
        "eu-west",
        "amsterdam",
        "brazil",
        "us-west",
        "hongkong",
        "us-south",
        "southafrica",
        "us-east",
        "sydney",
        "frankfurt",
        "russia"
      ];
      var yeniBölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
      msg.guild.setRegion(yeniBölge);
      let kanal = msg.guild.channels.cache.find(c => c.name === "anti-ddos");
      if (!kanal) {
        msg.guild.channels.create(`anti-ddos`, `text`).then(ch => {
          let ever = msg.guild.roles.cache.find(r => r.name === "@everyone");
          ch.createOverwrite(ever, {
            VIEW_CHANNEL: false
          });
          setTimeout(async function() {
            ch.send(
              `<@${msg.guild.ownerID}>, sunucunun pingi yükseldiğinden dolayı saldırı ihtimaline karşı bölgeyi değiştirdim.`
            );
          }, 1500);
        });
      } else {
        kanal.send(
          `<@${msg.guild.ownerID}>, sunucunun pingi yükseldiğinden dolayı saldırı ihtimaline karşı bölgeyi değiştirdim.`
        );
      }
    }
  } else {
  }
});
//----------------------DDOS KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------DDOS KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------DDOS KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------EMOJI KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------EMOJI KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------EMOJI KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on("emojiDelete", async emo => {
const msg = client.on("message", async msg => {
  var sistem = await db.fetch(`emo_${msg.guild.id}`);
  if (emo === null) return;
  else {
    const entry = await emo.guild
      .fetchAuditLogs({ type: "EMOJI_DELETE" })
      .then(audit => audit.entries.first());
    const exec = await emo.guild.members.cache.get(entry.executor.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    emo.guild.emojis.create(emo.url, emo.name);
    exec.roles.removes(exec.roles);
    setTimeout(async function() {
      let role = emo.guild.roles.cache.find(r => r.name === "Cezalı");
      if (!role) {
        emo.guild
          .roles.create({
            name: "Cezalı",
            color: "GREY",
            position: emo.guild.roles.cache.size - 1,
            permissions: []
          })
          .then(rol => {
            exec.roles.add(rol);
          })
          .catch(e => console.error(e));
        setTimeout(async function() {});
      } else {
        exec.roles.add(role);
      }
    }, 400);
  }
});
//----------------------EMOJI KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------EMOJI KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------EMOJI KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------BOT KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------BOT KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------BOT KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on("guildMemberAdd", async member => {
  if (!member.user.bot) return;
  var sistem = await db.fetch(`rightbot_${msg.guild.id}`);
  if (sistem === null) return;
  let log = await member.guild
    .fetchAuditLogs()
    .then(denetim => denetim.entries.first());
  let botuSokan = log.executor.id;
  if (member.guild.ownerID === botuSokan) return;
  else {
    let botuSokanv2 = await member.guild.members.cache.get(botuSokan);
    let cezalı = member.guild.roles.cache.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        member.guild
          .roles.create({
            name: "Cezalı",
            color: "GREY",
            position: member.guild.roles.cache.size - 1,
            permissions: []
          })
          .then(rol => {
            botuSokanv2.roles.removes(botuSokanv2.roles);
            setTimeout(async function() {
              botuSokanv2.roles.add(rol);
            }, 500).catch(e => console.error(e));
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        botuSokanv2.roles.removes(botuSokanv2.roles);
        setTimeout(async function() {
          botuSokanv2.roles.add(cezalı);
          member.members.ban(
            `Bot koruma sistemi, ${botuSokanv2.user.tag} tarafından ${member.user.tag} botu sokuldu, sistem tarafından yasaklandı.`
          );
        }, 500);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
//----------------------BOT KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------BOT KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------BOT KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------ROL KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ROL KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ROL KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on("roleDelete", async role => {
  var sistem = await db.fetch(`rol_${msg.guild.id}`);
  if (sistem === null) return;
  let log = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(kay => kay.entries.first());
  let exec = role.guild.members.get(log.executor.id);
  if (exec.hasPermission("ADMINISTRATOR")) return;
  else {
    let cezalı = role.guild.roles.find(r => r.name === "Cezalı");
    if (!cezalı) {
      try {
        role.guild
          .createRole({
            name: "Cezalı",
            color: "GREY",
            position: role.guild.roles.size - 1,
            permissions: []
          })
          .then(r => {
            exec.removeRoles(exec.roles);
            setTimeout(async function() {
              exec.addRole(r);
            }, 500);
          })
          .catch(e => console.error(e));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        exec.removeRoles(exec.roles);
        setTimeout(async function() {
          exec.addRole(cezalı);
        });
      } catch (e) {
        console.log(e);
      }
    }
    let members = await db.fetch(`${role.guild.id}.${role.id}`);
    members.forEach(ui => {
      console.log(ui);
    });
  }
});
//----------------------ROL KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ROL KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------ROL KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.

//----------------------SAĞ TIK BAN KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------SAĞ TIK BAN KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------SAĞ TIK BAN KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
client.on("guildBanAdd", async (guild, user) => {
  var sistem = await db.fetch(`rightban_${msg.guild.id}`);
  if (sistem === null) return;
  else {
    let log = guild
      .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
      .then(k => k.entries.first());
    let exec = guild.members.cache.get(log.executor.id);
    let banned = guild.members.cache.get(user.id);
    if (exec.hasPermission("ADMINISTRATOR")) return;
    else {
      exec.roles.removes(exec.roles);
      let cezalı = guild.roles.cache.find(r => r.name === "Cezalı");
      if (!cezalı) {
        try {
          guild
            .roles.create({
              name: "Cezalı",
              color: "GREY",
              position: guild.roles.cache.size -1,
              permissions: []
            })
            .then(r => {
              exec.roles.add(r);
            })
            .catch(e => console.log(e));
          setTimeout(async function() {
            exec.roles.removes(exec.roles);
          }, 200);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          exec.roles.add(cezalı);
          setTimeout(async function() {
            exec.roles.removes(exec.roles);
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});
//----------------------SAĞ TIK BAN KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------SAĞ TIK BAN KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
//----------------------SAĞ TIK BAN KORUMA GRON CODE-------------------------- //İzinsiz Çalıp paylaşanların annesine selam.
});