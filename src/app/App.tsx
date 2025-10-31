import './App.css'
import { StartMenu, GameScreen } from '../screens'
import { useGame } from '../shared/hooks'
import Modal from 'react-modal'

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

  // setAppElement это функция из библиотеки react-modal, которая позволяет указать, какой HTML-элемент является основным контейнером вашего приложения. Когда модальное окно открывается, react-modal использует эту информацию, чтобы сделать основной контент страницы недоступным для скринридеров (программ для чтения с экрана). Это достигается путем добавления атрибута aria-hidden="true" к указанному элементу.

  Modal.setAppElement('#root')

  if (gameStatus === 'waiting') {
    return <StartMenu onPlay={handlePlay} />
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
