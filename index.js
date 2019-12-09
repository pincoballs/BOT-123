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
const ytdl = require('ytdl-core');
bot.run = async (client,message,args,ops) =>{
    if(!message.member.channel) return message.channel.send('Please connect to a Voicechannel... u idiot');
    if(message.guild.me.channel) return message.channel.send('Sorry the bot is already connected in a voice channel');
    if(!args[0])return message.channel.send('Sorry,please input a url following the command.');
    message.guild.me.channel.leave();
    message.channel.send('Adios');
    let validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send('Sorry,please input a Valid URL');
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.channel.join();
    let dispatcher = await connection.play(ytdl(args[0],{filter: 'audioonly'}));
    message.channel.send(`Now playing : ${info.title}`)
}
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
        number = 1;
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
        number = 3;
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
        number = 2;
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
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "hackerman")){
        number = 5;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.hackerman[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});
bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "camebo")){
        number = 32;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.camebo[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});

bot.login(process.env.BOT_TOKEN);
