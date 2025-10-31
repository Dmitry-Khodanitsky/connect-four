import './ScoreBox.css'
import { motion } from 'framer-motion'
import { slideDown } from '@shared/animations/constants'
import type { Player, Score } from '@/shared/constants/gameConstants.types'

interface ScoreBoxProps {
  player: Player
  score: Score
}

const ScoreBox = ({ player, score }: ScoreBoxProps) => {
  const { className, name, id } = player

  return (
    <motion.div
      className={`score-box`}
      {...slideDown}
    >
      <div className={`player-avatar ${className}`}></div>
      <div className="score-info">
        {name} Счет: {score[id]}
      </div>
    </motion.div>
  )
}

export default ScoreBox
