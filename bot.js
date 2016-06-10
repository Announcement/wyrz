let games   = require('./games');
logs = [];
exports.txt = (message) => {
  // safeLog(namessage);
  try {
    var words;
    words = message.body.trim().split(/\s+/g);
    switch (words[0]) {
      case 'logs':
        message.reply(JSON.stringify(logs.splice(0, 5)));
        break;
      case '8ball':
      case 'answers':
        message.reply(games.fromRandom(games.answers));
        break;
      case 'questions':
        (function(){
          if (words.length > 1) {
            switch(words[1]) {
              case 'hardest':
                message.reply(games.fromRandom(games.questions.hardest));
                break;
              case 'couples':
                message.reply(games.fromRandom(games.questions.couples));
                break;
              case 'girls':
                message.reply(games.fromRandom(games.questions.girls));
                break;
              case 'technology':
                message.reply(games.fromRandom(games.questions.technology));
                break;
              case 'kids':
                message.reply(games.fromRandom(games.questions.kids));
                break;
              default:
                message.reply(games.fromRandom(games.questions));
            }
          } else {
            message.reply(games.fromRandom(games.questions));
          }
        }());
        break;
      case 'say'
        message.reply(words.slice(1).join(' '));
        break;
      default:
        message.reply('Sorry, I don\'t know how to respond to that.')
    }
  } catch (e) {
    message.reply(e.toString());
  } finally {
    console.log('client: ' + message);
  }
}
