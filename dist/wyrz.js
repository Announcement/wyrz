'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var util = _interopDefault(require('util'));
var http = _interopDefault(require('http'));
var Bot = require('@kikinteractive/kik');
var express = _interopDefault(require('express'));

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
let app;

configuration = {};

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
};

brain = new Brain();
bot = new Bot(configuration.kik);
app = express();

bot.updateBotConfiguration();
bot.onTextMessage(brain.onTextMessage);
app.use(express.static('public'));

httpd = http.createServer();

httpd.on('request', (request, response) => {
  bot.incoming().call(httpd, request, response);

  if (request.url.indexOf('/incoming') !== 0) {
    app.call(httpd, request, response);
  }
});

httpd.listen(process.env.PORT || 8080, function () {
  console.log(httpd.address().port, httpd.remoteAddress);
});
//# sourceMappingURL=wyrz.js.map
