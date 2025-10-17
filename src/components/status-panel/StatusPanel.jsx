import './StatusPanel.css'

const StatusPanel = ({ currentPlayer, gameWinner, gameStatus }) => {

  const getStatusContent = () => {
    switch (gameStatus) {
      case 'pending':
        const playerTurn =
          currentPlayer === 'X' ? 'Ход игрока 1' : 'Ход игрока 2'
        const turnColorClass = currentPlayer === 'X' ? 'player_1' : 'player_2'
        return {
          text: playerTurn,
          className: turnColorClass,
        }

      case 'win':
        const winnerText =
          gameWinner === 'X' ? 'Победил игрок 1!' : 'Победил игрок 2!'
        const winnerColorClass = gameWinner === 'X' ? 'player_1' : 'player_2'
        return {
          text: winnerText,
          className: winnerColorClass,
        }

      case 'draw':
        return {
          text: 'Ничья!',
          className: 'status_draw',
        }

      default:
        return {
          text: 'Начните игру',
          className: 'status_default',
        }
    }
  }

  const { text, className } = getStatusContent()

  return (
    <div className={`status_panel ${className}`}>
      <p>{text}</p>
    </div>
  )
}

export default StatusPanel
