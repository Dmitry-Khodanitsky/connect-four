import './ScoreBox.css'

const ScoreBox = ({ player, score }) => {
  const { className, name } = player

  return (
    <div className={`score-box score-box--${className}`}>
      <div className="player-avatar"></div>
      <div className="score-info">
        {name} Счет: {score[player.id]}
      </div>
    </div>
  )
}

export default ScoreBox
