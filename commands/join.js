const { joinVoiceChannel, EndBehaviorType } = require("@discordjs/voice");
const { SlashCommandBuilder } = require("discord.js");
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('joins the call that you are currently in.'),
	async execute(interaction) {
        interaction.member.delete()
        if(interaction.member.voice.channel != null){
            let call = interaction.member.voice.channel.name;
            let callID = interaction.member.voice.channel.id;
            let guild = interaction.member.voice.channel.guild;
    
            if(call){
                let m = "Joining " + interaction.user.username + " @ " + call;
                await interaction.reply({ content: m, ephemeral: true });
                const connection = joinVoiceChannel({
                    channelId: callID,
                    guildId: guild.id,
                    adapterCreator: guild.voiceAdapterCreator,
                    selfDeaf: false,
                    selfMute: false,
                });
                
                let vc = interaction.client.channels.cache.get(callID)

            }
        }
        else{
            let m = "Cannot Join " + interaction.user.username + ".";
            await interaction.reply({ content: m, ephemeral: true });
        }
	},
};