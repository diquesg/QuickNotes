import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegisterScreen from '/src/pages/RegisterScreen.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RegisterScreen />
  </StrictMode>,
)
