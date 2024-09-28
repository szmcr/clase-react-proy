import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { UsersApp } from './UsersApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <UsersApp />
    </StrictMode>
  </BrowserRouter>
)


