import ReactDom from 'react-dom/client'
import React from "react";
import App from './App'
import 'reset-css'
ReactDom.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

