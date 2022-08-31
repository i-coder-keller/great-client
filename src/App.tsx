import React from 'react'
import { BrowserRouter, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Routers from './router'
import './styles/transition.less'
export default () => {
  const location = useLocation()
  return(
    <BrowserRouter>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routers></Routers>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  )
}
