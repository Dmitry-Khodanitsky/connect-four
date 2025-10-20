import './App.css'
import Board from '../board'
import StatusPanel from '../status-panel'
import ScoreBox from '../score-box'
import GameFieldHeader from '../game-field-header'
import { useGame } from '../../hooks/useGame'


function App() {
  const {
    gameState,
    gameStatus,
    gameScore,
    handleMove,
    handleRestart,
    handlePlayAgain,
  } = useGame()
  
  return (
    <main className="game-field">
      <GameFieldHeader onRestart={handleRestart} />
      <section className="board-box">
        <ScoreBox score={gameScore.player_1} player="player-1" />
        <Board gameState={gameState} onClick={handleMove} />
        <ScoreBox score={gameScore.player_2} player="player-2" />
      </section>
      <StatusPanel
        currentPlayer={gameState.currentPlayer}
        gameWinner={gameState.winner}
        gameStatus={gameStatus}
        onPlayAgain={handlePlayAgain}
      />
    </main>
  )
}

export default App
