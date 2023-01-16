import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query/build/lib/QueryClientProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import './index.css'
import { store } from './store/store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
