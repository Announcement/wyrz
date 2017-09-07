import util from 'util'
import http from 'http'

import * as Bot from '@kikinteractive/kik'
import express from 'express'
import Socket from 'socket.io'

import Brain from './brain'

let brain = new Brain()
let configuration = {}

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
}

let bot = new Bot(configuration.kik)
bot.updateBotConfiguration()
bot.onTextMessage(brain.onTextMessage)

const app = express()
const httpd = http.Server(bot)
const io = Socket(httpd)

httpd.on('request', (request, response) => {
  if (request.url.indexOf('/incoming') === -1) {
    express(request, response)
  }
})

io.on('connection', socket => {
  socket.on('message', data => {
    brain.socketMessage(data, socket, io)
  })
})

// app.use('/kik', bot)
app.use(express.static('public'))
httpd.listen(process.env.PORT || 8080)
