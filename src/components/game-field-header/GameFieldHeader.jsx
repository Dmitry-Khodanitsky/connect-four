import './GameFieldHeader.css'

const GameFieldHeader = ({ onRestart }) => {
  return (
    <header className="game_field_header">
      <div className="header_content">
        <button className="header_button" aria-label="Правила игры">Правила</button>
        <h1>4 в ряд </h1>
        <button
          className="header_button restart_button"
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
