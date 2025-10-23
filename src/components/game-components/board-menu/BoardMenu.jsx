import { useState } from 'react'
import './BoardMenu.css'
import Button from '../../ui/button'
import Modal from '../rules-modal'

const GameFieldHeader = ({ onRestart }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }
  return (
    <header className="board-menu">
      <div className="board-menu-content">
        <Button type="board-menu" onClick={handleOpenModal}>Правила</Button>
        <h1>4 в ряд </h1>
        <Button onClick={onRestart} type="board-menu board-menu--restart">
          Рестарт
        </Button>
         {isModalVisible && <Modal onClose={handleCloseModal}> Rules </Modal>}
      </div>
    </header>
  )
}

export default GameFieldHeader
