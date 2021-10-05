const Discord = require('discord.js')
const Event = require('../Event')

module.exports = new Event('guildMemberRemove', (client, member) => {
  const channel = member.guild.channels.cache.find(
    (c) => c.name == 'welcome-and-goodbye'
  )

  if (!channel) return

  const embed = new Discord.MessageEmbed()
  embed
    .setTitle('Member Left')
    .setColor('RED')
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addFields({
      name: 'User Joined',
      value: member.joinedAt.toUTCString(),
      inline: true,
    })
    .setTimestamp()

  channel.send({ embeds: [embed] })
})
