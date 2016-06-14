function up-to amount
  Math.floor(if amount then Math.random! * amount else 1 / Math.random!)

from-random = (source) ->
  if source.constructor is Array then
    from-random source[up-to source.length]
  else if source.constructor is Object then
    keys = Object.keys source
    from-random source[keys[up-to keys.length]]
  else
    source

export up-to
export from-random
