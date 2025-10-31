import type {
  GameStatus,
  Player,
} from '@/shared/constants/gameConstants.types'

interface StatusContent {
  text: string
  className: string
  startButton: boolean
  showWinAnimation: boolean
}

const getStatusContent = (
  gameStatus: GameStatus,
  currentPlayer: Player,
  gameWinner: Player
): StatusContent => {
  switch (gameStatus) {
    case 'win':
      return {
        text: gameWinner.winText,
        className: gameWinner.className,
        startButton: true,
        showWinAnimation: true,
      }

    case 'draw':
      return {
        text: 'Ничья!',
        className: 'status-draw',
        startButton: true,
        showWinAnimation: false,
      }
    default:
      return {
        text: currentPlayer.moveText,
        className: currentPlayer.className,
        startButton: false,
        showWinAnimation: false,
      }
  }
}

export default getStatusContent
