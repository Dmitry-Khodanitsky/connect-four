import { useState } from 'react'
import './StartMenu.css'
import Button from '../../ui/button'
import Modal from '../rules-modal'

const StartMenu = ({ onPlay }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="start-menu">
      <h1>4 в ряд </h1>
      <Button type={'menu'} onClick={onPlay}>
        Начать игру
      </Button>
      <Button type={'menu'} onClick={handleOpenModal}>
        Правила
      </Button>
      {isModalVisible && <Modal onClose={handleCloseModal}> Rules </Modal>}
    </div>
  )
}

export default StartMenu
