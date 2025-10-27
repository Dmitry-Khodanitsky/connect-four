import './ScoreBox.css'

const ScoreBox = ({ player, score }) => {
  const { className, name } = player

  return (
    <div className={`score-box`}>
      <div className={`player-avatar ${className}`}></div>
      <div className="score-info">
        {name} Счет: {score[player.id]}
      </div>
    </div>
  )
}

export default ScoreBox
