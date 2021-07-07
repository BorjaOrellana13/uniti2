const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "dado", 
  alias: ["d"],

execute (client, message, args){

  let links = [
    'https://media.discordapp.net/attachments/836677869034930218/836679407737241656/dado1.png?width=683&height=670',
    'https://media.discordapp.net/attachments/836677869034930218/836679409909366784/dado2.png',
    'https://media.discordapp.net/attachments/836677869034930218/836679413286174780/dado3.png?width=683&height=670',
    'https://media.discordapp.net/attachments/836677869034930218/836679413961457724/dado4.png?width=683&height=670',
    'https://media.discordapp.net/attachments/836677869034930218/836679416737300530/dado5.png?width=683&height=670',
    'https://media.discordapp.net/attachments/836677869034930218/836679420290924614/dado6.png?width=683&height=670'
  ]
  var dado = links[Math.floor(Math.random() * links.length)];
  const embed5 = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} ha tirado el dado.`)
  .setDescription(':game_die: El dado a caido en:')
  .setImage(dado)
  .setColor("RANDOM");

  message.channel.send(embed5);
 }

} 