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
    board: new Array(6).fill().map(() => new Array(7).fill(null)),
    currentPlayer: playersConfig.player1,
    winner: null,
    history: [],
  }

  const [gameState, setGameState] = useState(initialState)
  const [gameStatus, setGameStatus] = useState('waiting') // pending, waiting - игра не началась, win, draw

  const handleMove = (columnIndex) => {
    setGameState((prevState) => {
      const moveResult = makeMove(prevState, gameStatus, columnIndex)
      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return prevState
      }

      const winner = null // тут должна быть функция определения победителя
      const isDraw = !winner && checkDraw(moveResult.board)

      const newGameState = {
        ...prevState,
        board: moveResult.board,
        currentPlayer:
          prevState.currentPlayer === playersConfig.player1
            ? playersConfig.player2
            : playersConfig.player1,
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

  const handlePlay = () => {
    setGameState(initialState)
    setGameStatus('pending')
  }

  return {
    gameState,
    gameStatus,
    playersConfig,
    handleMove,
    handleRestart,
    handlePlay,
  }
}
