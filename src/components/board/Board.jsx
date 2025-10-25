import './Board.css'
import Cell from './Cell'

const Board = ({ gameState, players, onClick }) => {
  const playersClasses = {
    player1: players.player1.className,
    player2: players.player2.className,
  }

  return (
    <div className="game-board">
      {gameState.board.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${columnIndex}`}
              cell={cell}
              playersClasses={playersClasses}
              winningCells={gameState.winningCells}
              rowIndex={rowIndex}
              colIndex={columnIndex}
              onClick={onClick}
            />
          )
        })
      )}
    </div>
  )
}

export default Board
