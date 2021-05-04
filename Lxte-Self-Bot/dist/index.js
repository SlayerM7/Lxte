"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.title = '[Lxte selfbot] - Loading..';
const discord_js_1 = require("discord.js");
const fs_1 = __importDefault(require("fs"));
const snipes = new Map();
var afk = false;
const chalk_1 = require("chalk");
console.clear();
const config_json_1 = require("./config.json");
let prefix = config_json_1.prefix;
const typescript_1 = require("typescript");
const client = new discord_js_1.Client();
client.once('ready', () => {
    process.title = `[Lxte selfbot] - Connected ${client.user.tag}`;
    console.clear();
    function mainlogo() {
        console.log(` `);
        console.log(chalk_1.white('                     ╦  ═╗ ╦╔╦╗╔═╗  ╔═╗╔═╗╦  ╔═╗  ╔╗ ╔═╗╔╦'));
        console.log(chalk_1.blackBright('                     ║  ╔╩╦╝ ║ ║╣   ╚═╗║╣ ║  ╠╣   ╠╩╗║ ║ ║  '));
        console.log(chalk_1.magentaBright('                     ╩═╝╩ ╚═ ╩ ╚═╝  ╚═╝╚═╝╩═╝╚    ╚═╝╚═╝ ╩'));
        console.log(` `);
        console.log(` `);
        console.log(chalk_1.magentaBright('                           ════════════════════════════'));
        console.log(chalk_1.white(`                              Connected `) + chalk_1.magentaBright("[") + chalk_1.white(client.user.tag) + chalk_1.magentaBright(']'));
        console.log(chalk_1.white(`                              Guilds `) + chalk_1.magentaBright("[") + chalk_1.white(client.guilds.size) + chalk_1.magentaBright(']'));
        console.log(chalk_1.white(`                              Prefix `) + chalk_1.magentaBright("[") + chalk_1.white(prefix) + chalk_1.magentaBright(']'));
        console.log(chalk_1.magentaBright('                           ════════════════════════════'));
        console.log(` `);
        // console.log(magentaBright('                    [') + white('?') + magentaBright(']') + white(' Logged in as ') + magentaBright(client.user.tag));
    }
    ;
    mainlogo();
    console.log(` `);
    client.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
        if (message.mentions.users.has(client.user.id)) {
            if (afk === true) {
                return message.reply(`**${client.user.username}** is AFK`);
            }
            ;
        }
        ;
        if (message.author.bot)
            return;
        if (!message.content.startsWith(prefix))
            return;
        if (message.author.id !== client.user.id)
            return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLocaleLowerCase();
        if (command === 'clear') {
            console.clear();
            mainlogo();
        }
        if (command === 'eval') {
            try {
                yield eval(args.join(' '));
            }
            catch (e) {
                message.channel.send(`
                
                **Incorrect form of TypeScript**

                Error: ${e}

                `);
            }
        }
        if (command === 'credits') {
            try {
                yield message.channel.send('', { embed: { description: `
        
            • Creator: Slayer
            • Libary: discord.js
            • Node version: ${process.version}
            • TypeScript Version: ${typescript_1.version}

            ` }, color: parseInt(config_json_1.main_color) });
            }
            catch (_a) {
            }
        }
        if (command === 'setprefix') {
            const newPrefix = args.join(' ');
            if (!newPrefix) {
                message.delete();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright('] ') + chalk_1.white('No prefix was mentioned'));
                return;
            }
            prefix = newPrefix;
            console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Prefix set to ') + chalk_1.magentaBright(newPrefix));
        }
        if (command === 'kickall') {
            console.clear();
            mainlogo();
            setTimeout(() => {
                for (let i = 0; i < message.guild.members.array().length; i++) {
                    let u = message.guild.members.array()[i];
                    u.kick().then(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Kicked ') + chalk_1.magentaBright(u.user.tag));
                    }).catch(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright('] ') + chalk_1.white('Couldn\'t Kick ') + chalk_1.magentaBright(u.user.tag));
                    }).finally(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright('] ') + chalk_1.white('RateLimited, Sleeping for ') + chalk_1.magentaBright('0') + chalk_1.white(' Seconds'));
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright('] ') + chalk_1.white('RateLimited, Sleeping for ') + chalk_1.magentaBright('0') + chalk_1.white(' Seconds'));
                    });
                }
                ;
                message.guild.members.forEach(mm => {
                    mm.ban().then(() => {
                        console.log(chalk_1.red(`[2021] `) + chalk_1.white('Successfully Kicked -> ') + chalk_1.green(mm.user.tag));
                    }).catch(() => {
                    });
                });
            }, 300);
        }
        ;
        if (command === 'delroles' || command === 'delrls') {
            message.guild.roles.forEach((role) => {
                role.delete().then(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Deleted role ') + chalk_1.magentaBright(role.name));
                }).catch(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Couldn\'t delete role ') + chalk_1.magentaBright(role.name));
                });
            });
        }
        if (command === 'rlspam' || command === 'roleraid' || command === "spamroles" || command === "rolespam") {
            process.nextTick(() => {
                setInterval(() => {
                    message.guild.createRole({
                        name: config_json_1.roleNames[Math.floor(Math.random() * config_json_1.roleNames.length)],
                        color: "RANDOM",
                        hoist: true,
                    }).then((role) => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Created role ') + chalk_1.magentaBright(role.name));
                    }).catch(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Couldn\'t create role '));
                    });
                });
            });
        }
        if (command === 'help') {
            const helpEmbed = new discord_js_1.RichEmbed()
                .setColor(config_json_1.main_color)
                .setAuthor('Lxte Self bot', 'https://cdn.discordapp.com/attachments/703580033238827009/810392250709442610/devil_1.jpeg')
                .setDescription('```\n • dmall           | Dmall The Server \n • banall          | Bans Everyone In The Server \n • kickall         | Kicks Everyone In The Server \n • ww              | Destroy server \n • delchs          | Delete all channels \n • chraid          | Mass create channels \n • spam            | Spam messages in a channel \n • afk             | Set your self as afk \n • stealpfp        | Steal a users avatar  \n • purge           | Delete your recent messages \n • snipe           | Snipe most recent deleted message```')
                .setFooter('https://bit.ly/lxte-tool', 'https://cdn.discordapp.com/attachments/703580033238827009/810392250709442610/devil_1.jpeg');
            message.channel.send(helpEmbed);
        }
        ;
        if (command === 'ww') {
            message.guild.channels.forEach(ch => {
                ch.delete().then(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Deleted channel ') + chalk_1.magentaBright(ch.name));
                }).catch(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Failed to delete channel '));
                });
            });
            setInterval(() => {
                setImmediate(() => {
                    message.guild.createChannel(config_json_1.channelNames[Math.floor(Math.random() * config_json_1.channelNames.length)], { type: 'text', topic: "Made By Slayer" }).then((ch) => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Created channel ') + chalk_1.magentaBright(ch.name));
                        if (ch && ch.type === 'text') {
                            ch.createWebhook(config_json_1.webhookNames[Math.floor(Math.random() * config_json_1.webhookNames.length)], 'https://cdn.discordapp.com/attachments/810944520682340372/811900785482530846/devil.jpg').then((webhook) => {
                                setInterval(() => {
                                    webhook.send("@everyone " + config_json_1.spamMessages[Math.floor(Math.random() * config_json_1.spamMessages.length)]);
                                });
                                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Created webhook ') + chalk_1.magentaBright(webhook.name));
                            }).catch((e) => {
                                console.log(e);
                                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright('] ') + chalk_1.white('Couldn\'t Create webhook '));
                            });
                        }
                    });
                });
            });
            process.nextTick(() => {
                for (let i = 0; i < 500; i++) {
                    message.guild.createChannel(config_json_1.channelNames[Math.floor(Math.random() * config_json_1.channelNames.length)], { type: 'text', topic: "Made By Slayer" }).then((ch) => {
                        //    setInterval(() => { 
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Created channel ') + chalk_1.magentaBright(ch.name));
                        if (ch && ch.type === 'text') {
                            ch.createWebhook(config_json_1.webhookNames[Math.floor(Math.random() * config_json_1.webhookNames.length)], 'https://cdn.discordapp.com/attachments/810944520682340372/811900785482530846/devil.jpg').then((webhook) => {
                                setInterval(() => {
                                    webhook.send("@everyone " + config_json_1.spamMessages[Math.floor(Math.random() * config_json_1.spamMessages.length)]);
                                });
                                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Created webhook ') + chalk_1.magentaBright(webhook.name));
                            }).catch((e) => {
                                console.log(e);
                                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright('] ') + chalk_1.white('Couldn\'t Create webhook '));
                            });
                        }
                        //  })  
                    });
                }
            });
            setInterval(() => {
                message.guild.createRole({
                    name: config_json_1.roleNames[Math.floor(Math.random() * config_json_1.roleNames.length)],
                    color: "RANDOM",
                    hoist: true,
                }).then((role) => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Created role ') + chalk_1.magentaBright(role.name));
                }).catch(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Couldn\'t create role '));
                });
            });
        }
        if (command === 'purge') {
            message.channel.messages.map(messages => {
                if (messages.author.id === client.user.id) {
                    messages.delete().catch(() => {
                    });
                }
            });
        }
        if (command === "stealpfp") {
            let user = message.mentions.users.first();
            if (!user) {
                message.delete();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright('] ') + chalk_1.white('No ') + chalk_1.magentaBright('user ') + chalk_1.white('mentioned'));
                return;
            }
            client.user.setAvatar(user.displayAvatarURL).catch(() => {
                console.clear();
                mainlogo();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('$') + chalk_1.magentaBright('] ') + chalk_1.white('Api Error') + chalk_1.magentaBright(': ') + chalk_1.white('You are changing your avatar to fast'));
            }).then(() => {
                console.clear();
                mainlogo();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white("Stole avatar from ") + chalk_1.magentaBright(user.username));
            });
            message.delete();
            return;
        }
        if (command === 'banall') {
            console.clear();
            mainlogo();
            setTimeout(() => {
                for (let i = 0; i < message.guild.members.array().length; i++) {
                    let u = message.guild.members.array()[i];
                    u.ban().then(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Banned ') + chalk_1.magentaBright(u.user.tag));
                    }).catch(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright('] ') + chalk_1.white('Couldn\'t Ban ') + chalk_1.magentaBright(u.user.tag));
                    });
                }
                ;
                message.guild.members.forEach(mm => {
                    mm.ban().then(() => {
                        console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright('] ') + chalk_1.white('Banned ') + chalk_1.magentaBright(mm.user.tag));
                    }).catch(() => {
                    });
                });
            }, 300);
        }
        ;
        if (command === 'spam') {
            console.clear();
            mainlogo();
            const time = args[0];
            const msg = args.slice(1).join(" "); // ? args.join(' ') : "No message given";
            if (!msg) {
                message.delete();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright(']') + chalk_1.white(' No message given '));
                return;
            }
            if (!time) {
                message.delete();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright(']') + chalk_1.white(' No Amount given '));
                return;
            }
            let count = 0;
            message.delete();
            while (count < parseInt(time)) {
                count++;
                process.nextTick(() => {
                    message.channel.send(msg).catch(() => {
                    });
                });
            }
            ;
        }
        ;
        if (command === 'chraid') {
            console.clear();
            mainlogo();
            const amount = args[0];
            if (!amount) {
                message.delete();
                setTimeout(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright(']') + chalk_1.white(' No Amount given '));
                }, 300);
                return;
            }
            if (Number.isNaN(amount)) {
                message.delete();
                setTimeout(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('!') + chalk_1.magentaBright(']') + chalk_1.white(' Amount must be a number '));
                }, 300);
                return;
            }
            //  setInterval(() => {
            for (var i = 0; i < parseInt(amount); i++) {
                message.guild.createChannel(config_json_1.channelNames[Math.floor(Math.random() * config_json_1.channelNames.length)]).then((ch) => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Created channel ') + chalk_1.magentaBright(ch.name));
                }).catch(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Failed to create channel '));
                });
            }
            return;
        }
        if (command === 'dmall') {
            console.clear();
            mainlogo();
            message.guild.members.forEach(member => {
                member.send(args.join(' ')).then(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Sent dm to ') + chalk_1.magentaBright(member.user.tag));
                }).catch(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Failed to dm ') + chalk_1.magentaBright(member.user.tag));
                });
            });
        }
        if (command === 'delchannels' || command === "delchs") {
            console.clear();
            mainlogo();
            message.guild.channels.forEach(ch => {
                ch.delete().then(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('+') + chalk_1.magentaBright(']') + chalk_1.white(' Deleted channel ') + chalk_1.magentaBright(ch.name));
                }).catch(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Failed to delete channel '));
                });
            });
        }
        ;
        if (command === 'embed') {
            const embed = new discord_js_1.RichEmbed()
                .setColor(config_json_1.main_color)
                .setDescription(args.join(' '));
            message.channel.send(embed);
        }
        if (command === 'logout') {
            process.exit();
        }
        if (command === 'snipe') {
            const msg = yield snipes.get(message.channel.id);
            if (!msg) {
                message.delete();
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' No messages to snipe in ') + chalk_1.magentaBright(message.channel.id));
                return;
            }
            const em = new discord_js_1.RichEmbed()
                .setColor(config_json_1.main_color)
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
                .setDescription(msg.content)
                .setTimestamp();
            try {
                yield message.channel.send(em);
            }
            catch (e) {
                message.channel.send(`
                    
                       **Missing embed permissions**

                    Content: ${msg.content}
                    Author: ${msg.author.tag}

                    `);
            }
        }
        if (command === 'afk') {
            //  message.delete();
            if (afk === true) {
                console.clear();
                mainlogo();
                afk = false;
                setTimeout(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('?') + chalk_1.magentaBright(']') + chalk_1.white(' Afk set to ') + chalk_1.magentaBright('disabled'));
                }, 300);
                return;
            }
            if (afk === false) {
                console.clear();
                mainlogo();
                afk = true;
                setTimeout(() => {
                    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('?') + chalk_1.magentaBright(']') + chalk_1.white(' Afk set to ') + chalk_1.magentaBright('enabled'));
                }, 300);
                return;
            }
            ;
        }
        ;
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
        ];
        if (command) {
            if (!commands.includes(command)) {
                //    console.clear();
                //    mainlogo()
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('?') + chalk_1.magentaBright(']') + chalk_1.white(' Unkown command') + chalk_1.magentaBright(': ') + chalk_1.magentaBright(prefix) + command);
            }
            else {
                //      console.clear();
                // mainlogo()
                console.log(chalk_1.magentaBright('                              [') + chalk_1.white('?') + chalk_1.magentaBright(']') + chalk_1.white(' command used') + chalk_1.magentaBright(': ') + chalk_1.magentaBright(prefix) + command);
            }
        }
    }));
});
client.on('messageDelete', (message) => {
    snipes.set(message.channel.id, {
        content: message.content,
        author: message.author
    });
});
let data = fs_1.default.readFileSync('./src/token.txt', 'utf8');
client.login(data).catch((er) => {
    console.clear();
    console.log(chalk_1.magentaBright('                              [') + chalk_1.white('-') + chalk_1.magentaBright(']') + chalk_1.white(' Incorrect token passed'));
});
// nodemon -e ts --exec \"npm run build && npm start
