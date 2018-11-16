module.exports.run = (bot, message, args, Discord) => {
  let emb = new Discord.RichEmbed()
  .setTitle("Bot coming soon.")
  .setDescription("This bot is coming soon.")
  
  message.channel.send({embed: emb})
}
module.exports.help = {
  name: "help"
}
