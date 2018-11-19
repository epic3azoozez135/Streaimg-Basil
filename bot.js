onst Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "14"



client.on('message', function(message) {
    const myID = "439124716373147648";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send('SetName,Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "s")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1%27);
        message.channel.send('Streaming,Done!:notes:').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });

client.login(process.env.BOT_TOKEN);
