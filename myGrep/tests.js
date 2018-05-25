const{ searchFileText, searchDirectory } = require('./myGrep.js');
const path = require('path');

// test on line 4;
// test on line 5; 

let nums = searchFileText(path.resolve(__dirname) + '/tests.js', 'test');
console.log('Test 1 results: ', nums);

// albuquerque - this line used for tests

searchDirectory(path.resolve(__dirname), 'albuquerque');