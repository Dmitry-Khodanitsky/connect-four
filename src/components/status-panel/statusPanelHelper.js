const getStatusContent = (gameStatus, currentPlayer, gameWinner) => {
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
