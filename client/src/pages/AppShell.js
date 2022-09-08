import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

const AppShell = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default AppShell
