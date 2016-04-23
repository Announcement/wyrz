'use strict';

let util    = require('util');
let http    = require('http');

let Bot     = require('@kikinteractive/kik');

let natural = require('natural');
let i18n    = require("i18n");

var logs = [];

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'wyrz',
    apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
    baseUrl: 'https://wyrz.herokuapp.com/'
});

bot.updateBotConfiguration();

function safeLog(data) {
  logs.push(data);
  while (logs.length > 1024) {
    logs.shift();
  }
}

bot.onTextMessage((message) => {
  safeLog(message);
  if (message.body.indexOf("!logs") == 0) {
    message.reply(JSON.stringify(logs.splice(0, 5)));
  } else {
    message.reply(message.body);
  }
});

// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);

/*http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.write(JSON.stringify(logs));
  response.end();
}).listen(80);*/
