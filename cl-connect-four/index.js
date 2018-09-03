const inquirer = require('inquirer');
const { Game } = require('./Game.js');

console.log('Welcome to Connect Four!');
let playerOne = null;
let playerTwo = null;

const getPlayerNames = () => {
  return inquirer.prompt({
    name: 'input_player_one',
    message: 'Enter name of Player One: ',
  })
  .then(({ input_player_one }) => {
    playerOne = input_player_one
  })
  .then(() => {
    return inquirer.prompt({
      name: 'input_player_two',
      message: 'Enter name of Player Two'
    })
  })
  .then(({ input_player_two }) => {
    playerTwo = input_player_two
  })
  .then(() => console.log(playerOne, playerTwo));
}

getPlayerNames();
// const g = new Game();
// g.runGame();