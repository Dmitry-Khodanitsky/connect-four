// cellHelpers.js
export const isWinningCell = (winCellsCombination, rowIndex, colIndex) => {
  return winCellsCombination.some(
    (cell) => cell.row === rowIndex && cell.col === colIndex
  )
}

export const getClassNames = (
  cell,
  playersClasses,
  winningCells,
  rowIndex,
  colIndex
) => {
  const defaultClass = 'chip'
  const playerClass =
    cell === 'X' ? playersClasses.player1 : playersClasses.player2
  const winningClass =
    winningCells.length === 4 && isWinningCell(winningCells, rowIndex, colIndex)
      ? 'chip-winning'
      : ''

  return `${defaultClass} ${playerClass} ${winningClass}`
}
