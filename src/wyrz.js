import util from 'util'
import http from 'http'

import * as Bot from '@kikinteractive/kik'
import express from 'express'

import Brain from './brain'

let configuration
let brain
let bot
let httpd
let app

configuration = {}

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
}

brain = new Brain()
bot = new Bot(configuration.kik)
app = express()

bot.updateBotConfiguration()
bot.onTextMessage(brain.onTextMessage)
app.use(express.static('public'))

httpd = http.createServer()

httpd.on('request', (request, response) => {
  bot.incoming().call(httpd, request, response)

  if (response.url.indexOf('/incoming') !== 0) {
    app.call(httpd, request, response)
  }
})

httpd.listen(process.env.PORT || 8080, function () {
  console.log(httpd.address().port, httpd.remoteAddress)
})
