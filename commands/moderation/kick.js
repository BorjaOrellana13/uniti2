const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick", 
  alias: [],

execute (client, message, args){

  

    if (!message.guild) return;
  
      const user = message.mentions.users.first();
    
      if (user) {
        
        const member = message.guild.member(user);
      
        if (member) {
         
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              
              message.reply(`Se expulsó a ${user.tag}`);
            })
            .catch(err => {
          
              message.reply('Ups! al parecer no puedo expulsar a este usuario');
            
              console.error(err);
            });
        } else {
        
          message.reply("Ups! al parecer no puedo expulsar a este usuario");
        }
        
      } else {
        message.reply("UY! se te olvido mencionar al usuario al cual quieres expulsar");
      }
    }
  }