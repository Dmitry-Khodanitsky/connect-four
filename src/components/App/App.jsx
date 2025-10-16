import { useState } from 'react'
import './App.css'
import Board from '../Board/Board'
import StatusPanel from '../StatusPanel/StatusPanel'
import { findLowestEmptyCell, makeMove } from '../../utils/gameLogic'

function App() {
  const ROWS = 6
  const COLS = 7

  const initialState = {
    board: Array(ROWS).fill().map(() => Array(COLS).fill(null)),
    currentPlayer: 'player_1',
    winner: null,
    gameOver: false
  }

  const [gameState, setGameState] = useState(initialState)

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
      <Board boardState={gameState.board} onClick={onCellClick}/>
    </main>
  )
}

export default App
