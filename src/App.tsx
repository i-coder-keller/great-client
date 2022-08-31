import React from 'react'
import { HashRouter, BrowserRouter } from "react-router-dom"
import Routers from './router'
export default () => {
  return(
    <BrowserRouter>
      <Routers></Routers>
    </BrowserRouter>
  )
}
