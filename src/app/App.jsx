import './App.css'
import { StartMenu, GameScreen } from '../screens'
import { useGame } from '../shared/hooks'

function App() {
  const {
    gameState,
    gameStatus,
    gamePlayers,
    score,
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
      <GameScreen
        gameState={gameState}
        gameStatus={gameStatus}
        gamePlayers={gamePlayers}
        score={score}
        handleMove={handleMove}
        handleRestart={handleRestart}
        handlePlay={handlePlay}
      />
    </main>
  )
}

export default App
