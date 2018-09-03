const { Game } = require('./Game.js');
const { assert, expect } = require('chai');


describe('Game', () => {
  const g = new Game('Michael', 'Quincy');

  it('should accept inputted players', () => {
    expect(g.player1.name).to.equal('Michael');
    expect(g.player2.name).to.equal('Quincy');
  });

  it('should handle piece placement', () => {
    g.attemptPlacement(0, g.player1);
    assert.deepEqual(g.board, [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['X', ' ', ' ', ' ', ' ', ' ', ' ']
    ])
  });

  it('should handle multiple piece placements', () => {
    g.attemptPlacement(1, g.player1);
    g.attemptPlacement(1, g.player1);
    g.attemptPlacement(1, g.player1);
    g.attemptPlacement(1, g.player2);

    assert.deepEqual(g.board, [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'O', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', ' ', ' ', ' '],
      ['X', 'X', ' ', ' ', ' ', ' ', ' ']
    ])
  });

  it('should not add to full columns', () => {
    g.attemptPlacement(1, g.player2);
    g.attemptPlacement(1, g.player1);
    g.attemptPlacement(1, g.player1);
    g.attemptPlacement(1, g.player1);
    
    assert.deepEqual(g.board, [
      [' ', 'X', ' ', ' ', ' ', ' ', ' '],
      [' ', 'O', ' ', ' ', ' ', ' ', ' '],
      [' ', 'O', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', ' ', ' ', ' '],
      ['X', 'X', ' ', ' ', ' ', ' ', ' ']
    ])
  })
})