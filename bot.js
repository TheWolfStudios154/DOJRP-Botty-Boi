const Discord = require("discord.js");
const bot = new Discord.Client();
//Required
const fs = require("fs")
//File System
const config = require("./config.json")
var prefix = ";"
//Prefix


bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});
//Reads commands from file


bot.on("message", message => {
  if(message.content == "Bot Tag")
    message.channel.send(";")
});

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
  }
})

bot.login(process.env.TOKEN)
