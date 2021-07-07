const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
let blacklist = new db.crearDB('blacklist');
module.exports = {
  name: "md", 
  alias: [],

execute (client, message, args){
  if(blacklist.tiene(message.author.id)) return message.channel.send('No puedes usar este comando, estás en la blacklist!')
let prefix = "g!";
message.content.slice(prefix.length).trim().split(/ +/g);

let perms = message.member.hasPermission("ADMINISTRATOR");
let user = message.mentions.members.first();
let mensaje = args.slice(1).join(' ');

if(!perms) return message.channel.send("No tienes permisos suficientes permisos para ejecutar este comando.") 
if(!user) return message.channel.send("No has mencionado a nadie para enviar el MD.") 
if(!mensaje) return message.channel.send("No has escrito el mensaje que quieres enviar.")

user.send(mensaje) 
message.channel.send("Mensaje enviado correctamente a "+user).then(m => m.delete(10000))
  
}

 }