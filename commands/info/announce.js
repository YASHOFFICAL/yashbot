const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<msg>",
  run: async (bot, message, args) => {
    
    let MSG = message.content
    
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
      const Embed = new Discord.MessageEmbed()
      .setDescription(`${MSG}`)
      .setColor("RANDOM");
  },
};
