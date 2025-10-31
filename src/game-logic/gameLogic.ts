import type { Board, GameState } from '@/shared/constants/gameConstants.types'
import type { LastMove, MoveResult, CheckWinResult } from './gameLogic.types'
// Функции, реализующие основную логику игры.
// Включает функции для:
// Поиска самой нижней пустой ячейки - findLowestEmptyRow
// Выполнения хода - makeMove
// Проверки на ничью - checkDraw
// Проверки на победу - сheckWin

const findLowestEmptyRow = (board: Board, column: number): number | null => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][column] === null) {
      return row
    }
  }
  return null
}

const makeMove = (
  gameState: GameState,
  columnIndex: number
): MoveResult | null => {
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

const checkDraw = (board: Board): boolean => {
  for (let row of board) {
    for (let column of row) {
      if (column === null) {
        return false
      }
    }
  }
  return true
}

// Sonar Qube предупреждает, что когнитивная сложность функции выше рекомендованной,
// но текущая структура (два отдельных цикла для каждого направления) сознательно выбрана как более читаемая, чем если выносить циклы в отдельную функцию
// eslint-disable-next-line sonarjs/cognitive-complexity
const checkWin = (lastMove: LastMove, board: Board): CheckWinResult => {
  const { row: lastRow, column: lastCol, player } = lastMove
  const boardHeight = board.length
  const boardWidth = board[0].length

  // 6 направлений для проверки
  const directions = [
    [0, 1], // → горизонталь (вправо)
    [1, 0], // ↓ вертикаль (вниз)
    [1, 1], // ↘ диагональ (вниз-вправо)
    [1, -1], // ↙ диагональ (вниз-влево)
    [-1, 1], // ↗ диагональ (вверх-вправо)
    [-1, -1], // ↖ диагональ (вверх-влево)
  ]

  const isValidCell = (row: number, col: number): boolean =>
    row >= 0 && row < boardHeight && col >= 0 && col < boardWidth

  for (let [directionRow, directionCol] of directions) {
    let connectedCount = 1 // последняя занятая ячейка игрока уже учитывается как одна из победных
    const winningCells = [{ row: lastRow, col: lastCol }]
    const stepsCount = 3 // количество шагов, которые нужно пройти для проверки

    // Проверка в одном направлении
    for (let i = 1; i <= stepsCount; i++) {
      const nextRow = lastRow + directionRow * i
      const nextCol = lastCol + directionCol * i

      if (
        isValidCell(nextRow, nextCol) &&
        board[nextRow][nextCol] === player.id
      ) {
        connectedCount++
        winningCells.push({ row: nextRow, col: nextCol })
      } else {
        break
      }
    }

    // Проверка в противоположном направлении
    for (let i = 1; i <= stepsCount; i++) {
      const prevRow = lastRow - directionRow * i
      const prevCol = lastCol - directionCol * i

      if (
        isValidCell(prevRow, prevCol) &&
        board[prevRow][prevCol] === player.id
      ) {
        connectedCount++
        winningCells.push({ row: prevRow, col: prevCol })
      } else {
        break
      }
    }

    if (connectedCount === 4) {
      return { winner: player, winningCells }
    }
  }

  return { winner: null, winningCells: [] }
}

export { findLowestEmptyRow, makeMove, checkDraw, checkWin }
