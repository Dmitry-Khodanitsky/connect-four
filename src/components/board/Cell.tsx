import { getClassNames } from './cellHelpers'
import { motion, AnimatePresence } from 'framer-motion'
import { cellDrop } from '@shared/animations/constants'
import type { CellPosition } from '@/shared/constants/gameConstants.types'

export interface CellProps {
  cell: string | null
  playersClasses: { player1: string; player2: string }
  winningCells: CellPosition[]
  rowIndex: number
  colIndex: number
  onClick: (colIndex: number) => void
}

const Cell = ({
  cell,
  playersClasses,
  winningCells,
  rowIndex,
  colIndex,
  onClick,
}: CellProps) => {
  const cellClasses = getClassNames(
    cell,
    playersClasses,
    winningCells,
    rowIndex,
    colIndex
  )
  return (
    <button className="cell" onClick={() => onClick(colIndex)}>
      <AnimatePresence>
        {cell !== null && (
          <motion.div className={cellClasses} {...cellDrop}></motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default Cell
