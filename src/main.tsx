import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { ThemeProvider } from '@emotion/react'
import { fontTheme } from './theme/fontTheme'
import { lightTheme } from './theme/lightTheme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Object.assign({}, fontTheme, lightTheme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
