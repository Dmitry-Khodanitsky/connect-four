import './StatusPanel.css'
import Button from '../../ui/button'
import Lottie from 'lottie-react'
import animationData from '../../../assets/lootie/congratulations.json'
import getStatusContent from '../../../helpers'

const StatusPanel = ({ currentPlayer, gameWinner, gameStatus, onPlay }) => {
  
  const ConfettiAnimation = () => {
    return (
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          height: '70vh',
          width: '70vw',
          position: 'absolute',
        }}
      />
    )
  }

  const { text, className, startButton, showWinAnimation } = getStatusContent(gameStatus, currentPlayer, gameWinner)

  return (
    <div className={`status-panel ${className}`}>
      <p>{text}</p>
      {startButton && (
        <Button type="status-panel" onClick={onPlay}>
          Сыграть еще
        </Button>
      )}
      {showWinAnimation && <ConfettiAnimation />}
    </div>
  )
}

export default StatusPanel
