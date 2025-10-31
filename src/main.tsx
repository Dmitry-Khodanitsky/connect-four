import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/index.css'
import App from './app'

// Используется оператор не null утверждения -  ! для утверждения, что корнеыой элемент не будет null и всегда присутствует
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
