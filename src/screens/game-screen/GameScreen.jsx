import './GameScreen.css'
import { Board, BoardMenu, ScoreBox, StatusPanel } from '@components'
import { motion } from 'framer-motion'
import { slideLeft } from '@shared/animations/constants'

function GameScreen({
  gameState,
  gameStatus,
  gamePlayers,
  score,
  handleMove,
  handleRestart,
  handlePlay,
}) {
  return (
    <motion.main
      className="game-field"
      {...slideLeft}
    >
      <BoardMenu onRestart={handleRestart} />
      <section className="board-box">
        <ScoreBox player={gamePlayers.player1} score={score} />
        <Board
          gameState={gameState}
          onClick={handleMove}
          players={gamePlayers}
        />
        <ScoreBox player={gamePlayers.player2} score={score} />
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
