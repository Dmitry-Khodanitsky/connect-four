import { getClassNames } from './cellHelpers'
import { motion, AnimatePresence } from 'framer-motion'
import { cellDrop } from '@shared/animations/constants'

const Cell = ({
  cell,
  playersClasses,
  winningCells,
  rowIndex,
  colIndex,
  onClick,
}) => {
  const cellClasses = getClassNames(
    cell,
    playersClasses,
    winningCells,
    rowIndex,
    colIndex
  )
  return (
    <div className="cell" onClick={() => onClick(colIndex)}>
      <AnimatePresence>
        {cell !== null && (
          <motion.div
            className={cellClasses}
            {...cellDrop}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Cell
