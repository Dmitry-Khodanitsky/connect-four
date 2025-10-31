export type Board = (string | null)[][]

export interface GameRules {
  title: string
  description: string
  rules: string[]
}

export interface Player {
  id: 'X' | 'O'
  name: string
  moveText: string
  winText: string
  className: string
}

export interface GamePlayers {
  player1: Player
  player2: Player
}

export interface Score {
  X: number
  O: number
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
