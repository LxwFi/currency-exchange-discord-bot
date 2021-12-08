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
}   // this can be removed and updated manually at the bottom

bot.on("messageCreate", async msg => {
    if (!msg.author.bot) {



        if (msg.content == "testing") {
            // do something
        }


        // this is just placeholder, can be entirely deleted if you dont plan to use it

    }
});

bot.on('error', (error) => { console.log(error) });
bot.on("ready", () => {
    console.log(`Bot has started`)

    new WOKCommands(bot, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'), // update to your own command folder name, points to "commands" by default
        testServers: ['650058489401442326'], // change this to personal server
        showWarns: true, // personal preference, adjust to your own liking
        botOwners:'190141079184605185', // change this to your own ID (+ friends)

      })
      .setDefaultPrefix('+') // change to whatever prefix you would like
      .setColor(0x52307c)


    bot.user.setActivity(`${process.env.botactivity}`); // as mentioned before make sure to update
    bot.user.setUsername("Dev") // change username to whatever
      const image = '' // insert link if you want to update the image
    //   bot.user.setAvatar(image)
})
bot.once("reconnecting", () => {
    console.log("Reconnecting!");
})
bot.once("disconnect", () => {
    console.log("Disconnected!");
})
bot.login(process.env.token);