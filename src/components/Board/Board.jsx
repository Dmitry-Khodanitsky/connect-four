import './Board.css'

const Board = ({ boardState, onClick }) => {
    console.log(onClick)
  return (
    <div className="game_board">
      {boardState.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="cell"
            onClick={() => onClick(rowIndex, colIndex)}
          >
            {/* {console.log(cell)} */}
            {/* {cell && <div className={`disc ${cell}`} />} */}
          </div>
        ))
      )}
    </div>
  )
}

export default Board
