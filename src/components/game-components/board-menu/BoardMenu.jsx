import './BoardMenu.css'
import Button from '../../ui/button'

const GameFieldHeader = ({ onRestart }) => {
  return (
    <header className="board-menu">
      <div className="board-menu-content">
        <Button className="board-menu">
          Правила
        </Button>
        <h1>4 в ряд </h1>
        <Button
          onClick={onRestart}
          type="board-menu board-menu--restart"
        >
          Рестарт
        </Button>
      </div>
    </header>
  )
}

export default GameFieldHeader
