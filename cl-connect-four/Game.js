const { Player } = require('./Player.js');

exports.Game = class Game {
  constructor() {
    this.board = new Array(6).fill(null).map(row => new Array(7).fill(' '));
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.currentPlayer = this.player1;
  }

  runGame() {
    let winner = null; 

    // while(!winner) {
    //   this.placePiece(this.currentPlayer);
    //   winner = this.checkWin;

    //   if (this.currentPlayer === this.player1) {
    //     this.currentPlayer = this.player2;
    //   } else {
    //     this.currentPlayer = this.player1;
    //   }
    // }

    if (winner === 'X') {
      winner = this.player1
    } else {
      winner = this.player2
    }

    console.log(`${winner.name} WINS!`);
  }
}