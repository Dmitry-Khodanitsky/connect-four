import { useReducer } from 'react'
import { makeMove, checkDraw, checkWin } from '@/game-logic/gameLogic'
import {
  getInitialGameState,
  GAME_PLAYERS,
  INITIAL_SCORE,
  ACTION_TYPES,
} from '../constants/gameConstants'

const initialState = {
  gamePlayers: GAME_PLAYERS,
  score: INITIAL_SCORE,
  gameState: getInitialGameState(),
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
      if (state.gameStatus !== 'pending') return state
      const moveResult = makeMove(state.gameState, action.payload)
      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return state
      }

      const lastMove = {
        row: moveResult.row,
        column: moveResult.column,
        player: moveResult.player,
      }

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
        history: [
          ...state.gameState.history,
          {
            [moveResult.player]: {
              column: moveResult.column,
              row: moveResult.row,
            },
          },
        ],
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
