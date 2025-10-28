import { INITIAL_BOARD } from '@/shared/constants/gameConstants'
import { checkWin, checkDraw } from './gameLogic.js'

const validator = (history) => {
  const initialState = {
    board: INITIAL_BOARD,
    playerMoves: { player_1: [], player_2: [] },
    duplicateTracker: {},
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

    const currentRow = acc.duplicateTracker[column] || 0
    if (column < 0 || column > 6 || currentRow >= 6) {
      acc.output[`step_${step}`] = {
        player_1: prevPlayersMoves.player_1,
        player_2: prevPlayersMoves.player_2,
        board_state: 'invalid_move', // Невалидный ход
      }
      return acc
    }

    const row = 5 - currentRow
    const newBoard = prevBoard.map((row) => [...row])
    newBoard[row][column] = currentPlayerId

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

    if (winResult.winner) {
      boardState = 'win'
      winnerInfo = {
        who: winResult.winner,
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
