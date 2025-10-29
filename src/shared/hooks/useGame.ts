import { useReducer } from 'react'
import { makeMove, checkDraw, checkWin } from '@/game-logic/gameLogic'
import {
  getInitialGameState,
  GAME_PLAYERS,
  INITIAL_SCORE,
  ACTION_TYPES,
} from '../constants/gameConstants'
import validator from '@/game-logic/validator'

/**
 * useGame.js
 * Кастомный хук для управления состоянием игры.
 * Использует useReducer для обработки игровых действий и обновления состояния.
 */

const initialState = {
  gamePlayers: GAME_PLAYERS, // содержит информацию об игроках: ID, className, name, moveText, winText,
  score: INITIAL_SCORE, // содержит начальный счет игры: {Х: 0, O: 0}
  gameState: getInitialGameState(), // возвращает  board: INITIAL_BOARD, currentPlayer: GAME_PLAYERS.player1, winner: null, winningCells: [], history: [],
  gameStatus: 'waiting', // waiting, pending, win, draw
}

const reducer = (state, action) => {
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

      const newGameState = {
        ...state.gameState,
        board: moveResult.board,
        currentPlayer: nextPlayer,
        winner,
        winningCells,
        history: newHistory,
      }

      let newGameStatus = state.gameStatus
      let newScore = state.score

      if (winner) {
        newGameStatus = 'win'
        newScore = {
          ...state.score,
          [winner.id]: state.score[winner.id] + 1,
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

const useGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleMove = (columnIndex) => {
    dispatch({ type: ACTION_TYPES.MAKE_MOVE, payload: columnIndex })
  }

  const handleRestart = () => {
    dispatch({ type: ACTION_TYPES.RESTART_GAME })
  }

  const handlePlay = () => {
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
