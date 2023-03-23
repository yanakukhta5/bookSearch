import ReactDOM from 'react-dom/client'
import App from './app'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { lightTheme, fontTheme, dimensionTheme } from './theme'
import './app/style.css'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={Object.assign({}, fontTheme, lightTheme, dimensionTheme)}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)
