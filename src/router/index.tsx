import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '@/main'
import IndexPage from '@/pages/index'
import UploadPage from '@/pages/upload'
import DataPage from '@/pages/data'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'upload',
        element: <UploadPage />,
      },
      {
        path: 'data',
        element: <DataPage />,
      },
    ],
  },
])

export default router
