const discord = require('discord.js')
const ytdl = require('ytdl-core')
const stremOptions = {seek: 0, volume: 1}

exports.run = async(client, msg, args) => {

    if(msg.author.bot) {
        return;
    }

  
  
  let voice = msg.guild.channels.cache.find( channel => channel.id === "874368492248367116")

  if(voice == null){
      return channel.send("nada")
  }

  voice.join().then(connection =>{
            const strem = ytdl('https://www.youtube.com/watch?v=jLaLdlDG5aM', {filter: "audioonly"})

            const dj = connection.playStrem(strem, stremOptions)
            dj.on('end', end => {
                voice.leave();
            })
  })
}