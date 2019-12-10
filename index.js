const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='?';
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
var fs = require('fs');
var commandlist = fs.readFileSync('commandlist.txt', 'utf8');
var comandi = fs.readFileSync('comandi.txt', 'utf8');
var array=[];
array = require("./meme.json");
const youtube = new YouTube(process.env.GOOGLE_API_KEY);
const queue = new Map();

/*var meme = fs.readFileSync('meme.txt', 'utf8');*/
function emoji (id) { return clientInformation.emojis.get(id).toString (); }
bot.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${PREFIX}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${PREFIX}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${PREFIX}stop`)) {
		stop(message, serverQueue);
		return;
    }else if(message.content.startsWith(`${PREFIX}np`)){
        if(!serverQueue)return message.channel.send('There is nothing to stop playing');
        return message.channel.send(`Now playing ${serverQueue.songs[0].title}`);
        
    }
    else if(message.content.startsWith(`${PREFIX}queue`)){
        if(!serverQueue)return message.channel.send('There is nothing playing');
        return message.channel.send(`
        **SONG QUEUE**
        ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
        **Now Playing** ${serverQueue.songs[0].title}`);
    }else if(message.content.startsWith(`${PREFIX}pause`)){
        if(serverQueue && serverQueue.playing){
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send('Music Paused');}return message.channel.send('Theres nothing playing');
    }else if(message.content.startsWith(`${PREFIX}resume`)){
        if(serverQueue && !serverQueue.playing){
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('Music Resumed');
        }return message.channel.send('Theres nothing playing');
    }
    else {
		message.channel.send('You need to enter a valid command!')
	} 
    
    
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1].replace(/<(.+)>/g, '$1');
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }
    try{var video = await youtube.getVideo(url);}catch(error){
    try {
            var videos = await youtube.getVideos(searchString, 1);
            var video = await youtube.getVideoByID(videos[0], id);
    }catch (err){
        console.error(err);
        return message.channel.send('No Research result.');
    }}
    	const song = {
            id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
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
