import { useState } from 'react'
import './App.css'
import Board from '../Board/Board'
import StatusPanel from '../StatusPanel/StatusPanel'

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

  const onCellClick = (rowIndex, colIndex) => {
    console.log('Coordinates: ', rowIndex, colIndex)
    const result = findLowestEmptyCell(gameState.board, colIndex)
  
    if (result) {
      console.log('Закрашена ячейка ', result)
    }
  }

  return (
    <main className="main_section">
      <Board boardState={gameState.board} onClick={onCellClick}/>
    </main>
  )
}

export default App
