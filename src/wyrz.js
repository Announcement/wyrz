import util from 'util'
import http from 'http'

import * as Bot from '@kikinteractive/kik'

import Brain from './brain'

let configuration
let brain
let bot
let httpd

configuration = {}

configuration.kik = {
  username: 'wyrz',
  apiKey: '162091ee-2785-4af4-b833-91dda5356ff9',
  baseUrl: 'https://wyrz.herokuapp.com/'
}

brain = new Brain()
bot = new Bot(configuration.kik)

bot.updateBotConfiguration()
bot.onTextMessage(brain.onTextMessage)

httpd = http.createServer(bot.incoming())

http.on('request', (request, response) => {
  console.log(request.url)
})

httpd.listen(process.env.PORT || 8080)
