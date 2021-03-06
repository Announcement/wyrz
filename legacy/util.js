// Generated by LiveScript 1.5.0
(function(){
  var fromRandom, out$ = typeof exports != 'undefined' && exports || this;
  function upTo(it){
    var random;
    random = Math.random();
    return Math.floor(it
      ? random * it
      : Number.MAX_SAFE_INTEGER * random);
  }
  fromRandom = function(source){
    var keys;
    if (source.constructor === Array) {
      return fromRandom(source[upTo(source.length)]);
    } else if (source.constructor === Object) {
      keys = Object.keys(source);
      return fromRandom(source[keys[upTo(keys.length)]]);
    } else {
      return source;
    }
  };
  out$.upTo = upTo;
  out$.fromRandom = fromRandom;
}).call(this);
