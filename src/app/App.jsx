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
    playersConfig,
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
        <ScoreBox playerConfig={playersConfig.player1} />
        <Board
          gameState={gameState}
          onClick={handleMove}
          playerConfig={playersConfig}
        />
        <ScoreBox playerConfig={playersConfig.player2} />
      </section>
      <StatusPanel
        currentPlayer={gameState.currentPlayer}
        gameWinner={gameState.winner}
        gameStatus={gameStatus}
        playerConfig={playersConfig}
        onPlay={handlePlay}
      />
    </main>
  )
}

export default App
