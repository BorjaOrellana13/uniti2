const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warn = new db.crearDB('warn')

module.exports = {
  name: "warns",
  alias: [],

async execute (client, message, args){

    var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send(":exclamation: | No tienes el permiso **expulsar miembros**")
  
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(":exclamation: | No tengo el permiso **expulsar miembros**")

  let person = message.mentions.members.first()

  if(!person) return message.channel.send(":exclamation: | Debes **mencionar** a alguien")

  let quantity = await warn.obtener(`${message.guild.id}.${person.id}`)

  if(!warn.tiene(`${message.guild.id}.${person.id}`)){

    message.channel.send(":exclamation: | Ese usuario **no** tiene advertencias")

    return;

  }

  message.channel.send(`✅ | El usuario **${person}** tiene: **${quantity}** advertencias`)

 }

} 