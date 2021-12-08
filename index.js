const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const bot = new Client({
    intents:
        [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        ]
});

const WOKCommands = require('wokcommands')
const path = require('path')

const CCClient = require('currency-converter-lt')
let CC = new CCClient()

if (process.env.NODE_ENV !== 'production') {
    process.env.botactivity = process.env.botactivitydev;
}

bot.on("messageCreate", async msg => {
    if (!msg.author.bot) {



        if (msg.content == "testing") {
            // do something
        }




    }
});

bot.on('error', (error) => { console.log(error) });
bot.on("ready", () => {
    console.log(`Bot has started`)

    new WOKCommands(bot, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['650058489401442326'],
        showWarns: true,
        botOwners:'190141079184605185',

      })
      .setDefaultPrefix('+')
      .setColor(0x52307c)


    bot.user.setActivity(`${process.env.botactivity}`);
    bot.user.setUsername("Dev")
      const image = 'https://static.wikia.nocookie.net/2007scape/images/0/0a/Wise_Old_Man.png/revision/latest/top-crop/width/360/height/360?cb=20171211175901'
      bot.user.setAvatar(image)
})
bot.once("reconnecting", () => {
    console.log("Reconnecting!");
})
bot.once("disconnect", () => {
    console.log("Disconnect!");
})
bot.login(process.env.token);