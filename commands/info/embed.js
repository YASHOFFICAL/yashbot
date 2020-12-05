const Discord = require("discord.js")


module.exports = {
  name: "embed",
  usage: "embed <#colourcode> <message>",
  description: "embed your message",
  category: "main",
  run: async (bot, message, args) => {
      if (!args[0]) return message.chennal.send("color is a required argument that is missing")
      if (!args[1]) return message.chennal.send("text is a required argument that is missing")
      const Embed = new Discord.MessageEmbed()
          .setDescription( args[1] )
          .setColor(args[0])
      
      
           return message.channel.send(Embed)

    
    
    
    
  }
}

