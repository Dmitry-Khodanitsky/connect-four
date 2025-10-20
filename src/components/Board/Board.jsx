import './Board.css'

const Board = ({ gameState, onClick }) => {
  return (
    <div className="game-board">
      {gameState.board.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}`}
            className="cell"
            onClick={() => onClick(columnIndex)}
          >
            {cell !== null && (
              <div
                className={`chip ${cell === 'X' ? 'player-1' : 'player-2'}`}
              ></div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Board
