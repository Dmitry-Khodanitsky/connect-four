import './StatusPanel.css'
const StatusPanel = ({currentPlayer, gameResult}) => {
    const playerTurn = currentPlayer === 'X' ? 'Ход игрока 1' : 'Ход игрока 2'
 return (
    <div className="status_panel">
        <p>{playerTurn}</p>
    </div>
 )
}

export default StatusPanel