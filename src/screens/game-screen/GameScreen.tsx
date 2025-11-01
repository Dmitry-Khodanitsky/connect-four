import './GameScreen.css'
import { Board, BoardMenu, ScoreBox, StatusPanel } from '@/components'
import { motion } from 'framer-motion'
import { slideLeft } from '@shared/animations/constants'
import type {
  GameState,
  GameStatus,
  GamePlayers,
  Score,
} from '@/shared/constants/gameConstants.types'

interface GameScreenProps {
  gameState: GameState
  gameStatus: GameStatus
  gamePlayers: GamePlayers
  score: Score
  handleMove: (columnIndex: number) => void
  handleRestart: () => void
  handlePlay: () => void
}

const GameScreen = ({
  gameState,
  gameStatus,
  gamePlayers,
  score,
  handleMove,
  handleRestart,
  handlePlay,
}: GameScreenProps) => {
  return (
    <motion.main className="game-field" {...slideLeft}>
      <BoardMenu onRestart={handleRestart} />
      <section className="board-box">
        <ScoreBox player={gamePlayers.player_1} score={score} />
        <Board
          gameState={gameState}
          onClick={handleMove}
          players={gamePlayers}
        />
        <ScoreBox player={gamePlayers.player_2} score={score} />
      </section>
      <StatusPanel
        currentPlayer={gameState.currentPlayer}
        gameWinner={gameState.winner}
        gameStatus={gameStatus}
        onPlay={handlePlay}
      />
    </motion.main>
  )
}

export default GameScreen
