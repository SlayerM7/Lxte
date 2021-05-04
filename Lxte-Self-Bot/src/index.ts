process.title = '[Lxte selfbot] - Loading..'
import { Client, RichEmbed, TextChannel } from 'discord.js'

import fs  from 'fs'

const snipes = new Map();

var afk = false;

import {
    red,
    green,
    blackBright,
    magentaBright,
    white
} from 'chalk'
console.clear();


import {  prefix as pp, webhookNames, channelNames, roleNames, spamMessages, main_color } from './config.json'
let prefix =pp;
import { version } from 'typescript';

const client = new Client();

client.once('ready', () => {
    process.title = `[Lxte selfbot] - Connected ${client.user.tag}`
    console.clear();
    function mainlogo() {

        console.log(` `)
        console.log(white('                     ╦  ═╗ ╦╔╦╗╔═╗  ╔═╗╔═╗╦  ╔═╗  ╔╗ ╔═╗╔╦'))
        console.log(blackBright('                     ║  ╔╩╦╝ ║ ║╣   ╚═╗║╣ ║  ╠╣   ╠╩╗║ ║ ║  '))
        console.log(magentaBright('                     ╩═╝╩ ╚═ ╩ ╚═╝  ╚═╝╚═╝╩═╝╚    ╚═╝╚═╝ ╩'))
        console.log(` `)
        console.log(` `)
        console.log(magentaBright('                           ════════════════════════════'))
        console.log(white(`                              Connected `) + magentaBright("[") + white(client.user.tag) + magentaBright(']'))
        console.log(white(`                              Guilds `) + magentaBright("[") + white(client.guilds.size) + magentaBright(']'))
        console.log(white(`                              Prefix `) + magentaBright("[") + white(prefix) + magentaBright(']'))
        console.log(magentaBright('                           ════════════════════════════'))
        console.log(` `)
            
        // console.log(magentaBright('                    [') + white('?') + magentaBright(']') + white(' Logged in as ') + magentaBright(client.user.tag));
    };

    mainlogo();
    console.log(` `);


    client.on('message', async (message) => {
        if (message.mentions.users.has(client.user.id)) {
            if (afk === true) {

                return message.reply(`**${client.user.username}** is AFK`)
            };
        };
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        if (message.author.id !== client.user.id) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLocaleLowerCase();

        if (command === 'clear') {
            console.clear()
            mainlogo()
        }

        if (command === 'eval') {
            try {
            await eval(args.join(' '))
            } catch(e) {
                message.channel.send(`
                
                **Incorrect form of TypeScript**

                Error: ${e}

                `)
            }
        }
        

        if (command === 'credits') {
            try {
            await message.channel.send('', {embed: {description: `
        
            • Creator: Slayer
            • Libary: discord.js
            • Node version: ${process.version}
            • TypeScript Version: ${version}

            `}, color: parseInt(main_color)})
            } catch {

            }
        }

        if (command === 'setprefix') {   
            const newPrefix = args.join(' ');
            if (!newPrefix) {
                message.delete();
                console.log(magentaBright('                              [') + white('!') + magentaBright('] ') + white('No prefix was mentioned'));
                return;
            } 

            prefix = newPrefix;
            console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Prefix set to ') + magentaBright(newPrefix));
        }

        if (command === 'kickall') {
            console.clear()
            mainlogo()
            setTimeout(() => {
            for (let i = 0; i < message.guild.members.array().length; i++) {
                let u = message.guild.members.array()[i];



                u.kick().then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Kicked ') + magentaBright(u.user.tag));
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright('] ') + white('Couldn\'t Kick ') + magentaBright(u.user.tag));
                }).finally(() => {
                    console.log(magentaBright('                              [') + white('!') + magentaBright('] ') + white('RateLimited, Sleeping for ') + magentaBright('0') + white(' Seconds'));
                    console.log(magentaBright('                              [') + white('!') + magentaBright('] ') + white('RateLimited, Sleeping for ') + magentaBright('0') + white(' Seconds'));
                });

            };

            message.guild.members.forEach(mm => {

                mm.ban().then(() => {
                    console.log(red(`[2021] `) + white('Successfully Kicked -> ') + green(mm.user.tag));
                }).catch(() => {
                });
            });
        }, 300)
        };


        if (command === 'delroles' || command === 'delrls') {
            message.guild.roles.forEach((role) => {
                role.delete().then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Deleted role ') + magentaBright(role.name))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Couldn\'t delete role ') + magentaBright(role.name))
                })
            });
        }

        if (command === 'rlspam' || command === 'roleraid' || command === "spamroles" || command === "rolespam") {
            process.nextTick(() => {
                setInterval(() => {
                message.guild.createRole({
                    name: roleNames[Math.floor(Math.random() * roleNames.length)],
                    color: "RANDOM",
                    hoist: true,
                }).then((role) => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Created role ') + magentaBright(role.name))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Couldn\'t create role '))
                })
            })
        })

          
        }

        if (command === 'help') {
            const helpEmbed = new RichEmbed()
                .setColor(main_color)
                .setAuthor('Lxte Self bot', 'https://cdn.discordapp.com/attachments/703580033238827009/810392250709442610/devil_1.jpeg')
                .setDescription('```\n • dmall           | Dmall The Server \n • banall          | Bans Everyone In The Server \n • kickall         | Kicks Everyone In The Server \n • ww              | Destroy server \n • delchs          | Delete all channels \n • chraid          | Mass create channels \n • spam            | Spam messages in a channel \n • afk             | Set your self as afk \n • stealpfp        | Steal a users avatar  \n • purge           | Delete your recent messages \n • snipe           | Snipe most recent deleted message```')
                .setFooter('https://bit.ly/lxte-tool', 'https://cdn.discordapp.com/attachments/703580033238827009/810392250709442610/devil_1.jpeg')
            message.channel.send(helpEmbed);
        };

        if (command === 'ww') {
            message.guild.channels.forEach(ch => {
                ch.delete().then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Deleted channel ') + magentaBright(ch.name))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Failed to delete channel '))
                })
            })
            setInterval(() => {
                setImmediate(() => {
                message.guild.createChannel(channelNames[Math.floor(Math.random() * channelNames.length)], { type: 'text', topic: "Made By Slayer" }).then((ch) => { 
                        console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Created channel ') + magentaBright(ch.name))
                    if (ch && ch.type === 'text') {
                        (ch as TextChannel).createWebhook(webhookNames[Math.floor(Math.random() * webhookNames.length)], 'https://cdn.discordapp.com/attachments/810944520682340372/811900785482530846/devil.jpg').then((webhook) => {
                            setInterval(() => {
                                webhook.send("@everyone " + spamMessages[Math.floor(Math.random() * spamMessages.length)])
                            });
                            console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Created webhook ') + magentaBright(webhook.name));
                        }).catch((e) => {
                            console.log(e)
                            console.log(magentaBright('                              [') + white('-') + magentaBright('] ') + white('Couldn\'t Create webhook '));
                        })

                    }
                })
                });
            })
        
            process.nextTick(() => {
                for (let i = 0; i < 500; i++) {
                message.guild.createChannel(channelNames[Math.floor(Math.random() * channelNames.length)], { type: 'text', topic: "Made By Slayer" }).then((ch) => {
                    //    setInterval(() => { 
                        console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Created channel ') + magentaBright(ch.name))
                    if (ch && ch.type === 'text') {
                        (ch as TextChannel).createWebhook(webhookNames[Math.floor(Math.random() * webhookNames.length)], 'https://cdn.discordapp.com/attachments/810944520682340372/811900785482530846/devil.jpg').then((webhook) => {
                            setInterval(() => {
                                webhook.send("@everyone " + spamMessages[Math.floor(Math.random() * spamMessages.length)])
                            });
                            console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Created webhook ') + magentaBright(webhook.name));
                        }).catch((e) => {
                            console.log(e)
                            console.log(magentaBright('                              [') + white('-') + magentaBright('] ') + white('Couldn\'t Create webhook '));
                        })

                    }
                    //  })  
                
                })
            }
            })
        


            setInterval(() => {
                message.guild.createRole({
                    name: roleNames[Math.floor(Math.random() * roleNames.length)],
                    color: "RANDOM",
                    hoist: true,
                }).then((role) => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Created role ') + magentaBright(role.name))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Couldn\'t create role '))
                })

            })

        }
        if (command === 'purge') {
            message.channel.messages.map(messages => {
                if (messages.author.id === client.user.id) {
                    messages.delete().catch(() => {

                    })
                }
            })
        }

        if (command === "stealpfp") {
            let user = message.mentions.users.first()
            if (!user) {
                message.delete()
                console.log(magentaBright('                              [') + white('!') + magentaBright('] ') + white('No ') + magentaBright('user ') + white('mentioned'));
                return;
            }

            client.user.setAvatar(user.displayAvatarURL).catch(() => {
                console.clear()
                mainlogo()
                console.log(magentaBright('                              [') + white('$') + magentaBright('] ') + white('Api Error') + magentaBright(': ') + white('You are changing your avatar to fast'));
            }).then(() => {
                console.clear()
                mainlogo()
                console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white("Stole avatar from ") + magentaBright(user.username));
            })
            message.delete();
            return;
        }

        if (command === 'banall') {
            console.clear()
            mainlogo()
            setTimeout(() => {
            for (let i = 0; i < message.guild.members.array().length; i++) {
                let u = message.guild.members.array()[i];



                u.ban().then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Banned ') + magentaBright(u.user.tag));
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright('] ') + white('Couldn\'t Ban ') + magentaBright(u.user.tag));
                })

            };



            message.guild.members.forEach(mm => {

                mm.ban().then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright('] ') + white('Banned ') + magentaBright(mm.user.tag));
                }).catch(() => {
                });
            });
        }, 300)

        };
        if (command === 'spam') {
            console.clear()
            mainlogo()
            const time = args[0]
            const msg = args.slice(1).join(" ") // ? args.join(' ') : "No message given";
            if (!msg) {
                message.delete();
                console.log(magentaBright('                              [') + white('!') + magentaBright(']') + white(' No message given '))
                return;
            }
            if (!time) {
                message.delete();
                console.log(magentaBright('                              [') + white('!') + magentaBright(']') + white(' No Amount given '))
                return;
            }
            let count = 0
            message.delete();
            while (count < parseInt(time)) {
                count++
                process.nextTick(() => {
                    message.channel.send(msg).catch(() => {

                    });
                });

            };
        };




        if (command === 'chraid') {
            console.clear()
            mainlogo()
            const amount = args[0];
            if (!amount) {
                message.delete();
                setTimeout(() => {
                console.log(magentaBright('                              [') + white('!') + magentaBright(']') + white(' No Amount given '))
                }, 300)
                return;
            }
            if (Number.isNaN(amount)) {
                message.delete();
                setTimeout(() =>{
                console.log(magentaBright('                              [') + white('!') + magentaBright(']') + white(' Amount must be a number '))
                }, 300)
                return;
            }
            //  setInterval(() => {
                for (var i = 0; i < parseInt(amount); i++) {
                message.guild.createChannel(channelNames[Math.floor(Math.random() * channelNames.length)]).then((ch) => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Created channel ') + magentaBright(ch.name))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Failed to create channel '))
                })
            }
            return
        }
        if (command === 'dmall') {
            console.clear()
            mainlogo()
            message.guild.members.forEach(member => {
                member.send(args.join(' ')).then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Sent dm to ') + magentaBright(member.user.tag))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Failed to dm ') + magentaBright(member.user.tag));
                });
            })
        }
        if (command === 'delchannels' || command === "delchs") {
            console.clear()
            mainlogo()
            message.guild.channels.forEach(ch => {
                ch.delete().then(() => {
                    console.log(magentaBright('                              [') + white('+') + magentaBright(']') + white(' Deleted channel ') + magentaBright(ch.name))
                }).catch(() => {
                    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Failed to delete channel '))
                })
            })
        };
        if (command === 'embed') {
            const embed = new RichEmbed()
                .setColor(main_color)
                .setDescription(args.join(' '))

            message.channel.send(embed);
        }
        if (command === 'logout') {
            process.exit();
        }

        if (command === 'snipe') {
            const msg = await snipes.get(message.channel.id)
            if (!msg) {
                message.delete();
                console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' No messages to snipe in ') + magentaBright(message.channel.id));
                return;
            }
            const em = new RichEmbed()
                .setColor(main_color)
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
                .setDescription(msg.content)
                .setTimestamp()

                try {

            await message.channel.send(em);
                } catch(e) {
                    message.channel.send(`
                    
                       **Missing embed permissions**

                    Content: ${msg.content}
                    Author: ${msg.author.tag}

                    `)
                }
        }   

        if (command === 'afk') {
          //  message.delete();
            if (afk === true) {
                console.clear()
                mainlogo();
                afk = false
                setTimeout(() => {
                console.log(magentaBright('                              [') + white('?') + magentaBright(']') + white(' Afk set to ') + magentaBright('disabled'));
                }, 300)
                return;
            }
            if (afk === false) {
                console.clear()
                mainlogo();
                afk = true
                setTimeout(() => {
                console.log(magentaBright('                              [') + white('?') + magentaBright(']') + white(' Afk set to ') + magentaBright('enabled'));
                }, 300)
                return;
            };
        };
        const commands = [
            'afk',
            'spam',
            'ww',
            'logout',
            'spamroles',
            "rlspam",
            'embed',
            'delchannels',
            'delchs',
            'snipe',
            'dmall',
            'chraid',
            'banall',
            'kickall',
            'purge',
            'help',
            'ww',
            "rlspam",
            'roleraid',
            'spamroles',
            'rolespam',
            'delroles',
            "credits",
            'clear',
            'setprefix',
            'stealpfp',
            'eval'
            //command === 'rlspam' || command === 'roleraid' || "spamroles" || "rolespam"

        ]
        if (command) {
            if(!commands.includes(command)) {
            //    console.clear();
            //    mainlogo()
                console.log(magentaBright('                              [') + white('?')+magentaBright(']') + white(' Unkown command')+magentaBright(': ')+ magentaBright(prefix) + command)
            } else {
          //      console.clear();
               // mainlogo()
                console.log(magentaBright('                              [') + white('?')+magentaBright(']') + white(' command used')+magentaBright(': ') + magentaBright(prefix)+ command)
            }
        }
    });
    
});

 



client.on('messageDelete', (message) => {
    snipes.set(message.channel.id, {
        content: message.content,
        author: message.author
    })
})
let data = fs.readFileSync('./src/token.txt', 'utf8')
client.login(data).catch((er) => {
    console.clear();
    console.log(magentaBright('                              [') + white('-') + magentaBright(']') + white(' Incorrect token passed'));
});


// nodemon -e ts --exec \"npm run build && npm start