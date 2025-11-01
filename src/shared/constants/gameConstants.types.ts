export type Board = (string | null)[][]

export interface GameRules {
  title: string
  description: string
  rules: string[]
}

export interface Player {
  id: 'player_1' | 'player_2'
  name: string
  moveText: string
  winText: string
}

export interface GamePlayers {
  player_1: Player
  player_2: Player
}

export interface Score {
  player_1: number
  player_2: number
}

export interface CellPosition {
  row: number
  col: number
}

export interface GameState {
  board: Board
  currentPlayer: Player
  winner: Player | null
  winningCells: CellPosition[]
  history: number[]
}
export type GameStatus = 'waiting' | 'pending' | 'win' | 'draw'

export interface CombinedGameState {
  gamePlayers: GamePlayers
  score: Score
  gameState: GameState
  gameStatus: GameStatus
}
