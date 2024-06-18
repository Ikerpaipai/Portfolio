import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ModeProvider } from './contexts/toggle-mode.context.jsx'

import i18next from './i18n'
import { I18nextProvider } from 'react-i18next'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ModeProvider>
          <App />
        </ModeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
