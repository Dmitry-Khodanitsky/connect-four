import { useState } from 'react'
import './App.css'
import Board from '../board' 
import StatusPanel from '../status-panel' 
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

  const handleMove = (rowIndex, colIndex, board) => {
    console.log('Coordinates: ', rowIndex, colIndex)
    setGameState((prevState) => {
      const moveResult = makeMove(prevState, colIndex)

      if (!moveResult) {
        // Колонка заполнена, ход невозможен
        return prevState
      }
      console.log(prevState.board)

      return {
        ...prevState,
        board: moveResult.board,
        currentPlayer: prevState.currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1,
        winner: null, //winner,
        gameStatus: 'pending' // winner ? 'win' : isDraw ? 'draw' : 'pending',
      }
    })
  }

  return (
    <main className="main_section">
      <Board gameState={gameState} onClick={handleMove} />
      <StatusPanel currentPlayer={gameState.currentPlayer} gameResult={gameState.winner}/>
    </main>
  )
}

export default App
