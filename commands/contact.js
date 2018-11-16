module.exports.run = (bot, message, args, Discord) => {
let jargs = args.join(" ")
let res = new Discord.RichEmbed()
.setTitle("Developer Contact")
.setDescription("Contacting the bot's developer.")
.addField(`Contacting Developer for reason:`, ` ${jargs} `)
.setColor("GOLD")
message.channel.send({embed: res})

let dev = new Discord.RichEmbed()
.setTitle(`Message from: ${message.author.username}`)
.addField(`You were sent a message for reason:`, `${jargs}`)
}

bot.users.get("369256915479560192").send({embed:dev})

module.exports.help = {
  name: "contact"
}
