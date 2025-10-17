import './Board.css'

const Board = ({ gameState, onClick }) => {
  return (
    <div className="game_board">
      {gameState.board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="cell"
            onClick={() => onClick(colIndex)}
          >
            {cell !== null && (
              <div
                className={`chip ${cell === 'X' ? 'player_1' : 'player_2'}`}
              ></div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Board
