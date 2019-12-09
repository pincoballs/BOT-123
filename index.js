const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='?';
const ytdl = require('ytdl-core');
var fs = require('fs');
var commandlist = fs.readFileSync('commandlist.txt', 'utf8');
var comandi = fs.readFileSync('comandi.txt', 'utf8');
var array=[];
array = require("./meme.json");
/*var meme = fs.readFileSync('meme.txt', 'utf8');*/
function emoji (id) { return clientInformation.emojis.get(id).toString (); }
bot.on('message', async msg => {
    if(msg.author.bot) return undefined;
    if(!msg.content.startsWith(PREFIX))return undefined;
    const args = msg.content.split(' ');

if(msg.content.startsWith(`${PREFIX}play`)||`${PREFIX}p`){
    const voiceChannel = msg.member.voiceChannel;
    if(!voiceChannel) return msg.channel.send('You must be in a voice channel to play music... u moron');
    const permissions = voiceChannel.permissionsFor(msg.client.user);

    const premissions = voiceChannel.permissionsFor(msg.client.user);
    if(!permissions.has('CONNECT')){
        return msg.channel.send('I cannot connecto to your voiche channel');

    }
    if(!permissoions.has('SPEAK')){
        return msg.channel.send('I cannot speak in this voicechannel');
    }
    try {
        var connection = await voiceChannel.join();
    }catch(error){
        console.error(`i cant join the voice channel :${error}`)
    return msg.channel.send(`i cant join the voice channel :${error}`);
    }
    const dispatcher = connection.playStream(ytdl(args[1]));
    dispatcher.setVolumeLogarithmic(5 / 5);
}else if (msg.content.startsWith(`${PREFIX}stop`)){
    if(!msg.member.voiceChannel)return msg.channel.send('You are not in a voice channel ');
    msg.member.voiceChannel.leave();
    return undefined;
}
})
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
