import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import MovieCard from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const movieNumber = 3;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
