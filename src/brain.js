class Brain {
  constructor () {

  }

  process (content, callback) {
    callback(content)
  }

  onTextMessage (message) {
    message.reply(message.body)
  }

  socketMessage (message, socket) {
    socket.emit(message)
  }
}

export default Brain
