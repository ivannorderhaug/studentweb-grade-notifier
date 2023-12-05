const { SlashCommandBuilder } = require('discord.js');
const CourseManager = require('../../internal/CourseManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Adds course to watch')
        .addStringOption(option =>
            option.setName('course')
                .setDescription('The course code')
                .setRequired(true)),
    async execute(interaction) {
        try {
            const course = interaction.options.getString('course').toUpperCase();
            const success = await CourseManager.addCourse(course);
            if (success) {
                await interaction.reply(`Course ${course} is now being watched!`);
            } else {
                await interaction.reply(`Course ${course} already exists!`);
            }
        } catch (error) {
            console.error('Error while executing add command:', error);
            await interaction.reply({
                content: 'An error occurred while processing your command.',
                ephemeral: true, // Set ephemeral to true for a private reply visible only to the command issuer
            });
        }
    },
};
