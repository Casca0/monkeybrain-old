const { prefix } = require('../config.json');
module.exports = {
  name:'message',
  execute(message, client) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  // eslint-disable-next-line brace-style
  } catch (error) {
    console.error(error);
    message.reply('Ocorreu um erro ao tentar executar este comando!');
  }
  },
};