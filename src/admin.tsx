import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Admin from './routes/adminPage/adminPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Admin />
  </StrictMode>,
)
