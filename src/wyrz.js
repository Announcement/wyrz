import util from 'util'
import http from 'http'

import * as Bot from '@kikinteractive/kik'
import express from 'express'
import Socket from 'socket.io'

import Brain from './brain'

let configuration
let brain
let bot
let httpd
let app
let io

configuration = {}

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
}

brain = new Brain()
bot = new Bot(configuration.kik)
app = express()

httpd = http.createServer()
io = Socket(httpd)

bot.updateBotConfiguration()

bot.onTextMessage(it => {
  it.reply(it.body)
  io.emit(it.body)
})

app.use(express.static('public'))


httpd.on('request', (request, response) => {
  bot.incoming().call(httpd, request, response)

  if (request.url.indexOf('/incoming') !== 0 && request.url.indexOf('/socket.io') !== -1) {
    app.call(httpd, request, response)
  }
})

httpd.listen(process.env.PORT || 8080, function () {
  console.log(httpd.address().port, httpd.remoteAddress)
})
