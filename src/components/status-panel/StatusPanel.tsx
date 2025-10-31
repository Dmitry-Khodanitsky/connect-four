import './StatusPanel.css'
import Button from '@/shared/ui/button'
import getStatusContent from './statusPanelHelper'
import ConfettiAnimation from './ConfettiAnimation'
import type { GameStatus, Player } from '@/shared/constants/gameConstants.types'

interface StatusPanelProps {
  currentPlayer: Player
  gameWinner: Player
  gameStatus: GameStatus
  onPlay: () => void
}


const StatusPanel = ({
  currentPlayer,
  gameWinner,
  gameStatus,
  onPlay,
}: StatusPanelProps) => {
  const { text, className, startButton, showWinAnimation } = getStatusContent(
    gameStatus,
    currentPlayer,
    gameWinner
  )

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
