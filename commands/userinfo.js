module.exports.run = (bot, message, args, Discord) => {
    let member = message.mentions.members.first();
  let emb = new Discord.RichEmbed()
  .setTitle("User info")
  .setDescription(`Here is ${member.Username}'s user info.`)
  .addField("User Created at:", `${member.createdAt}`)
  .addField("Username", `${member.Username}`)
message.channel.send({embed: emb})
}
module.exports.help = {
  name: "userinfo"
}
