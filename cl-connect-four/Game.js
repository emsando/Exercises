const inquirer = require('inquirer');
const { Player } = require('./Player.js');
const { printBoard } = require('./functions/printBoard.js')

exports.Game = class Game {
  constructor(playerOne, playerTwo) {
    this.board = new Array(6).fill(null).map(row => new Array(7).fill(' '));
    this.player1 = new Player(playerOne, 'X');
    this.player2 = new Player(playerTwo, 'O');
    this.currentPlayer = this.player1;
    this.fullColumns = {};
  }

  runGame() {
    console.log('run game');
  }

  getColumnFromUser(player) {
    return inquirer.prompt({
      name: 'col_to_attempt',
      message: `${player.name}, enter column to drop piece in: `
    })
    .then(({ col_to_attempt }) => {
      return this.attemptPlacement(col_to_attempt, player)
    })
  }

  attemptPlacement(col, player) {
    if (this.fullColumns[col]) {
      return false;
    }

    this.board.forEach((row, index) => {
      if (row[col] === ' ' && (this.board[index + 1] === undefined || this.board[index + 1][col] !== ' ')) {
        row[col] = player.piece;
        if (index === 0) {
          this.fullColumns[col] = true;
        }
      }
    })
  }
}