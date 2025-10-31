import { useReducer } from 'react'
import { makeMove, checkDraw, checkWin } from '@/game-logic/gameLogic'
import {
  getInitialGameState,
  ACTION_TYPES,
  initialState,
} from '../constants/gameConstants'
import type {
  CombinedGameState,
  GameState,
  GameStatus,
  Score,
} from '@/shared/constants/gameConstants.types'
import type { UseGameReturn, Action } from './useGame.types'
import validator from '@/game-logic/validator'

/**
 * useGame.js
 * Кастомный хук для управления состоянием игры.
 * Использует useReducer для обработки игровых действий и обновления состояния.
 */

const reducer = (
  state: CombinedGameState,
  action: Action
): CombinedGameState => {
  switch (action.type) {
    case ACTION_TYPES.START_GAME: {
      return {
        ...state,
        gameState: getInitialGameState(),
        gameStatus: 'pending',
      }
    }
    case ACTION_TYPES.RESTART_GAME: {
      return {
        ...initialState,
        gameStatus: 'pending',
      }
    }

    case ACTION_TYPES.MAKE_MOVE: {
      // Блокируем игровую доску, если игра не в статусе 'pending'.
      if (state.gameStatus !== 'pending') return state

      const moveResult = makeMove(state.gameState, action.payload)
      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return state
      }

      // Сохраняем информацию о последнем ходе для последующих проверок.
      const lastMove = {
        row: moveResult.row,
        column: moveResult.column,
        player: moveResult.player,
      }

      const newHistory = [...state.gameState.history, lastMove.column]
      // Вызов validator служит только для демонстрации работы функции validator
      console.log(validator(newHistory))

      const { winner, winningCells } = checkWin(lastMove, moveResult.board)
      const nextPlayer =
        state.gameState.currentPlayer.id === state.gamePlayers.player1.id
          ? state.gamePlayers.player2
          : state.gamePlayers.player1

      const newGameState: GameState = {
        ...state.gameState,
        board: moveResult.board,
        currentPlayer: nextPlayer,
        winner,
        winningCells,
        history: newHistory,
      }

      let newGameStatus: GameStatus = state.gameStatus
      let newScore: Score = state.score

      if (winner) {
        newGameStatus = 'win'
        newScore = {
          ...state.score,
          [winner.id]: state.score[winner.id as keyof Score] + 1,
        }
      } else if (checkDraw(moveResult.board)) {
        newGameStatus = 'draw'
      }

      return {
        ...state,
        gameStatus: newGameStatus,
        gameState: newGameState,
        score: newScore,
      }
    }
    default: {
      return state
    }
  }
}

const useGame = (): UseGameReturn => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleMove = (columnIndex: number): void => {
    dispatch({ type: ACTION_TYPES.MAKE_MOVE, payload: columnIndex })
  }

  const handleRestart = (): void => {
    dispatch({ type: ACTION_TYPES.RESTART_GAME })
  }

  const handlePlay = (): void => {
    dispatch({ type: ACTION_TYPES.START_GAME })
  }

  return {
    gameState: state.gameState,
    gameStatus: state.gameStatus,
    gamePlayers: state.gamePlayers,
    score: state.score,
    handleMove,
    handleRestart,
    handlePlay,
  }
}

export default useGame
