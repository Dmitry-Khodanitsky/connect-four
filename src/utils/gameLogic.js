const findLowestEmptyCell = (board, column) => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][column] === null) {
      return { row, column }
    }
  }
  return null
}

const makeMove = (gameState, column) => {
  const { board, currentPlayer } = gameState
  const emptyCell = findLowestEmptyCell(board, column)
  if (!emptyCell) return null

  const newBoard = board.map((row) => [...row])
  newBoard[emptyCell.row][column] = currentPlayer

  return {
    board: newBoard,
    row: emptyCell.row,
    col: column,
  }
}

export { findLowestEmptyCell, makeMove }
