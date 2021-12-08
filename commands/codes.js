const { MessageAttachment} = require("discord.js");

module.exports = {
    category: 'Currency',
    description: 'Replies with list of currency codes',

    slash: 'both',
    testOnly: false,

    callback: ({ message, interaction }) => {

        const file = new MessageAttachment("codes.txt"); 

        if (message) {
            message.reply( { files: [file] })
        }
        if (interaction){
            interaction.reply( { files: [file] })
        }

    },
}