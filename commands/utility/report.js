
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "report", 
  alias: [],

execute (client, message, args){
    let reportado = message.mentions.members.first()//aqui se esta creando una variable

    let razon = args.slice(1).join(" ")

    if(!reportado) return message.channel.send(`${message.author.tag} Menciona al usuario que vas a reportar, o a Gatete para reportar un bug`)//Uso de Mencion al usuario
    if(!razon) return message.channel.send(`${message.author.tag}  Menciona una Razon del reporte`)

          message.channel.send("El reporte salió bien!, espere que algun admin/mod lo vea").then(rm=> {
              setTimeout(() => {
               rm.react("862470229308342292")
       }, 0); 
      })
          let rcanal = client.channels.cache.get('862470229308342292');

           let reporte = new Discord.MessageEmbed() 
           .setTitle("Sistema de Reportes")
           .setThumbnail(message.author.displayAvatarURL())
           .addField("Reportante", message.author.tag)
           .addField("Reportado", reportado)
           .addField("Razon del Reporte", razon)
           .setColor("RANDOM")
           .setTimestamp()

           rcanal.send(reporte).then(r => {
           setTimeout(() => {
            r.react("856199334181077032")
    }, 0);
  });
}
}