module.exports = {

    category: 'Moderation',
    description: 'Deletes multiple messages',

    permissions: ['ADMINISTRATOR'],

    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: 'both',
    testOnly: false,

    callback: async ({ message, interaction, channel, args }) => {

        const amount = args.length ? parseInt(args.shift()) : 10

        if (amount > 100) {
            return 'Number of deleted messages should not be above 100'
        }
        if (amount < 1) {
            return 'Number of deleted messages should not exceed be below 1'
        }

        if (message) {
            await message.delete()
        }


        const { size } = await channel.bulkDelete(amount, true)

        const reply = `Deleted ${size} message(s)`

        if (interaction) {
            return reply
        }

        channel.send(reply);
    }

}