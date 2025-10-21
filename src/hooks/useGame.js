import { useState } from 'react'
import { makeMove, checkDraw } from '../utils/gameLogic'

export const useGame = () => {
  const [playersConfig, setPlayersConfig] = useState({
    player1: {
      id: 'X',
      name: 'Игрок 1',
      avatar: '👨', // или URL к изображению
      moveText: 'Ход игрока 1',
      winText: 'Победил игрок 1',
      className: 'player-1',
      score: 0,
    },
    player2: {
      id: 'O',
      name: 'Игрок 2',
      avatar: '👩',
      moveText: 'Ход игрока 2',
      winText: 'Победил игрок 2',
      className: 'player-2',
      score: 0,
    },
  })

  const initialState = {
    board: Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(null)),
    currentPlayer: PLAYER1,
    winner: null, // player1, player2
    history: [],
  }

  return initialState
}

export const useGame = () => {
  const initialState = createInitialState()

  const [gameState, setGameState] = useState(initialState)
  const [gameStatus, setGameStatus] = useState('pending') // pending, waiting - игра не началась, win, draw
  const [gameScore, setGameScore] = useState({
    player_1: 10,
    player_2: 5,
  })

  const handleMove = (columnIndex) => {
    setGameState((prevState) => {
      const moveResult = makeMove(prevState, columnIndex)
      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return prevState
      }

      const winner = null // тут должна быть функция определения победителя
      const isDraw = !winner && checkDraw(moveResult.board)

      const newGameState = {
        ...prevState,
        board: moveResult.board,
        currentPlayer: prevState.currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1,
        winner: winner, 
        history: [
          ...prevState.history,
          {
            [moveResult.player]: {
              column: moveResult.column,
              row: moveResult.row,
            },
          },
        ],
      }

      if (winner) {
        setGameStatus('win')
      } else if (isDraw) {
        setGameStatus('draw')
      }

      return newGameState
    })
  }

  const handleRestart = () => {
    setGameState(initialState)
    setGameStatus('pending')
    setGameScore({
      player_1: 0,
      player_2: 0,
    })
  }

  const handlePlayAgain = () => {
    setGameState(initialState)
    setGameStatus('pending')
  }

  return {
    gameState,
    gameStatus,
    gameScore,
    handleMove,
    handleRestart,
    handlePlayAgain,
  }
}
