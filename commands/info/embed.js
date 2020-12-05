const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "embed",
  usage: "embed <#colourcode> <message>",
  description: "embed your message",
  category: "main",
  run: async (client, message, args) => {
      if (!args[0]) return message.chennal.send(```${prefix}embed [chn] <color> <text>
             ^^^^^^^
color is a required argument that is missing.```)
      if (!args[1]) return message.chennal.send(```${prefix}embed [chn] <color> <text>
                     ^^^^^^
text is a required argument that is missing.```)
      const Embed = new Discord.MessageEmbed()
          .setDescription(args[2])
          .setColor(args[1])
          message.channel.send(Embed)
    
    
    
    
  }
}

