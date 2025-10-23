import './StatusPanel.css'
import Button from '../../ui/button'

const StatusPanel = ({ currentPlayer, gameWinner, gameStatus, onPlay }) => {
  const getStatusContent = () => {
    switch (gameStatus) {
      case 'pending':
        return {
          text: currentPlayer.moveText,
          className: currentPlayer.className,
          startButton: false,
        }

      case 'win':
        return {
          text: gameWinner.winText,
          className: gameWinner.className,
          startButton: true,
        }

      case 'draw':
        return {
          text: 'Ничья!',
          className: 'status-draw',
          startButton: true,
        }

      default:
        return {
          text: 'Начать игру',
          className: 'status-default',
          startButton: true,
        }
    }
  }

  const { text, className, startButton } = getStatusContent()

  return (
    <div className={`status-panel ${className}`}>
      <p>{text}</p>
      {startButton && <Button type="status-panel" onClick={onPlay}>Сыграть еще</Button>}
    </div>
  )
}

export default StatusPanel
