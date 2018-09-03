exports.printBoard = (matrix) => {
  let str = ''; 

  matrix.forEach(row => {
    str += ' ' + row.join(' | ') + '\n';
  })
  str += new Array(27).fill('=').join('');
  console.log(str);
}