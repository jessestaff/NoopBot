const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./botconfig.json")

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


//let the commands begin

client.on('message', async (message) => {
    if (message.content.startsWith(prefix + "pog")) {
        message.channel.send("POGGERS");
        message.channel.send("https://tenor.com/view/pogchamp-pog-pogey-poggers-twitch-gif-14340727");
    }

    if (message.content.startsWith("uwu")) {
        message.channel.send("shut the fuck up furry")
    }

    if (message.content.startsWith("owo")) {
        message.channel.send("shut the fuck up furry")
    }

    if (message.content.startsWith(prefix + "ban ")) {
        message.channel.send("<@" + message.mentions.users.first().id + "> has been banned.")
    }

    if (message.content.startsWith(prefix + "gay ")) {
        message.channel.send("<@" + message.mentions.users.first().id + "> is " + Math.random(1,100) + "% gay.")
    }

    if (message.content.startsWith("the earth is flat")) {
        message.channel.send("the biggest dumbass in the server goes to <@" + message.author + ">")
        message.channel.send("good job")
    }

    if (message.content.startsWith(prefix + "pres")) {
        message.channel.send("kazakhstan president is better :)")
    }

    if (message.content.startsWith(prefix + "github")) {
        message.channel.send("i am on the internet now B)")
    }

    if (message.content.startsWith(prefix + "jessestaff")) {
        message.channel.send("https://tenor.com/view/green-gif-5490562")
    }

    if (message.content.startsWith(prefix + "random-vid")) {
        message.channel.send(`here`, {
            files: [
                rando_vids[Math.floor(Math.random() * rando_vids.length)]
            ]
        });
    }
})

//login for token
client.login(botconfig.token);