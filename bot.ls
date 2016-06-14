require! <[./games ./util]>

choose = util.from-random
command = /\s*(\S+)\s*(.+)?/

function ask question
  if question then
    if games.questions.has-own-property question then
      util.from-random games.questions[question]
    else
      'Your options are ' + Object.keys(games.questions).join(', ')
  else
    util.from-random games.questions

function vote command
  "#{it}"

controller =
  say: (-> "#{it}")
  flip: (-> choose <[heads tails]>)
  roll: (-> '' + if it then util.up-to parse-int it else util.up-to! )
  ask: ask
  tell: (-> util.from-random games.answers)
  vote: vote

execute = (command, content) ->
  if controller.has-own-property command then
    controller[command] content

using = (message) ->
  execute(that.1.to-lower-case!, that.2) if message.match command

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
