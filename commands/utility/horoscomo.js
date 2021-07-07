const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "horoscopo", 
  alias: [],

execute (client, message, args){

  const member = message.mentions.members.first() || message.member

    let amor = [Math.round(Math.random()*100)]
    let salud = [Math.round(Math.random()*100)]
    let suerte = [Math.round(Math.random()*100)]
    let dinero = [Math.round(Math.random()*100)]
    let trabajo = [Math.round(Math.random()*100)]

    const embed1 = new Discord.MessageEmbed()

    .setTitle(`**${member.user.tag}** Tu Horoscopo es: `)
    .setDescription(`Amor :heart: **${amor}**\nSalud :mask: **${salud}**\nTrabajo :briefcase: **${trabajo}**\nDinero :moneybag: **${dinero}**`)
    .setFooter("Consulta por: " + message.member.displayName, message.author.displayAvatarURL())
    .setColor("RANDOM")

    message.channel.send(embed1)
 }

} 