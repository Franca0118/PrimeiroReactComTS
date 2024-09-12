import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pagina from './pagina'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pagina></Pagina>
  </StrictMode>,
)
