import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './styles/Main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
