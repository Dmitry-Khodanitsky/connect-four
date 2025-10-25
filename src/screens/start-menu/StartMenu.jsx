import './StartMenu.css'
import { useModal } from '@/shared/hooks'
import Button from '@/shared/ui/button'
import RulesModal from '@/components/rules-modal'

const StartMenu = ({ onPlay }) => {
  const { isModalVisible, openModal, closeModal } = useModal()

  return (
    <>
      <ul className="start-menu">
        <li>
          <h1>4 в ряд </h1>
          <h2>Игра для двоих на одном компьютере</h2>
        </li>
        <li>
          <Button type={'menu'} onClick={onPlay}>
            Начать игру
          </Button>
        </li>
        <li>
          <Button type={'menu'} onClick={openModal}>
            Правила
          </Button>
        </li>
      </ul>
      {isModalVisible && (
        <RulesModal onClose={closeModal} isModalVisible={isModalVisible} />
      )}
    </>
  )
}

export default StartMenu
