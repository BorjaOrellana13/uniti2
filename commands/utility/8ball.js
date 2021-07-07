const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "8ball",
    alias: ["bola8"],

execute (client, message, args){


    let mensaje = args.slice().join(" ")
    if(!mensaje) return message.channel.send("Necesito que me digas una pregunta.");
    let respuestas = ["En mi opinión, si", "Es cierto", "Es decididamente asi", "Probablemente", "Buen pronostico", "Todo apunta a que si",
    "Sin duda", "Si", "Si, definitivamente", "Debes confiar en ello", "Respuesta vaga, vuelve a intentarlo", "Pregunta en otro momento",
    "Sera mejor que no lo diga ahora", "No puedo precedirlo ahora", "Concentrate y vuelve a preguntar", "Puede ser", "No cuentas con ello",
    "Mi respuesta es no", "Mis fuentes me dicen que no", "Las perspectivas no son buenas", "Muy dudoso"]

    const ball = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("Pregunta solicitada por: " + message.member.displayName, message.author.displayAvatarURL())
    .setTitle(` A la pregunta \`${mensaje}\`, de \`${message.author.username}\``)
    .setDescription(`Mi respuesta es: ${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)
    message.channel.send({ embed : ball })

}

}