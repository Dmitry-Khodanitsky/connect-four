import './RulesModal.css'
import '@shared/styles/modal.css'
import Button from '@shared/ui/button'
import { GAME_RULES } from '@shared/constants'
import Modal from 'react-modal'

interface RulesModalProps {
  onClose: () => void
  isModalVisible: boolean
}

const RulesModal = ({ onClose, isModalVisible }: RulesModalProps) => {
  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
      contentLabel="Rules Modal"
    >
      <div className="modal-header">
        <div className="modal-title">
          <h2>{GAME_RULES.title}</h2>
        </div>
      </div>
      <div className="modal-body">
        <h3>Цель игры</h3>
        <p>{GAME_RULES.description}</p>
        <h3>Как играть?</h3>
        <ol>
          {GAME_RULES.rules.map((rule, index) => {
            return <li key={rule}>{rule}</li>
          })}
        </ol>
      </div>
      <div className="modal-footer">
        <Button
          type={'close-modal'}
          aria-label="Закрыть модальное окно"
          onClick={onClose}
        />
      </div>
    </Modal>
  )
}

export default RulesModal
