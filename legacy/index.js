'use strict';

// Node built in libraries
const util = require('util');
const http = require('http');

// Kik messenger application protocol implementation
let Bot = require('@kikinteractive/kik');

let games = require('./games');
let ai = require('./bot');

// Configure the bot API endpoint, details for your bot

let bot = new Bot({
    username: 'wyrz',
    apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
    baseUrl: 'https://wyrz.herokuapp.com/'
});

bot.updateBotConfiguration();
bot.onTextMessage(ai.txt);

// Set up your server and start listening

let server = http.createServer(bot.incoming());

var onrequest;

onrequest = function onrequest(request, response) {
    console.log(JSON.stringify({
      url: request.url,
      headers: request.headers
    }));
};

server.listen(process.env.PORT || 8080);

server.addEventListener('request', onrequest);
