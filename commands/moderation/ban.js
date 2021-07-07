const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: [],

execute (client, message, args){

    if (!message.guild) return;
  
  
   
      const user = message.mentions.users.first();
      
      if (user) {
        
        const member = message.guild.member(user);
        
        if (member) {
       
          member
            .ban({
              reason: 'Usuario con mal comportamiento en el servidor',
            })
            .then(() => {
        
              message.reply(`Se baneó correctamente a ${user.tag}`);
            })
            .catch(err => {
             
              message.reply('Hey!  O no tienes permisos para banear a alguien, o no puedes porque su rol está encima del tuyo, no puedes por que su rol tiene permisos de administrador, o no puedes por que el rol de este bot está por debajo del rol que tiene el que quieres banear, o estás intentando banearte a ti o a mi');
              
              console.error(err);
            });
        } else {
          
          message.reply("Ups! no puedo banear a este usuario");
        }
      } else {
        
        message.reply('A quien baneo?! A ti? A mi? A el? Porfa la proxima asegurate mencionar a alguien');
      }
    }
  }
