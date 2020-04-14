const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./botconfig.json")

var isReady = true;

client.on('ready', () => {
    console.log(`Logged in!`);
  });

const prefix = "!";
//L

const rando_vids = [
    'vids/1.mp4',
    'vids/2.mp4',
    'vids/3.mp4',
    'vids/4.mp4',
    'vids/5.mp4',
    'vids/6.mp4',
    ]

    function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min + 1) + min
        )
      }
//let the commands begin



client.on('message', async (message) => {
    if (message.content.startsWith(prefix + "pog")) {
        message.channel.send("POGGERS");
        message.channel.send("https://tenor.com/view/pogchamp-pog-pogey-poggers-twitch-gif-14340727");
    }

    //uwu command
    if (message.content.startsWith("uwu")) {
        message.channel.send("shut the fuck up furry")
    }
//owo command
    if (message.content.startsWith("owo")) {
        message.channel.send("shut the fuck up furry")
    }
//fake ban command
    if (message.content.startsWith(prefix + "ban ")) {
        message.channel.send("<@" + message.mentions.users.first().id + "> has been banned.")
    }
//gay % command
    if (message.content.startsWith(prefix + "gay ")) {
        message.channel.send("<@" + message.mentions.users.first().id + "> is " + Math.floor(Math.random() * 99) + "% gay.")
    }
//earth flat command
    if (message.content.startsWith("the earth is flat")) {
        message.channel.send("the biggest dumbass in the server goes to <@" + message.author + ">")
        message.channel.send("good job")
    }
//kazak pres command
    if (message.content.startsWith(prefix + "pres")) {
        message.channel.send("kazakhstan president is better :)")
    }
//internet connection command
    if (message.content.startsWith(prefix + "github")) {
        message.channel.send("i am on the internet now B)")
    }
//jessestaff command
    if (message.content.startsWith(prefix + "jessestaff")) {
        message.channel.send("https://tenor.com/view/green-gif-5490562")
    }
//random video command
    if (message.content.startsWith(prefix + "random-vid")) {
        message.channel.send(`here`, {
            files: [
                rando_vids[Math.floor(Math.random() * rando_vids.length)]
            ]
        });
    }
    
//music make you lose control command
    if (isReady && message.content.startsWith(prefix + "music")) {
     isReady = false;
     message.channel.send("music make you lose control")
     var voiceChannel = message.member.voice.channel;
     voiceChannel.join()

        .then(connection => {
          const dispatcher = connection.play("music.mp3");
          dispatcher.setVolumeDecibels('10')
         })

         function function2() {
            message.member.voice.channel.leave();
         }

         setTimeout(function2, 7000);
         isReady = true;
    }

    if (message.content.startsWith(prefix + "stopvc")) {
        message.member.voice.channel.leave();
    }

    

//challenger command
    if(message.content.startsWith(prefix + "challenge ")) {
        message.channel.send("<@" + message.author + "> has challenged <@" + message.mentions.users.first().id + ">!")
        const challanged = message.mentions.users.first().id
        const challanger = message.author
        
        if (between(1, 3) == 2) {
            message.channel.send("<@" + message.mentions.users.first().id + "> has won the fight!")
        } else {
            message.channel.send("<@" +message.author + "> has won the fight!")
        }
        
    }
//help command
    if (message.content.startsWith(prefix + "help")) {
        const Embedhelp = new Discord.MessageEmbed()
        .setColor('#3C9A0A')
        .setTitle('Help Section')
        .setDescription('just some of the commands for the bot')
        .addField('!pog', 'poggers gif', true)
        .addField('!ban', 'fake ban command for pranks', true)
        .addField('!gay', 'sends percentage of how gay u are', true)
        .addField('!pres', ':)', true)
        .addField('!github', 'tests connection to github', true)
        .addField('!jessestaff', 'green gif', true)
        .addField('!random-vid', 'sends random video', true)
        .addField('!challenge', 'challange someone to a duel!', true)
        .setThumbnail('https://i.imgur.com/QkdBT4w.png')



        message.channel.send(Embedhelp);
    }
})

//login for token
client.login(botconfig.token);