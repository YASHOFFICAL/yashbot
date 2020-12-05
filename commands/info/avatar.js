const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Get your own or someone else's avatar",
  usage: "[user mention]",
  category: "fun",
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`Your avatar!`);
      Embed.setDescription(message.author.displayAvatarURL());
      Embed.setColor(`RANDOM`);
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s avatar!`);
      Embed.setDescription(bot.users.cache.get(User.id).displayAvatarURL());
      Embed.setColor(`RANDOM`);
      return message.channel.send(Embed);
    }
  },
};
