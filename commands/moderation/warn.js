const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warn = new db.crearDB('warn')

module.exports = {
  name: "warn",
  alias: [],

execute (client, message, args){

    var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send(":exclamation: | No tienes el permiso **expulsar miembros**")
  
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(":exclamation: | No tengo el permiso **expulsar miembros**")

  let person = message.mentions.users.first()

  if(!person) return message.channel.send(":exclamation: | Debes **mencionar** a alguien")

  var reason = args.slice(1).join(" ")

  if(!reason){

    reason = "No especificado"

  }

  if(!warn.tiene(`${message.guild.id}.${person.id}`))

  warn.establecer(`${message.guild.id}.${person.id}`, 0)

  warn.sumar(`${message.guild.id}.${person.id}`, 1)

  message.channel.send(`✅ | El usuario **${person}** fue advertido por: __${reason}__`)

  person.send(`🥽 | Fuiste advertido en el servidor: **${message.guild.name}** por: __${reason}__`)

 }

} 