import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoalProvider } from "./context/goalContext.jsx";

createRoot(document.getElementById('root')).render(
  <GoalProvider>
    <App />
  </GoalProvider>,
)
