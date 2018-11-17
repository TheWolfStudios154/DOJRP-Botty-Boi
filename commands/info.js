module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Bot Info")
.setDescription("Heres my info")
.addField("Ping:", `${Math.floor(bot.ping)} ms`)
.addField("Prefix", ";")
.addField("Developer", `<@!369256915479560192>`)
.addField("Version Number", "00.2")
message.channel.send({embed: em})
}
module.exports.help = {
  name: "info"
}
