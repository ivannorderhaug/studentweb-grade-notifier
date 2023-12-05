const { SlashCommandBuilder } = require('discord.js');
const CourseManager = require('../../internal/CourseManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('all')
        .setDescription('Lists all watched courses'),
    async execute(interaction) {
        try {
            const courses = await CourseManager.getAllCourses();
            if (courses.length > 0) {
                await interaction.reply(`Courses being watched: ${courses}`);
            } else {
                await interaction.reply(`No courses are being watched!`);
            }
        } catch (error) {
            console.error('Error while executing all command:', error);
            await interaction.reply({
                content: 'An error occurred while processing your command.',
                ephemeral: true, // Set ephemeral to true for a private reply visible only to the command issuer
            });
        }
    },
};