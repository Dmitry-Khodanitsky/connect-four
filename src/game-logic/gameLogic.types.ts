import type {
  Board,
  CellPosition,
  GameStatus,
} from '@/shared/constants/gameConstants.types'

export interface LastMove {
  row: number
  column: number
  playerId: 'player_1' | 'player_2'
}

export interface MoveResult {
  board: Board
  row: number
  column: number
  playerId: 'player_1' | 'player_2'
}

export interface CheckWinResult {
  winnerId: 'player_1' | 'player_2' | null
  winningCells: CellPosition[]
}

// Типы для функции validation:
export interface WinnerInfo {
  who: 'player_1' | 'player_2'
  positions: number[][] // Массив координат выигрышных фишек [row, col]
}

export interface StepDataInfo {
  player_1: number[][] // Массив координат хода  [row, col]
  player_2: number[][]
  board_state: GameStatus | 'invalid_move'
  winner?: WinnerInfo
}
export interface ValidatorResult {
  [key: string]: StepDataInfo
}

export interface ValidatorState {
  board: Board
  playerMoves: { player_1: number[][]; player_2: number[][] }
  duplicateTracker: { [key: number]: number }
  output: ValidatorResult
}
