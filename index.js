const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='?';

var fs = require('fs');
var commandlist = fs.readFileSync('commandlist.txt', 'utf8');
var comandi = fs.readFileSync('comandi.txt', 'utf8');
var array=[];
array = require("./meme.json");
/*var meme = fs.readFileSync('meme.txt', 'utf8');*/
function emoji (id) { return clientInformation.emojis.get(id).toString (); }

bot.on('ready',() => { console.log("I'm ready to send nudes!"); } )

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "nuovi-giocatori")
    if(!channel)return
    channel.send(`Benvenuto ${member} e preparati a morire in una trincea!`);
const embed = new Discord.RichEmbed()
                    .setImage("https://media3.giphy.com/media/B5wsiHIFt2QkU/giphy.gif")
                    channel.send({embed})
});
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "new-recruits")
    if(!channel)return
    channel.send(`Welcome ${member} and be ready to die in a trench!`);
const embed = new Discord.RichEmbed()
                    .setImage("https://media3.giphy.com/media/B5wsiHIFt2QkU/giphy.gif")
                    channel.send({embed})
});


bot.on('message', message =>{
    if (message.content.startsWith(PREFIX + "help") || message.content.startsWith(PREFIX + "commands")) 
    {
        const embed = new Discord.RichEmbed()
        .setColor('#6D466B')
        .setTitle('**Commands**')
        .setDescription(commandlist)
        .setFooter("Powered by pinco.il.mago")
        message.channel.send(embed)   
};
});
bot.on('message', message =>{
    if (message.content.startsWith(PREFIX + "aiuto") || message.content.startsWith(PREFIX + "comandi")) 
    {
        const embed = new Discord.RichEmbed()
        .setColor('#6D466B')
        .setTitle('**Comandi**')
        .setDescription(comandi)
        .setFooter("Powered by pinco.il.mago")
        message.channel.send(embed)   
};
});

bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "starter")){
        number = 5;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.starter[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "badmods")){
        number = 3;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.badmods[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "pincoballs")){
        number = 3;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.pincoballs[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "battlehammer")){
        number = 2;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.battlehammer[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "adrianus")){
        number = 32;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.adrianus[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "thomas")){
        number = 2;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.thomas[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "bunio")){
        number = 2;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.bunio[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "mao")){
        number = 3;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.mao[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "kingdra")){
        number = 1;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.kingdra[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});

bot.login(process.env.BOT_TOKEN);
