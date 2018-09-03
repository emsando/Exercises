const inquirer = require('inquirer');
const { Player } = require('./Player.js');
const { printBoard } = require('./functions/printBoard.js');
const { checkWin } = require('./functions/checkWin.js');

exports.Game = class Game {
  constructor(playerOne, playerTwo) {
    this.board = new Array(6).fill(null).map(row => new Array(7).fill(' '));
    this.player1 = new Player(playerOne, 'X');
    this.player2 = new Player(playerTwo, 'O');
    this.currentPlayer = this.player1;
    this.fullColumns = {};
  }

  runGame() {
    printBoard(this.board);
    this.handleTurn(this.currentPlayer)
      .then(this.checkWin)
      .then(result => {
        if (result) {
          return this.handleWin();
        }

        if (this.currentPlayer === this.player1) {
          this.currentPlayer = this.player2;
        } else {
          this.currentPlayer = this.player1;
        }

        return this.runGame();
      })
      .catch(error => console.error(error));
  }

  handleTurn(player) {
    return this.getColumnFromUser(player)
      .then(({ col_to_attempt }) => {
        return this.attemptPlacement(col_to_attempt, player)
      })
  }

  getColumnFromUser(player) {
    return inquirer.prompt({
      name: 'col_to_attempt',
      message: `${player.name}, enter column to drop piece in: `
    })
  }

  attemptPlacement(col, player) {
    if (this.fullColumns[col]) {
      console.log('Not a valid placement!');
      return this.handleTurn(this.currentPlayer);
    }

    this.board.forEach((row, index) => {
      if (row[col] === ' ' && (this.board[index + 1] === undefined || this.board[index + 1][col] !== ' ')) {
        row[col] = player.piece;
        if (index === 0) {
          this.fullColumns[col] = true;
        }
      }
    })

    return true;
  }

  handleWin() {
    console.log(`${this.currentPlayer} WINS!`);
    return true;
  }
}