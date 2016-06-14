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
      expect(u.fromRandom(g.questions)).to.be.a('string')

    it 'should give you a random magic 8 ball style answer', ->
      expect(u.fromRandom(g.answers)).to.be.a('string')

describe 'bot', ->

  describe 'echo test', ->
    it 'should repeat whatever phrase was provided as an input', ->
      expect(b.using('say hi')).to.equal('hi')

  describe 'accept commands', ->
    it 'should repeat whatever phrase was provided as an input', ->
      expect(b.using('say hi')).to.equal('hi')

    it 'should roll a pair of dice and return a random number', ->
      expect(b.using('roll')).to.be.a('string')

    it 'should flip a coin landing on either heads or tails', ->
      expect(b.using('flip')).to.be.a('string')

    it 'should ask a completely random conversational question', ->
      expect(b.using('ask')).to.be.a('string')

    it 'should ask a very difficult conversational question', ->
      expect(b.using('ask hardest')).to.be.a('string')

    it 'should ask a couple orientated conversational question', ->
      expect(b.using('ask couples')).to.be.a('string')

    it 'should tell you a magic eight ball style answers', ->
      expect(b.using('tell')).to.be.a('string')
