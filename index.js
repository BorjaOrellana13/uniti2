const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()
/////////////////////EMPIEZA TU BOT////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client;
const db = require("megadb")
const prefix_db = new db.crearDB("prefix")
    let prefix;


      client.on("message", (message) => {
        if(message.content.startsWith('.hola')) {
          message.channel.send("Hola! Como estas? :3");
        }
      
      });

// Handler

const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const funnyCommandFiles = fs.readdirSync('./commands/funny').filter(file => file.endsWith('.js'));

const utilityCommandFiles = fs.readdirSync('./commands/utility').filter(file => file.endsWith('.js'));

const moderationCommandFiles = fs.readdirSync('./commands/moderation').filter(file => file.endsWith('.js'));

const randomCommandFiles = fs.readdirSync('./commands/random').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of funnyCommandFiles) {
  const command = require(`./commands/funny/${file}`)
  client.commands.set(command.name, command)
}

for (const file of utilityCommandFiles) {
  const command = require(`./commands/utility/${file}`)
  client.commands.set(command.name, command)
}

for (const file of moderationCommandFiles) {
  const command = require(`./commands/moderation/${file}`)
  client.commands.set(command.name, command)
}

for (const file of randomCommandFiles) {
  const command = require(`./commands/random/${file}`)
  client.commands.set(command.name, command)
}

// Evento Message

client.snipe = new Map()

client.on('message', async message => { 

  let prefix;
  if(prefix_db.tiene(message.guild.id)) {
    prefix = await prefix_db.obtener(message.guild.id)
  } else {
  prefix = 'u!'
  }
  
  if(message.author.bot) return; 
  if(!message.content.startsWith(prefix)) return; 
  
  let usuario = message.mentions.members.first() || message.member; 
  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}
  })

//Evento ready


client.on('ready', async ()  =>  {
    console.log('Estoy listo!');
  });
client.login(process.env.TOKEN);