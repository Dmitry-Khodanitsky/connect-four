import { useState } from 'react'
import { makeMove, checkDraw, checkWin } from '../game-logic/gameLogic'

const useGame = () => {
  const [gamePlayers, setGamePlayers] = useState({
    player1: {
      id: 'X',
      name: 'Игрок 1',
      avatar: '👨', // или URL к изображению
      moveText: 'Ход игрока 1',
      winText: 'Победил игрок 1',
      className: 'player-1',
    },
    player2: {
      id: 'O',
      name: 'Игрок 2',
      avatar: '👩',
      moveText: 'Ход игрока 2',
      winText: 'Победил игрок 2',
      className: 'player-2',
    },
  })

  const initialState = {
    board: new Array(6).fill().map(() => new Array(7).fill(null)),
    currentPlayer: gamePlayers.player1,
    winner: null,
    history: [],
  }
  const initialScore = {
    X: 0,
    O: 0,
  }
  const [score, setScore] = useState(initialScore)
  const [gameState, setGameState] = useState(initialState)
  const [gameStatus, setGameStatus] = useState('waiting') // pending, waiting - игра не началась, win, draw

  const handleMove = (columnIndex) => {
    setGameState((prevState) => {
      const moveResult = makeMove(prevState, gameStatus, columnIndex)
      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return prevState
      }

      const lastMove = {
        row: moveResult.row,
        column: moveResult.column,
        player: moveResult.player,
      }

      const winner = checkWin(lastMove, moveResult.board)
      const isDraw = !winner && checkDraw(moveResult.board)

      const newGameState = {
        ...prevState,
        board: moveResult.board,
        currentPlayer:
          prevState.currentPlayer === gamePlayers.player1
            ? gamePlayers.player2
            : gamePlayers.player1,
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
        setScore((prevScore) => {
          return {
            ...prevScore,
            [winner.id]: prevScore[winner.id] + 1,
          }
        })
      } else if (isDraw) {
        setGameStatus('draw')
      }

      return newGameState
    })
  }

  const handleRestart = () => {
    setGameState(initialState)
    setGameStatus('pending')
    setScore(initialScore)
  }

  const handlePlay = () => {
    setGameState(initialState)
    setGameStatus('pending')
  }

  return {
    gameState,
    gameStatus,
    gamePlayers,
    score,
    handleMove,
    handleRestart,
    handlePlay,
  }
}

export default useGame
