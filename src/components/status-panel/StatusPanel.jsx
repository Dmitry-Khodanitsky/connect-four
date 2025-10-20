import './StatusPanel.css'

const StatusPanel = ({
  currentPlayer,
  gameWinner,
  gameStatus,
  onPlayAgain,
}) => {
  const getStatusContent = () => {
    switch (gameStatus) {
      case 'pending':
        const playerTurn =
          currentPlayer === 'X' ? 'Ход игрока 1' : 'Ход игрока 2'
        const turnColorClass = currentPlayer === 'X' ? 'player-1' : 'player-2'
        return {
          text: playerTurn,
          className: turnColorClass,
          restartButton: false,
        }

      case 'win':
        const winnerText =
          gameWinner === 'X' ? 'Победил игрок 1!' : 'Победил игрок 2!'
        const winnerColorClass = gameWinner === 'X' ? 'player-1' : 'player-2'
        return {
          text: winnerText,
          className: winnerColorClass,
          restartButton: true,
        }

      case 'draw':
        return {
          text: 'Ничья!',
          className: 'status-draw',
          restartButton: true,
        }

      default:
        return {
          text: 'Начните игру',
          className: 'status-default',
          restartButton: false,
        }
    }
  }

  const { text, className, restartButton } = getStatusContent()

  return (
    <div className={`status-panel ${className}`}>
      <p>{text}</p>
      {restartButton && (
        <button className="play-again" onClick={onPlayAgain}>
          Сыграть снова
        </button>
      )}
    </div>
  )
}

export default StatusPanel
