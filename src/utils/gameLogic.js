export const findLowestEmptyCell = (board, column) => {

  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][column] === null) {
      return { row, column }
    }
  }
  return null 
}

export default findLowestEmptyCell
