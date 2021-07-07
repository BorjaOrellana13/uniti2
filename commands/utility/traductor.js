const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
traductor = require("@k3rn31p4nic/google-translate-api")

module.exports = {
  name: "traductor", 
  alias: [],

execute (client, message, args){

const idioma = args[0]
if(!idioma) return message.channel.send("Tienes que escribir un idioma!")

const texto = args.slice(1).join(" ")
if(!texto) return message.channel.send("Tienes que escribir el texto que vas a traducir!")

traductor(texto, {
  to: idioma
}).then(res => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Traductor")
  .addField('Texto sin traducir: ', texto)
  .addField('Texto traducido: ', res.text)
  .setColor("GREEN")

  message.channel.send(embed)

 })

 }

}