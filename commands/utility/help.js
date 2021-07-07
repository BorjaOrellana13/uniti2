const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
let blacklist = new db.crearDB('blacklist');
module.exports = {
  name: "help", 
  alias: [],

execute (client, message, args){

 if(blacklist.tiene(message.author.id)) return message.channel.send('No puedes usar este comando, estás en la blacklist!')

const embedprincipal = new Discord.MessageEmbed()

.setTitle("Comandos de Uniticraf【BOT】")
.setDescription("Reacciona con 🥽 para ir al apartado de moderación!\n\n Usa **u!8ball**\n\n Reacciona con 🌭 si quieres ir al apartado de diversión!\n\nReacciona con 🎁 si quieres volver a este apartado!\n\n[Support Server](https://discord.gg/vH66n37bP3),                 [Invítame!](https://discord.com/oauth2/authorize?client_id=850726787171614741&scope=bot&permissions=8589934591)")
.setImage("https://cdn.discordapp.com/attachments/838318831863726083/853552526779482122/Gatete.gif")
.setColor("RANDOM")


const embedmoderacion = new Discord.MessageEmbed()

.setTitle("Moderación")
.setDescription("`g!ban` Banea a un miembro. Ejemplo: *g!ban [@usuario]*\n`g!kick` Kickea a un miembro. Ejemplo: *g!kick [@usuario]*\n`g!clear` Borra los mensajes que quieras. Ejemplo: *g!clear 5*\n`g!nuke` Borra todos los mensajes del canal sin importar cuantos sean. Ejemplo: *g!nuke*\n`g!lock` Hace que los miembros no puedan hablar en el canal. Ejemplo: *g!lock*\n`g!unlock` Los miembros pueden mandar de nuevo mensajes al canal. Ejemplo: *g!unlock*\n`g!md` Manda un mensaje privado que quieras a un miembro a través del bot. Ejemplo: *g!md [@usuario] Hola! Como estás?*\n`g!addrol` Añade un rol a un usuario. Ejemplo: *g!addrol [@Rol] [@usuario*\n`g!warn` Advierte a un usuario. Ejemplo: *g!warn [@usuario] Hizo spam en el server.*\n`g!warns` Muestra cuantas advertencias tiene x usuario. Se debe usar cada vez que pongas una advertencia para saber cuántas tiene ese usuario. Si tiene 3 o las que prefieras, kickéale o banéalo del servidor. Ejemplo: *g!warns [@usuario]*")
.setImage("https://cdn.discordapp.com/attachments/838318831863726083/853552526779482122/Gatete.gif")
.setColor("RANDOM")

const embedutilidad = new Discord.MessageEmbed()

.setTitle("Utilidad")
.setDescription("`g!help` Muestra la lista de comandos. Ejemplo: *g!help*\n`g!avatar` Saca el avatar de un usuario o de tí. Ejemplo: *g!avatar*, *g!avatar [@usuario]*\n.`g!dado` Tira un dado! Ejemplo: *g!dado*\n`g!invite` Manda un enlace con la invitación del bot. Ejemplo: *g!invite*\n`g!support` Manda el servidor de soporte del bot. Ejemplo: *g!support*\n`g!report` Manda un rbug del bot o un usuario malicioso al servidor de soporte. Ejemplo: *g!report El bot se ha desconectado! [Inserte **siempre** su nombre de usuario y su tag]*\n`g!blacklist` Muestra todos los usuarios maliciosos/raiders/hackers que el equipo de soporte del bot pueda haber encontrado. Si quiere más información, le recomendamos encarecidamente que use el comando g!blacklist. Ejemplo: *g!blacklist*\n`g!serverinfo` Muestra los datos actuales del servidor. Ejemplo: *g!serverinfo*")
.setImage("https://cdn.discordapp.com/attachments/838318831863726083/853552526779482122/Gatete.gif")
.setColor("RANDOM")

const embeddiversion = new Discord.MessageEmbed()

.setTitle("Diversión")
.setDescription("`g!8ball` Haz una pregunta a la legendaria Bola 8. Ejemplo: *g!8ball Que debería hacer ahora?*\n`g!horoscopo` Mira tu horoscopo. Ejemplo: *g!horoscopo*\n`g!lindometro` Mide lo lind@ que eres. Ejemplo: *g!lindometro*\n`g!love` Mira como sería tu relación con x persona. Ejemplo: *g!love [@usuario] [@usuario]*\n`g!randomnum` Muestra un número random del 1 al 10. Ejemplo: *g!randomnum*\n`g!link` Acorta el link que quieras. Ejemplo: *g!link https://discord.gg/vH66n37bP3*\n`g!wikipedia` Muestra información random de wikipedia. Ejemplo: *wikipedia*\n`g!cat` Muestra a un gatito random. Ejemplo: *g!cat*\n`g!letra` Dice tu texto con letra grande. Ejemplo: *g!letra 7AFFA9 Hola!*  **Todos los códigos de colores:** https://htmlcolorcodes.com\n`g!hack` Simula un hackeo a alguien. Ejemplo: *g!hack [@usuario]*\n`g!sayembed` Dice lo que tú quieras en un embed. Ejemplo: *g!sayembed Hola! Como estas?*\n`g!dog` Muestra a un bonito perro! Ejemplo: *g!dog*\n`g!stonks` Uffff... ***Stonks.*** Ejemplo: *g!stonks*\n`g!ascii` Pone un texto en forma ascii. Ejemplo: *g!ascii Hola!*")
.setImage("https://cdn.discordapp.com/attachments/838318831863726083/853552526779482122/Gatete.gif")
.setColor("RANDOM")


message.channel.send(embedprincipal).then(msg => {


msg.react("🎁")
msg.react("🥽")
msg.react("✨")
msg.react("🌭")


msg.awaitReactions((reaction, user) =>{
  if(message.author.id !== user.id) return;

  
  if(reaction.emoji.name === '🥽'){
reaction.users.remove(user.id)
msg.edit(embedmoderacion)
  }

    if(reaction.emoji.name === '🎁'){
reaction.users.remove(user.id)
msg.edit(embedprincipal)
  }

    if(reaction.emoji.name === '✨'){
reaction.users.remove(user.id)
msg.edit(embedutilidad)
  }

    if(reaction.emoji.name === '🌭'){
reaction.users.remove(user.id)
msg.edit(embeddiversion)
  }


})
})
    if (!message.guild.me.permissions.has('MANAGE_EMOJIS')) {
  return message.channel.send('Hey! Perdona, pero no tengo permisos de gestionar reacciones, por lo cual no podré eliminar tus reacciones, le tendrás que dar 2 veces para pasar de página, perdon <:XD:849304595372441646>')
    }

  }
}

