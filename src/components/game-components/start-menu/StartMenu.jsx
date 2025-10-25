import './StartMenu.css'
import { useModal } from '../../../hooks'
import Button from '../../../shared/ui/button'
import Modal from '../rules-modal'

const StartMenu = ({ onPlay }) => {
  const { isModalVisible, openModal, closeModal } = useModal()

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
          <Button type={'menu'} onClick={openModal}>
            Правила
          </Button>
        </li>
      </ul>
      {isModalVisible && <Modal onClose={closeModal}> Rules </Modal>}
    </>
  )
}

export default StartMenu
