import React from 'react'
import LayoutHeader from './layoutHeader'
import LayoutMain from './layoutMain'
import './layout.less'
export default () => {
  return (
    <main className="great-layout">
      <LayoutHeader></LayoutHeader>
      <LayoutMain></LayoutMain>
    </main>
  )
}
