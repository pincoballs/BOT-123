const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='K!';

var fs = require('fs');
var commandlist = fs.readFileSync('Kanna Kamui Help.txt', 'utf8');
var array=[];
array = require("./meme.json");
/*var meme = fs.readFileSync('meme.txt', 'utf8');*/
function emoji (id) { return clientInformation.emojis.get(id).toString (); }

bot.on('ready',() => { console.log("I'm ready to send nudes!"); } )

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "♡┆benvenuti")
    if(!channel)return
    channel.send(`Benvenuto ${member}<:kannakamui:608404704845889556>, siamo felici di accoglierti in ,**:cherry_blossom:𝕃𝕠𝕝𝕚𝕤𝕎𝕠𝕣𝕝𝕕:cherry_blossom:**.<a:zt:608309871896690689>
Non abusare delle bambine e buona permanenza! <:zhoulamerda:608396991436685344>`);
const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/original/001/241/247/c04.gif")
                    channel.send({embed})
});


bot.on('message', message =>{
    if (message.content.startsWith(PREFIX + "help") || message.content.startsWith(PREFIX + "commands")) 
    {
        const embed = new Discord.RichEmbed()
        .setColor('#6D466B')
        .setTitle('**Comandi**')
        .setDescription(commandlist)
        .setFooter("Powered by pinco.il.mago")
        message.channel.send(embed)   
};
});

bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "aotmeme")){
        number = 19;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.aotmeme[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "fuoco")){
        number = 9;
        var random = Math.floor(Math.random()*(number));
                const embed = new Discord.RichEmbed()
                    .setImage(array.fuoco[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "kannakamui")){
        number = 21;
        var random = Math.floor(Math.random()*(number));
const embed = new Discord.RichEmbed()
                    .setImage(array.kannakamui[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "loli")){
        number = 32;
        var random = Math.floor(Math.random()*(number));

const embed = new Discord.RichEmbed()
                    .setImage(array.loli[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "bestemmie")){
        number = 15;
        var random = Math.floor (Math.random() * (number));

const embed = new Discord.RichEmbed()
                    .setImage(array.bestemmie[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
     if(message.content.startsWith(PREFIX + "jojo")){
        number = 13;
        var random = Math.floor (Math.random() * (number));

    const embed = new Discord.RichEmbed()
                    .setImage(array.jojo[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
if(message.content.startsWith(PREFIX + "ahegao")){
    number = 24;
    var random = Math.floor (Math.random() * (number));

    const embed = new Discord.RichEmbed()
    .setImage(array.ahegao[random])
    .setFooter('Powered by pinco.il.mago')
    .setTimestamp()
    message.channel.send(embed)
        }
if(message.content.startsWith(PREFIX + "ravioli")){
    number = 7;
    var random = Math.floor (Math.random() * (number));

    const embed = new Discord.RichEmbed()
    .setImage(array.ravioli[random])
    .setFooter('Powered by pinco.il.mago')
    .setTimestamp()
    message.channel.send(embed)
    }
if(message.content.startsWith(PREFIX + "punch")){
    number = 26;
    var random = Math.floor (Math.random() * (number));

    const embed = new Discord.RichEmbed()
    .setImage(array.punch[random])
    .setFooter('Powered by pinco.il.mago')
    .setTimestamp()
    message.channel.send(embed)
        }
if(message.content.startsWith(PREFIX + "slap")){
    number = 35;
    var random = Math.floor (Math.random() * (number));

    const embed = new Discord.RichEmbed()
    .setImage(array.slap[random])
    .setFooter('Powered by pinco.il.mago')
    .setTimestamp()
    message.channel.send(embed)
        }
if(message.content.startsWith(PREFIX + "kiss")){
        number = 53;
        var random = Math.floor (Math.random() * (number));
        
        const embed = new Discord.RichEmbed()
        .setImage(array.kiss[random])
        .setFooter('Powered by pinco.il.mago')
        .setTimestamp()
        message.channel.send(embed)
                }
if(message.content.startsWith(PREFIX + "tata")){
    number = 14;
        var random = Math.floor (Math.random() * (number));
                    
        const embed = new Discord.RichEmbed()
                .setImage(array.tata[random])
                .setFooter('Powered by pinco.il.mago')
                .setTimestamp()
                message.channel.send(embed)
                            }
});

bot.login(process.env.BOT_TOKEN);