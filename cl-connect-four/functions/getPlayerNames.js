const inquirer = require('inquirer');

exports.getPlayerNames = () => {
  let playerOne = null;
  let playerTwo = null;

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
  .then(() => {
    return { playerOne, playerTwo }
  })
  .catch(error => console.error(error));
}