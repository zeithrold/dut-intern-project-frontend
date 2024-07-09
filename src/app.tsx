import React from 'react'
import { PrimeReactProvider } from 'primereact/api'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

import 'primeicons/primeicons.css'

export default function App() {
  return (
    <PrimeReactProvider
      value={{
        ripple: true,
      }}
    >
      <RouterProvider router={router} />
    </PrimeReactProvider>
  )
}
