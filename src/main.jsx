import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import ContextProvider from './Context/globalContext.jsx'

/**
 * ContextProvider - envuelve la App para poder acceder en todo lugar al ContextGlobal
 */
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
