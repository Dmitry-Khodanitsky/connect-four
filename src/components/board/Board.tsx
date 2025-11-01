import './Board.css'
import Cell from './Cell'
import type {
  GameState,
  GamePlayers,
} from '@/shared/constants/gameConstants.types'


interface BoardProps {
  gameState: GameState
  players: GamePlayers
  onClick: (colIndex: number) => void
}

const Board = ({ gameState, players, onClick }: BoardProps) => {
  const playersClasses = {
    player1: players.player_1.id,
    player2: players.player_2.id,
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
