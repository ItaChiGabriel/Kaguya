const {Client, Intents} = require('discord.js')
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES]})
const config = require('./config.json')
const youtube = require("discord-ytdl-core")

client.login(config.token)

client.on('ready', () =>{
    console.log('kaguya pronta. Prefix:' + config.prefix)
    client.user.setPresence({
        status: "idle",

    activities: [{name:"Em Desenvolvimento", type:"STREAMING", url:"https://www.twitch.tv/gabrielgomesbrg"}]
    })
})

client.on('messageCreate', message =>{
    if(message.content.toString() == "hello"){
        message.reply('Hi')
    }
})

client.on('messageCreate', message =>{
if(message.author.bot) return;
//
if(message.channel.type == 'DM') return;
//
//
// 
if(!message.content.toLocaleLowerCase().startsWith(config.prefix.toLowerCase())) return;
//
//
//
//
if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}`)) return

const gb = message.content.trim().slice(config.prefix.length).split(/ +/g)

const comandogb = gb.shift().toLowerCase();

try{
    let comandolindo = require(`./scr/${comandogb}.js`)
    comandolindo.run(client, message, gb);
} catch (err) {
    console.error('Gabrielseliga:' + err)
}
})

