const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes messages in bulk'),
    async execute(interaction) {
        try {
            const messages = await interaction.channel.messages.fetch({ limit: 100 });
            await interaction.channel.bulkDelete(messages);
            await interaction.reply('Messages deleted!');
            await interaction.deleteReply();
        } catch (error) {
            console.error('Error while executing clear command:', error);
            await interaction.reply({
                content: 'An error occurred while processing your command.',
                ephemeral: true, // Set ephemeral to true for a private reply visible only to the command issuer
            });
        }
    },
};