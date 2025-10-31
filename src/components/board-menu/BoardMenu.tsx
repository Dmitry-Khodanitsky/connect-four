import './BoardMenu.css'
import Button from '@shared/ui/button'
import RulesModal from '../rules-modal'
import { useModal } from '@shared/hooks'

interface BoardMenuProps {
  onRestart: () => void
}

const BoardMenu = ({ onRestart }: BoardMenuProps) => {
  const { isModalVisible, openModal, closeModal } = useModal()
  return (
    <header className="board-menu">
      <div className="board-menu-content">
        <Button type="board-menu" onClick={openModal}>
          Правила
        </Button>
        <h1>4 в ряд </h1>
        <Button onClick={onRestart} type="board-menu board-menu--restart">
          Рестарт
        </Button>

        <RulesModal onClose={closeModal} isModalVisible={isModalVisible}>
          Rules
        </RulesModal>
      </div>
    </header>
  )
}

export default BoardMenu
