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
    playerId: currentPlayer.id,
  }
}

const checkDraw = (board: Board): boolean => {
  for (const row of board) {
    for (const column of row) {
      if (column === null) {
        return false
      }
    }
  }
  return true
}

// Sonar Qube предупреждает, что когнитивная сложность функции выше рекомендованной,
// но текущая структура (два отдельных цикла для каждого направления) сознательно выбрана как более читаемая, чем если выносить циклы в отдельную функцию

const checkWin = (lastMove: LastMove, board: Board): CheckWinResult => {
  const { row: lastRow, column: lastCol, playerId } = lastMove
  const boardHeight = board.length
  const boardWidth = board[0].length

  // 6 направлений для проверки
  const directions = [
    [0, 1], // → горизонталь (вправо)
    [1, 0], // ↓ вертикаль (вниз)
    [1, 1], // ↘ диагональ (вниз-вправо)
    [1, -1], // ↙ диагональ (вниз-влево)
  ]

  const isValidCell = (row: number, col: number): boolean =>
    row >= 0 && row < boardHeight && col >= 0 && col < boardWidth

  for (const [directionRow, directionCol] of directions) {
    const winningCells = [{ row: lastRow, col: lastCol }]

    // Проверка в одном направлении
    let step = 1
    while (winningCells.length < 4) {
      const nextRow = lastRow + directionRow * step
      const nextCol = lastCol + directionCol * step

      if (
        isValidCell(nextRow, nextCol) &&
        board[nextRow][nextCol] === playerId
      ) {
        winningCells.push({ row: nextRow, col: nextCol })
        step++
      } else {
        break
      }
    }

    step = 1 // сбрасываем количество пройденных шагов для проверки в обратном направлении
    // Проверка в противоположном направлении
    while (winningCells.length < 4) {
      const prevRow = lastRow - directionRow * step
      const prevCol = lastCol - directionCol * step

      if (
        isValidCell(prevRow, prevCol) &&
        board[prevRow][prevCol] === playerId
      ) {
        winningCells.push({ row: prevRow, col: prevCol })
        step++
      } else {
        break
      }
    }

    if (winningCells.length === 4) {
      return { winnerId: playerId, winningCells }
    }
  }

  return { winnerId: null, winningCells: [] }
}

export { findLowestEmptyRow, makeMove, checkDraw, checkWin }
