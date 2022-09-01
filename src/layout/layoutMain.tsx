import React from "react"
import { Outlet } from 'react-router-dom'

export default () => {

  return (
    <main className="great-layout-main">
      <Outlet />
    </main>
  )
}
