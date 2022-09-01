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
        name: 'Main',
        path: '/',
        element: LazyLoad(lazy(() => import('@/pages/main')))
      },
      {
        name: 'VideoEditor',
        path: '/videoEditor',
        element: LazyLoad(lazy(() => import('@/pages/videoEditor')))
      },
      {
        name: 'NotFound',
        path: '/404',
        element: LazyLoad(lazy(() => import('@/pages/notFound')))
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
]

const Routers = () => {
  return useRoutes(routers)
}

export default Routers
