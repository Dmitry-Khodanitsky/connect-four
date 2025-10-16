import './StatusPanel.css'

const StatusPanel = ({ currentPlayer, gameResult }) => {
  const playerTurn = currentPlayer === 'X' ? 'Ход игрока 1' : 'Ход игрока 2'
  const colorClass = currentPlayer === 'X' ? 'player_1' : 'player_2'

  return (
    <div className={`status_panel ${colorClass}`}>
      <p>{playerTurn}</p>
    </div>
  )
}

export default StatusPanel
