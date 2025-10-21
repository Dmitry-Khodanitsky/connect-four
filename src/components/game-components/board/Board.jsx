import './Board.css'

const Board = ({ gameState, playerConfig, onClick }) => {
  const className = {
    player1: playerConfig.player1.className,
    player2: playerConfig.player2.className,
  }
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
                className={`chip ${
                  cell === 'X' ? className.player1 : className.player2
                }`}
              ></div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Board
