class Brain {
  constructor () {

  }

  process (content, callback) {
    callback(content)
  }

  onTextMessage (message) {
    this.process(message.body, message.reply)
  }

  socketMessage (message, socket) {
    this.process(message, socket.emit)
  }
}

export default Brain
