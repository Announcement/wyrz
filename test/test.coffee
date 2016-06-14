expect = require('chai').expect
b = require('../bot')
g = require('../games')
u = require('../util')

describe 'utilities', ->
    describe '#fromRandom()', ->

      it 'should return a random value from the object structure', ->
        expect(u.fromRandom([['a']])).to.equal('a')

describe 'games', ->
  describe 'Conversation games', ->
    it 'should ask a random would you rather question of any category', ->
      expect(u.fromRandom(g.questions)).to.be.an('string')

    it 'should give you a random magic 8 ball style answer', ->
      expect(u.fromRandom(g.answers)).to.be.an('string')

describe 'bot', ->

  describe 'echo test', ->
    it 'should repeat whatever phrase was provided as an input', ->
      expect(b.using('say hi')).to.equal('hi')
