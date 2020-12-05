const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "embed",
  usage: "embed <#colourcode> <message>",
  description: "embed your message",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("please give message")
    }
    
    
    let embed = new MessageEmbed()
    .setColor(" ")
    .setDescription(args.join(" "))
    
    
  }
}
