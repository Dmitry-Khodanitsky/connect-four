import { useState } from 'react'
import './App.css'
import Board from '../board' 
import StatusPanel from '../status-panel' 
import ScoreBox from '../score-box'
import { findLowestEmptyCell, makeMove } from '../../utils/gameLogic'

function App() {
  const ROWS = 6
  const COLS = 7
  const PLAYER1 = 'X'
  const PLAYER2 = '0'

  const initialState = {
    board: Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(null)),
    currentPlayer: PLAYER1,
    winner: null,
    gameStatus: 'pending', //waiting - игра не началась, win, draw
  }

  const [gameState, setGameState] = useState(initialState)
  const [gameStatus, setGameStatus] = useState('pending') // pending, waiting - игра не началась, win, draw
  const [gameScore, setGameScore] = useState({
    player_1: 10,
    player_2: 5,
  })

  const handleMove = (colIndex) => {
    setGameState((prevState) => {
      const moveResult = makeMove(prevState, colIndex)
      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return prevState
      }

      const newGameState = {
        ...prevState,
        board: moveResult.board,
        currentPlayer: prevState.currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1,
        winner: null, // тут должна быть функция определения победителя
      }

      return newGameState
    })
  }

  return (
    <main className="game_field">
      <div className="board-box">
        <ScoreBox score={gameScore.player_1} player='player_1'/> 
      <Board gameState={gameState} onClick={handleMove} />
        <ScoreBox score={gameScore.player_2} player='player_2'/>
      </div>
      <StatusPanel
        currentPlayer={gameState.currentPlayer}
        gameWinner={gameState.winner}
        gameStatus={gameStatus}
      />
    </main>
  )
}

export default App
