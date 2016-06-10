'use strict';

// Node built in libraries
let util    = require('util');
let http    = require('http');

// Kik messenger application protocol implementation
let Bot     = require('@kikinteractive/kik');
/*
// Natural Language Processing
let natural = require('natural');
let i18n    = require("i18n");
let ld      = require("languagedetect");

// Programming utilities.
let moment  = require("moment");
let xregexp = require("xregexp");
let wp      = require('wordpos');*/

let games   = require('./games');
let ai     = require('./bot');

// Self implmented logs since console.log is hard to access.
var logs = [];

//var lang = new ld();
//var wordpos = new wp();
//var tokenizer = new natural.WordTokenizer();
//var wordnet = new natural.WordNet();

// Configure the bot API endpoint, details for your bot

let bot = new Bot({
    username: 'wyrz',
    apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
    baseUrl: 'https://wyrz.herokuapp.com/'
});

bot.updateBotConfiguration();

/* function safeLog(data) {
  logs.push(data);

  data.language = lang.detect(data.body, 2);
  data.tokens = tokenizer.tokenize(data.body);
  data.words = data.tokens.map(function(word) {
    wordnet.lookup(word, function(results) {
      data.words[word] = results;
      results.forEach(function(result) {
        //
      });
    });
    return {text: word};
  });
  while (logs.length > 1024) {
    logs.shift();
  }
} */

bot.onTextMessage(ai.txt);

// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write('We\'re in business!');
    response.end();
}).listen((parseInt(process.env.PORT + '', 10) || 8080)+ 1);
/*http.createServer(function(request, response) {
}).listen(80);*/
