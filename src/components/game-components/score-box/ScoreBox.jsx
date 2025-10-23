import './ScoreBox.css'

const ScoreBox = ({ player }) => {
  const { className, name, score } = player
  return (
    <div className={`score-box score-box--${className}`}>
      <div className="player-avatar"></div>
      <div className="score-info">
        {name} Счет: {score}
      </div>
    </div>
  )
}

export default ScoreBox
