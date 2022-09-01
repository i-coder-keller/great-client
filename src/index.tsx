import ReactDom from 'react-dom/client'
import React from "react"
import App from './App'
import './styles/global.less'
import 'normalize.css'
ReactDom.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

