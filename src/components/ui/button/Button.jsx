import './Button.css'

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`button button-${className}`}
      onClick={onClick}
      aria-label={children}
    >
      {children}
    </button>
  )
}

export default Button
