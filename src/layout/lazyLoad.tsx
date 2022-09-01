import React, { Suspense } from "react"
import Spin from '@/components/Spin/Spin'

export default (Page: React.LazyExoticComponent<any>): React.ReactNode => {
  return <Suspense
    fallback={
      <Spin />
    }
  >
    <Page />
  </Suspense>
}
