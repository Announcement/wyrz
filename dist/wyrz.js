'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var util = _interopDefault(require('util'));
var http = _interopDefault(require('http'));
var Bot = require('@kikinteractive/kik');
var express = _interopDefault(require('express'));
var Socket = _interopDefault(require('socket.io'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Brain = function () {
  function Brain() {
    classCallCheck(this, Brain);
  }

  createClass(Brain, [{
    key: "process",
    value: function process(content, callback) {
      callback(content);
    }
  }, {
    key: "onTextMessage",
    value: function onTextMessage(message) {
      this.process(message.body, message.reply);
    }
  }, {
    key: "socketMessage",
    value: function socketMessage(message, socket) {
      this.process(message, socket.emit);
    }
  }]);
  return Brain;
}();

var brain = new Brain();
var configuration = {};

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
};

var bot = new Bot(configuration.kik);
bot.updateBotConfiguration();
bot.onTextMessage(brain.onTextMessage);

var app = express();
var httpd = http.Server(bot);
var io = Socket(httpd);

httpd.on('request', function (request, response) {
  if (request.url.indexOf('/incoming') === -1) {
    app(request, response);
  }
});

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    brain.socketMessage(data, socket, io);
  });
});

// app.use('/kik', bot)
app.use(express.static('public'));
httpd.listen(process.env.PORT || 8080);
//# sourceMappingURL=wyrz.js.map
