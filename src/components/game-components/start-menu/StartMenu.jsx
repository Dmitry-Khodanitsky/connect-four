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
    <>
      <ul className="start-menu">
        <li>
          <h1>4 в ряд </h1>
        </li>
        <li>
          <Button type={'menu'} onClick={onPlay}>
            Начать игру
          </Button>
        </li>
        <li>
          <Button type={'menu'} onClick={handleOpenModal}>
            Правила
          </Button>
        </li>
      </ul>
      {isModalVisible && <Modal onClose={handleCloseModal}> Rules </Modal>}
    </>
  )
}

export default StartMenu
