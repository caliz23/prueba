import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './estilos/bootstrap.bundle.min.js'
import './estilos/bootstrap.min.css'
import { Sgcd } from './Sgcd.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Sgcd />
    </React.StrictMode>
  </BrowserRouter>,
)
