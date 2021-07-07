const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar", 
  alias: ["av"],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

    let user = message.mentions.users.first() || message.author || client.users.cache.get(args[0])

    const avatar = new MessageEmbed()
    .setDescription(`[Descargar Avatar](${user.displayAvatarURL({
        format: 'png',
        dynamic: true
    })})`)    
    .setImage(user.displayAvatarURL({dynamic: true, size: 1024 }))
    .setColor("RANDOM")
    .setFooter(`Avatar de: ${message.member.displayName}`);
    message.channel.send(avatar)

 }

}