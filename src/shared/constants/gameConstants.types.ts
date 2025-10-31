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

export interface ValidatorPlayerId { // Этот тип необходим для работы функции Validator
  id: 'player_1' | 'player_2'
}
type GameWinner = Player & ValidatorPlayerId

export interface GameState {
  board: Board
  currentPlayer: Player
  winner: GameWinner | null
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
