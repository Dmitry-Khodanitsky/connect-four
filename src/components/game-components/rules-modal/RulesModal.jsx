import './RulesModal.css'
import Button from '../../ui/button'
import GAME_RULES from '../../../constants'

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
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
              return <li key={index}>{rule}</li>
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
      </div>
    </div>
  )
}

export default Modal
