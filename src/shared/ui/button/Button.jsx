import './Button.css'

const Button = ({ children, onClick, type }) => {
  return (
    <button
      className={`button button-${type}`}
      onClick={onClick}
      aria-label={children}
    >
      {children}
    </button>
  )
}

export default Button
