import './ScoreBox.css'

const ScoreBox = ({ score, player }) => {
  const playerName = player === 'player-1' ? 'Игрок 1' : 'Игрок 2'

  return (
    <div className={`score-box score-box--${player}`}>
      <div className="player-avatar"></div>
      <div className="score-info">
        {playerName} Счет: {score}
      </div>
    </div>
  )
}

export default ScoreBox
