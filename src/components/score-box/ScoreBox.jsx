import './ScoreBox.css'

const ScoreBox = ({ score, player }) => {
  const playerName = player === 'player_1' ? 'Игрок 1' : 'Игрок 2'

  return (
    <div className={`score_box score_box-${player}`}>
      <div className="player_avatar"></div>
      <div className="score_info">
        {playerName} Счет: {score}
      </div>
    </div>
  )
}

export default ScoreBox
