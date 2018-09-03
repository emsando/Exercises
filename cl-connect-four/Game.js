const { Player } = require('./Player.js');
const { printBoard } = require('./functions/printBoard.js')

exports.Game = class Game {
  constructor(playerOne, playerTwo) {
    this.board = new Array(6).fill(null).map(row => new Array(7).fill(' '));
    this.player1 = new Player(playerOne, 'X');
    this.player2 = new Player(playerTwo, 'O');
    this.currentPlayer = this.player1;
  }

  runGame() {
    console.log('run game');
  }
}