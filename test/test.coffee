expect = require('chai').expect
b = require('../bot')
g = require('../games')
u = require('../util')

describe 'utilities', ->
    describe '#up-to( [number] )', ->
      it 'should provide a random number using a recipical method', ->
        expect(u.upTo()).to.not.be.below(1)

      it 'should provide a random number up to the specified maximum', ->
        expect(u.upTo(10)).to.not.be.above(10)

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

    it 'should roll a pair of dice and return a random limitless number', ->
      expect(b.using('roll')).to.match(/\d+/)

    it 'should roll a pair of dice and return a random limited number', ->
      expect(b.using('roll 10')).to.match(/\d+/)

    it 'should flip a coin landing on either heads or tails', ->
      expect(b.using('flip')).to.match(/(heads|tails)/)

    it 'should ask a completely random conversational question', ->
      expect(b.using('ask')).to.be.a('string')

    it 'should ask a very difficult conversational question', ->
      expect(b.using('ask hardest')).to.be.a('string')

    it 'should ask a couples orientated conversational question', ->
      expect(b.using('ask couples')).to.be.a('string')

    it 'should ask a female orientated conversational question', ->
      expect(b.using('ask girls')).to.be.a('string')

    it 'should ask a technology orientated conversational question', ->
      expect(b.using('ask technology')).to.be.a('string')

    it 'should ask a kids orientated conversational question', ->
      expect(b.using('ask kids')).to.be.a('string')

    it 'should tell you a magic eight ball style answers', ->
      expect(b.using('tell')).to.be.a('string')
