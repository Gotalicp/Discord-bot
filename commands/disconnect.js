const { joinVoiceChannel, EndBehaviorType } = require("@discordjs/voice");
const { SlashCommandBuilder } = require("discord.js");
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('disconnects fromn the call that its in.'),
	async execute(interaction) {
    }
};