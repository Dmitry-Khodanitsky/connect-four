import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  type: string
}
const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button className={`button button-${type}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
