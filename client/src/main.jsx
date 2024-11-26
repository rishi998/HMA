import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Ensure this import is present at the top of your entry file
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

