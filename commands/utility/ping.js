const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks if the bot is alive'),
    async execute(interaction) {
        try {
            await interaction.reply('Pong!');
        } catch (error) {
            console.error('Error while executing ping command:', error);
            await interaction.reply({
                content: 'An error occurred while processing your command.',
                ephemeral: true, // Set ephemeral to true for a private reply visible only to the command issuer
            });
        }
    },
};