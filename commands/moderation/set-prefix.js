const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const prefix_db = new db.crearDB("prefix")
module.exports = {
  name: "set-prefix", 
  alias: [],

execute (client, message, args){

var perms = message.member.hasPermission("ADMINISTRATOR")
if(!perms) return message.channel.send("No tienes suficientes permisos!")

if(!args[0]) return message.channel.send("Tienes que decir un prefijo!")

prefix_db.establecer(message.guild.id, args[0])

message.channel.send(`El prefijo ha sido cambiado a **${args[0]}**`)

 }

}