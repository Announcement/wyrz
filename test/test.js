// Generated by CoffeeScript 1.10.0
(function() {
  var b, expect, g, u;

  expect = require('chai').expect;

  b = require('../bot');

  g = require('../games');

  u = require('../util');

  describe('utilities', function() {
    return describe('#fromRandom()', function() {
      return it('should return a random value from the object structure', function() {
        return expect(u.fromRandom([['a']])).to.equal('a');
      });
    });
  });

  describe('games', function() {
    return describe('Conversation games', function() {
      it('should ask a random would you rather question of any category', function() {
        return expect(u.fromRandom(g.questions)).to.be.an('string');
      });
      return it('should give you a random magic 8 ball style answer', function() {
        return expect(u.fromRandom(g.answers)).to.be.an('string');
      });
    });
  });

  describe('bot', function() {
    return describe('echo test', function() {
      return it('should repeat whatever phrase was provided as an input', function() {
        return expect(b.using('say hi')).to.equal('hi');
      });
    });
  });

}).call(this);
