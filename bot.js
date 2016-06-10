exports.txt = (message) => {
  // safeLog(namessage);
  if (message.body.indexOf('!') === 0) {
    try {
      switch (message.body.split(/\s/g)[0].substring(1)) {
        case 'logs':
          message.reply(JSON.stringify(logs.splice(0, 5)));
          break;
        case '8ball':
        case 'answers':
          message.reply(games.fromRandom(games.answers));
          break;
        case 'questions':
          message.reply(games.fromRandom(games.questions));
        default:

      }
    } catch (e) {
      message.reply(e.toString());
    } finally {
      console.log('client: ' + message);
    }
  } else {
    message.reply(message.body);
  }
}
