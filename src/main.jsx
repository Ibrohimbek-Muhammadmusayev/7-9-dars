import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './state/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routers>
            <App />
        </Routers>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
