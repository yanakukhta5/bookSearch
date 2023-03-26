import './app/style.css'

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

import { App } from './app'
import { store } from './store'
import { lightTheme, fontTheme, dimensionTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider
    theme={Object.assign({}, fontTheme, lightTheme, dimensionTheme)}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
