import React, { Suspense } from "react"
import Spin from '@/components/Spin'

export default (Page: React.LazyExoticComponent<any>): React.ReactNode => {
  return <Suspense
    fallback={
      <Spin />
    }
  >
    <Page />
  </Suspense>
}