import './StartMenu.css'
import Button from '../../ui/button'
const StartMenu = ({ onPlay }) => {
  return (
    <div className="start-menu">
      <h1>4 в ряд </h1>
      <Button className={'menu'} onClick={onPlay}>
        Начать игру
      </Button>
      <Button className={'menu'}>Выбрать персонажа</Button>
      <Button className={'menu'}>Правила</Button>
    </div>
  )
}

export default StartMenu
