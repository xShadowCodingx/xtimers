// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the main entry point for xTimers
// 

// Import Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import App Component
import App from './App.tsx'

// Import CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

// Render App
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
