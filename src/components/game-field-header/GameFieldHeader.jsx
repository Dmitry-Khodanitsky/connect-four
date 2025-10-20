import './GameFieldHeader.css'

const GameFieldHeader = ({ onRestart }) => {
  return (
    <header className="game-field-header">
      <div className="header-content">
        <button className="header-button" aria-label="Правила игры">Правила</button>
        <h1>4 в ряд </h1>
        <button
          className="header-button restart-button"
          onClick={onRestart}
          aria-label="Начать заново"
        >
          Рестарт
        </button>
      </div>
    </header>
  )
}

export default GameFieldHeader
