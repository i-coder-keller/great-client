import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default () => {
  return (
    <>
      <Link to={'/videoEditor'}>videoEditor</Link>
      <Outlet />
    </>
  )
}