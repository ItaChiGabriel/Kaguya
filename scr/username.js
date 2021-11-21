const Discord = require("discord.js");


module.exports = {
    name:"username",
    author: "Gabriel",
    descripton:"Hello",

run: async(client, gabriel, args) =>{

if(!gabriel.member.permissions.has('ADMINISTRATOR')){
    const gabrielpermission = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic: true}))
    .setTitle(`Ei?`)
    .setDescription(`⚠ |${gabriel.author} Você não tem permissão, para esse comando.`)
    .setThumbnail(gabriel.guild.iconURL({dynamic: true}))
    .setTimestamp()
    .setFooter(`Requisitado por ${gabriel.author.tag} - (cc)Alguns Direitos Reservados`, gabriel.author.displayAvatarURL({dynamic: true}))
    .setColor('GOLD')
    .setURL('https://discord.com/oauth2/authorize?client_id=891007072693530625&permissions=8&scope=bot')
    return  gabriel.channel.send({embeds: [gabrielpermission]})
}

const text = args.slice(0).join(' ')

if(!text){
    return gabriel.channel.send('bote a porra do texto fdp')
}

client.user.setActivity({name:text})

  }
}