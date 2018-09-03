exports.checkWin = (board) => {
  if (
    checkHorizontalWin(board) ||
    checkVerticalWin(board) ||
    checkMajorDiagonalWin(board) ||
    checkMinorDiagonalWin(board)
  ) {
    return true
  }

  return false;
}

checkHorizontalWin = (board) => {

}

checkVerticalWin = (board) => {

}

checkMajorDiagonalWin = (board) => {

}

checkMinorDiagonalWin = (board) => {

}