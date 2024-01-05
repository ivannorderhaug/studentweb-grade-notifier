const { SlashCommandBuilder } = require('discord.js');
const CourseManager = require('../../internal/CourseManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Removes a watched course')
        .addStringOption(option =>
            option.setName('course')
                .setDescription('The course code')
                .setRequired(true)),
    async execute(interaction) {
        try {
            const course = interaction.options.getString('course').toUpperCase();
            const success = await CourseManager.removeCourse(course);
            if (success) {
                console.log(`[${new Date().toLocaleString()}] Removed ${course} from the course codes list`);
                await interaction.reply(`Course ${course} is no longer being watched!`);
            } else {
                await interaction.reply(`Course ${course} does not exist!`);
            }
        } catch (error) {
            console.error('Error while executing remove command:', error);
            await interaction.reply({
                content: 'An error occurred while processing your command.',
                ephemeral: true, // Set ephemeral to true for a private reply visible only to the command issuer
            });
        }
    },
};
