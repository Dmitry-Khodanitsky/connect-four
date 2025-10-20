const findLowestEmptyRow = (board, column) => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][column] === null) {
      return row
    }
  }
  return null
}

const makeMove = (gameState, columnIndex) => {
  const { board, currentPlayer } = gameState
  const emptyRow = findLowestEmptyRow(board, columnIndex)
  if (emptyRow === null) return null

  const newBoard = board.map((row) => [...row])
  newBoard[emptyRow][columnIndex] = currentPlayer

  return {
    board: newBoard,
    row: emptyRow,
    column: columnIndex,
    player: currentPlayer,
  }
}

const checkDraw = (board) => {
  for (let row of board) {
    for (let column of row) {
      if (column === null) {
        console.log('Не все ячейки заняты')
        return false
      }
    }
  }
  console.log('ничья')
  return true
}
