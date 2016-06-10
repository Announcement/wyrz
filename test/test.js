var chai;
var assert;
chai = require('chai');
assert = chai.assert;
describe('games', function() {
  var games = require('../games');
  describe('#fromRandom()', function() {
    it('should return a random value from the object structure', function() {
      assert.equal(games.fromRandom([['a']]), 'a');
    });
  })
  describe('Would you rather', function() {
    it('should ask a random would you rather question of any category', function() {
      assert.typeOf(games.fromRandom(games.questions), 'string', 'we have a valid question');
    })
  });
  describe('Magic 8 ball', function() {
    it('should give you a random magic 8 ball style answer', function() {
      assert.typeOf(games.fromRandom(games.answers), 'string', 'we have a valid answer');
    })
  })
})
