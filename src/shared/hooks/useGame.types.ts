import { ACTION_TYPES } from '../constants/gameConstants'
import type { CombinedGameState } from '../constants/gameConstants.types'

export interface UseGameReturn extends CombinedGameState {
  handleMove: (columnIndex: number) => void
  handleRestart: () => void
  handlePlay: () => void
}

export type Action =
  | { type: typeof ACTION_TYPES.START_GAME }
  | { type: typeof ACTION_TYPES.RESTART_GAME }
  | { type: typeof ACTION_TYPES.MAKE_MOVE; payload: number }
