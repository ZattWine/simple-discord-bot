const Discord = require('discord.js')
const Command = require('../Command')

module.exports = new Command({
  name: 'embed',
  description: 'Show an embed.',
  permission: 'SEND_MESSAGES',
  async run(message, args, client) {
    const embed = new Discord.MessageEmbed()
    embed
      .setTitle('This is a test embed message.')
      .setURL('https://kyawzayartun.vercel.app')
      .setAuthor(
        message.author.username,
        message.author.avatarURL({ dynamic: true }),
        'https://kyawzayartun.vercel.app'
      )
      .setDescription(
        'this is some plain text,\n[https://kyawzayartun.vercel.app](https://kyawzayartun.vercel.app)'
      )
      .setColor('PURPLE')
      .setThumbnail(message.author.avatarURL({ dynamic: true }))

    message.reply({ embeds: [embed] })
  },
})
