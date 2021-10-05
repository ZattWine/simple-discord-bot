const Event = require('../Event')

module.exports = new Event('ready', (client) => {
  console.log('Bot is ready to online!')
})
