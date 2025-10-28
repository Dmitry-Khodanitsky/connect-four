export const GAME_RULES = {
  title: 'Правила игры',
  description: `
    4 В РЯД - игра для двух игроков, где цель 
    расположить четыре своих фишки в ряд по вертикали, 
    горизонтали или диагонали. Кто сделает это первым тот победил!
  `,
  rules: [
    'Игроки по очереди бросают фишки в колонки.',
    'Фишка падает на самую нижнюю свободную ячейку в колонке.',
    'Первый игрок, собравший 4 фишки в ряд, побеждает.',
    'Если доска заполнена полностью - ничья.',
  ],
}

export const GAME_PLAYERS = {
  player1: {
    id: 'X',
    name: 'Игрок 1',
    moveText: 'Ход игрока 1',
    winText: 'Победил игрок 1',
    className: 'player-1',
  },
  player2: {
    id: 'O',
    name: 'Игрок 2',
    moveText: 'Ход игрока 2',
    winText: 'Победил игрок 2',
    className: 'player-2',
  },
}

export const INITIAL_BOARD = new Array(6)
  .fill()
  .map(() => new Array(7).fill(null))

export const INITIAL_SCORE = {
  X: 0,
  O: 0,
}

export const ACTION_TYPES = {
  MAKE_MOVE: 'MAKE_MOVE',
  RESTART_GAME: 'RESTART_GAME',
  START_GAME: 'START_GAME',
}

export const getInitialGameState = () => ({
  board: INITIAL_BOARD,
  currentPlayer: GAME_PLAYERS.player1,
  winner: null,
  winningCells: [],
  history: [],
})
