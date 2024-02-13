import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GLobalStyle } from './styles/GlobalStyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GLobalStyle />
    <App />
  </React.StrictMode>,
)
