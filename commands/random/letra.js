const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "letra", 
  alias: [],

execute (client, message, args){

const {MessageAttachment} = require("discord.js")

let color = args[0]

 if(!color) return message.channel.send("Necesitas poner un color")

 let texto = args.slice(1).join(" ")

 if(!texto) return message.channel.send("Necesitas poner un texto")

 let imagen = new MessageAttachment(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=${color}&text=${texto}`, "fortnite.png")

  message.channel.send(imagen)

 }

} 