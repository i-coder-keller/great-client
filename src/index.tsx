import ReactDom from "react-dom/client"
import React from "react"
import App from "./App"
import "./styles/global.less"
import"normalize.css"
import "hint.css"
ReactDom.createRoot(document.querySelector('#root') as HTMLElement).render(
  <App/>
)

