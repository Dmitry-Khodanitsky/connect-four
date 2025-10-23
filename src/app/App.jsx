import './App.css'
import {
  Board,
  BoardMenu,
  ScoreBox,
  StartMenu,
  StatusPanel,
} from '../components/game-components'
import { useGame } from '../hooks/useGame'

function App() {
  const {
    gameState,
    gameStatus,
    gamePlayers,
    handleMove,
    handleRestart,
    handlePlay,
  } = useGame()

  if (gameStatus === 'waiting') {
    return (
      <main className="game-field">
        <StartMenu onPlay={handlePlay} />
      </main>
    )
  }

  return (
    <main className="game-field">
      <BoardMenu onRestart={handleRestart} />
      <section className="board-box">
        <ScoreBox player={gamePlayers.player1} />
        <Board
          gameState={gameState}
          onClick={handleMove}
          players={gamePlayers}
        />
        <ScoreBox player={gamePlayers.player2} />
      </section>
      <StatusPanel
        currentPlayer={gameState.currentPlayer}
        gameWinner={gameState.winner}
        gameStatus={gameStatus}
        onPlay={handlePlay}
      />
    </main>
  )
}

export default App
