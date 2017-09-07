'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var util = _interopDefault(require('util'));
var http = _interopDefault(require('http'));
var Bot = require('@kikinteractive/kik');

class Brain {
  constructor() {}

  process(content, callback) {
    callback(content);
  }

  onTextMessage(message) {
    message.reply(message.body);
  }

  socketMessage(message, socket) {
    socket.emit(message);
  }
}

let configuration;
let brain;
let bot;
let httpd;

configuration = {};

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
};

brain = new Brain();
bot = new Bot(configuration.kik);

bot.updateBotConfiguration();
bot.onTextMessage(brain.onTextMessage);

httpd = http.createServer(bot.incoming());

httpd.on('request', (request, response) => {
  console.log(request.url);
});

httpd.listen(process.env.PORT || 8080, function () {
  console.log(httpd.address());
});
//# sourceMappingURL=wyrz.js.map
