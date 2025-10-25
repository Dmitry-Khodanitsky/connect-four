const findLowestEmptyRow = (board, column) => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][column] === null) {
      return row
    }
  }
  return null
}

const makeMove = (gameState, gameStatus, columnIndex) => {
  const { board, currentPlayer } = gameState
  const emptyRow = findLowestEmptyRow(board, columnIndex)
  if (emptyRow === null) return null

  const newBoard = board.map((row) => [...row])
  newBoard[emptyRow][columnIndex] = currentPlayer.id

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
  return true
}

const checkWin = (lastMove, board) => {
  const { row: lastRow, column: lastCol, player } = lastMove
  const boardHeight = board.length
  const boardWidth = board[0].length

  const isValidCell = (row, col) =>
    row >= 0 && row < boardHeight && col >= 0 && col < boardWidth

  const isWinningCell = (row, col) =>
    isValidCell(row, col) && board[row][col] === player.id

  // Направления по которой будут идти проверки
  // [вертикаль (row), [горизонталь (col)]
  const directions = [
    [0, 1], // → горизонталь
    [1, 0], // ↓ вертикаль
    [1, 1], // ↘ диагональ
    [-1, -1], // // ↙ диагональ
  ]

  for (let [directionRow, directionCol] of directions) {
    let connectedCount = 1
    // Проверка по горизонтали вправо
    let nextCheckedCol = lastCol + directionCol
    let nextCheckedRow = lastRow + directionRow

    while (isWinningCell(nextCheckedRow, nextCheckedCol)) {
      connectedCount++
      console.log(
        `Игрок ${player.id}: найдена своя ячейка в (${nextCheckedRow},${nextCheckedCol}), счет = ${connectedCount}`
      )
      nextCheckedRow += directionRow
      nextCheckedCol += directionCol
    }

    let prevCheckedCol = lastCol - directionCol
    let prevCheckedRow = lastRow - directionRow

    while (isWinningCell(prevCheckedRow, prevCheckedCol)) {
      console.log(
        `Игрок ${player.id}: найдена своя ячейка в (${nextCheckedRow},${nextCheckedCol}), счет = ${connectedCount}`
      )
      connectedCount++
      prevCheckedRow -= directionRow
      prevCheckedCol -= directionCol
    }

    if (connectedCount === 4) {
      console.log(`🎉 ПОБЕДА! ${player.id}`)
      return player
    }
  }
  return null
}
export { findLowestEmptyRow, makeMove, checkDraw, checkWin }
