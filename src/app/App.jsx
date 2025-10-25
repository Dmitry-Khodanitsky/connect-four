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
        <StartMenu onPlay={handlePlay} />
    )
  }

  return (
      <GameScreen
        gameState={gameState}
        gameStatus={gameStatus}
        gamePlayers={gamePlayers}
        score={score}
        handleMove={handleMove}
        handleRestart={handleRestart}
        handlePlay={handlePlay}
      />
  )
}

export default App
