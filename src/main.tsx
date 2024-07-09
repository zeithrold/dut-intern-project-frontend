import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from './components/appbar'

export default function MainPage() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}
