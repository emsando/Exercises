const { Game } = require('./Game.js');
const { assert, expect } = require('chai');


describe('Game', () => {
  const g = new Game('Michael', 'Quincy');

  it('should accept inputted players', () => {
    expect(g.player1.name).to.equal('Michael');
    expect(g.player2.name).to.equal('Quincy');
  })
})