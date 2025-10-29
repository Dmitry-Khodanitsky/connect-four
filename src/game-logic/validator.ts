import { INITIAL_BOARD } from '@/shared/constants/gameConstants'
import { checkWin, checkDraw } from './gameLogic.js'

// Валидирует последовательность ходов игры и возвращает
// подробный отчет о каждом шаге.
// Входные данные в виде массива чисел - последовательности шагов.
// Если ходов еще не было - приходит пустой массив.
// На четных индексах шаги первого игрока, на нечетных - второго, потому что начинает всегда первый игрок.
// Каждое число в последовательности - это номер столбца, в который  игрок бросил фишку.

const validator = (history) => {
  const initialState = {
    board: INITIAL_BOARD,
    playerMoves: { player_1: [], player_2: [] },
    duplicateTracker: {}, // Отслеживает количество фишек в каждом столбце.
    output: {
      step_0: {
        player_1: [],
        player_2: [],
        board_state: 'waiting',
      },
    },
  }

  const finalState = history.reduce((acc, column, index) => {
    const prevBoard = acc.board
    const prevPlayersMoves = acc.playerMoves

    const currentPlayerId = index % 2 === 0 ? 'player_1' : 'player_2'
    const step = index + 1

    // Валидация хода: проверяем, что столбец находится в пределах доски
    // и что столбец не переполнен.
    const chipsInColumn = acc.duplicateTracker[column] || 0 //текущее количество фишек в столбце
    if (column < 0 || column > 6 || chipsInColumn >= 6) {
      acc.output[`step_${step}`] = {
        player_1: prevPlayersMoves.player_1,
        player_2: prevPlayersMoves.player_2,
        board_state: 'invalid_move', // Невалидный ход
      }
      return acc
    }

    // Определяем индекс строки, куда упадет фишка.
    // Используем 5 как базу, так как 5 - это нижний ряд доски,
    const row = 5 - chipsInColumn

    // Делаем глубокую копию доски и обновляем ее состояние, присваивая ячейке playerId тем самым заполняя ячейку
    const newBoard = prevBoard.map((row) => [...row])
    newBoard[row][column] = currentPlayerId

    // Увеличиваем количество фишек в данном столбце, так как ячейка заполнилась playerId
    acc.duplicateTracker[column] = (acc.duplicateTracker[column] || 0) + 1

    const newPlayerMoves = {
      ...prevPlayersMoves,
      [currentPlayerId]: [...prevPlayersMoves[currentPlayerId], [row, column]],
    }

    const lastMove = { row, column, player: { id: currentPlayerId } }
    const winResult = checkWin(lastMove, newBoard)
    const isDraw = checkDraw(newBoard)
    let boardState = 'pending'
    let winnerInfo = null

    // Формируем информацию о победителе, если он есть.
    // .reverse() используется для того, чтобы выигрышные позиции
    // отображались в отчете в правильном порядке.
    if (winResult.winner) {
      boardState = 'win'
      winnerInfo = {
        who: winResult.winner.id,
        positions: winResult.winningCells
          .map((cell) => [cell.row, cell.col])
          .reverse(),
      }
    } else if (isDraw) {
      boardState = 'draw'
    }

    const stepData = {
      player_1: newPlayerMoves.player_1,
      player_2: newPlayerMoves.player_2,
      board_state: boardState,
    }

    if (winnerInfo) {
      stepData.winner = winnerInfo
    }
    acc.output[`step_${step}`] = stepData
    acc.board = newBoard
    acc.playerMoves = newPlayerMoves

    return acc
  }, initialState)

  return finalState.output
}

export default validator
