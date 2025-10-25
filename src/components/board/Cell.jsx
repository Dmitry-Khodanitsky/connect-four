import { getClassNames } from './cellHelpers'

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
      {cell !== null && <div className={cellClasses}></div>}
    </div>
  )
}

export default Cell
