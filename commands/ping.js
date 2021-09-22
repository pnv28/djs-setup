const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Bot Ping'),
    async execute(interaction) {
        const client = require('../main');
        const ping = Date.now() - interaction.createdTimestamp;
        await interaction.reply(`Bot latency ${ping} ms\nAPI Latency ${Math.round(client.ws.ping)} ms`);
    },
};