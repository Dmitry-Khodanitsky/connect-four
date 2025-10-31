import type { GameStatus, Player } from '@/shared/constants/gameConstants.types'

interface StatusContent {
  text: string
  className: string
  startButton: boolean
  showWinAnimation: boolean
}

const getStatusContent = (
  gameStatus: GameStatus,
  currentPlayer: Player,
  gameWinner: Player | null
): StatusContent => {
  switch (gameStatus) {
    case 'win':
      if (!gameWinner) {
        throw new Error('Неверное состояние игры: win статус без winner')
      }
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
