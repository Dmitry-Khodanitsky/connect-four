import './ScoreBox.css'
import { motion } from 'framer-motion'
import { slideDown } from '@shared/animations/constants'

const ScoreBox = ({ player, score }) => {
  const { className, name } = player

  return (
    <motion.div
      className={`score-box`}
      {...slideDown}
    >
      <div className={`player-avatar ${className}`}></div>
      <div className="score-info">
        {name} Счет: {score[player.id]}
      </div>
    </motion.div>
  )
}

export default ScoreBox
