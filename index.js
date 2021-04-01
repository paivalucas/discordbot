require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Iniciando BOT")
    })

client.on ("message", msg => {
    if(msg.content == "!ticket"){
    msg.channel.send ("Ticket aberto!")
    } else if (msg.content == "Dá coração aqui bot escravo") {
        msg.react("❤️")
    }
    })


client.login (process.env.BOT_TOKEN)
