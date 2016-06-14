require! <[./games ./util]>

choose = util.from-random
command = /\s*(\S+)\s*(.+)?/


controller =
  say: (-> "#{it}")
  flip: (-> choose <[heads tails]>)
  roll: (-> '' + util.up-to 1000000)
  ask: (-> util.from-random games.questions)
  tell: (-> util.from-random games.answers)

execute = (command, content) ->
  if controller.has-own-property command then
    controller[command] content

using = (message) ->
  execute(that.1, that.2) if message.match command

safely = (content) ->
  content or 'I have nothing to say.'

txt = ->
  it.reply safely using it.body

export txt
export safely
export using
export execute
export controller
export command
