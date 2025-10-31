import type { CellPosition } from '@shared/constants/gameConstants.types'
import type { CellProps } from './Cell'

export const isWinningCell = (
  winCellsCombination: CellPosition[],
  rowIndex: number,
  colIndex: number,
): boolean => {
  return winCellsCombination.some(
    (cell) => cell.row === rowIndex && cell.col === colIndex
  )
}

export const getClassNames = (
  cell: CellProps['cell'],
  playersClasses: CellProps['playersClasses'],
  winningCells: CellProps['winningCells'],
  rowIndex: CellProps['rowIndex'],
  colIndex: CellProps['colIndex']
): string => {
  const defaultClass = 'chip'
  const playerClass =
    cell === 'X' ? playersClasses.player1 : playersClasses.player2
  const winningClass =
    winningCells.length === 4 && isWinningCell(winningCells, rowIndex, colIndex)
      ? 'chip-winning'
      : ''

  return `${defaultClass} ${playerClass} ${winningClass}`
}
