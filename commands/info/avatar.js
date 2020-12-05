const Discord = require("discord.js");

module.exports = {
  name: "Avatar",
  category: "Fun",
  description: "profile avatar of anyone",
  usage: "avatar <@user>",
  run: (client, message, args) => {
    
  if (message.content.startsWith(prefix + 'avatar')) {
   let user = message.mentions.users.first();
   if(!user) user = message.author;
   let color = message.member.displayHexColor;
   if (color == '#000000') color = message.member.hoistRole.hexColor;
   const embed = new Discord.RichEmbed()
                   .setImage(user.avatarURL)
                   .setColor(color)
    message.channel.send({embed});
 
  }
}
 
 
