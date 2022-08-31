import React, {lazy} from 'react'
import { useRoutes, Navigate } from "react-router-dom"
import LazyLoad from '@/layout/lazyLoad'

interface Router {
    name?: string;
    path: string;
    children?: Array<Router>,
    element: any
}

export const routers: Array<Router> = [
  {
    name: 'Layout',
    path: '/',
    element: LazyLoad(lazy(() => import('@/layout'))),
    children: [
      {
        name: 'VideoEditor',
        path: '/videoEditor',
        element: LazyLoad(lazy(() => import('@/pages/videoEditor')))
      },
      {
        name: 'ImageCompress',
        path: '/imageCompress',
        element: LazyLoad(lazy(() => import('@/pages/imageCompress')))
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
]

const Routers = () => {
  return useRoutes(routers);
}

export default Routers