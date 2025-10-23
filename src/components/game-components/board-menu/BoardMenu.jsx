import { useState } from 'react'
import './BoardMenu.css'
import Button from '../../ui/button'
import Modal from '../rules-modal'
import { useModal } from '../../../hooks'

const GameFieldHeader = ({ onRestart }) => {
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
        {isModalVisible && <Modal onClose={closeModal}> Rules </Modal>}
      </div>
    </header>
  )
}

export default GameFieldHeader
