const { Game } = require('./Game.js');
const { getPlayerNames } = require('./functions/getPlayerNames.js');

console.log('Welcome to Connect Four!');

getPlayerNames()
  .then(( {playerOne, playerTwo}) => {
    return new Game(playerOne, playerTwo);  
  })
  .then(g => {
    g.runGame();
  });
