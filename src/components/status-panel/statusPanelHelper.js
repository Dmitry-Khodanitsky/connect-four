 const getStatusContent = (gameStatus, currentPlayer, gameWinner) => {
    switch (gameStatus) {
      case 'pending':
        return {
          text: currentPlayer.moveText,
          className: currentPlayer.className,
          startButton: false,
          showWinAnimation: false,
        }

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
          text: 'Начать игру',
          className: 'status-default',
          startButton: true,
          showWinAnimation: false,
        }
    }
  }

  export default getStatusContent