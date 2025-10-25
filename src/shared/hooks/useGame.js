import { useState } from 'react'
import { makeMove, checkDraw, checkWin } from '@/game-logic/gameLogic'
import {
  getInitialState,
  GAME_PLAYERS,
  INITIAL_SCORE,
} from '../constants/gameConstants'

const useGame = () => {
  const [gamePlayers, setGamePlayers] = useState(GAME_PLAYERS)
  const [score, setScore] = useState(INITIAL_SCORE)
  const [gameState, setGameState] = useState(getInitialState())
  const [gameStatus, setGameStatus] = useState('waiting') // pending, waiting - игра не началась, win, draw

  const handleMove = (columnIndex) => {
    if (gameStatus !== 'pending') return

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
        setScore((prevScore) => ({
          ...prevScore,
          [winner.id]: prevScore[winner.id] + 1,
        }))
      } else if (isDraw) {
        setGameStatus('draw')
      }

      return newGameState
    })
  }

  const handleRestart = () => {
    setGameState(getInitialState())
    setGameStatus('pending')
    setScore(INITIAL_SCORE)
  }

  const handlePlay = () => {
    setGameState(getInitialState())
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
