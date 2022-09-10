import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import { StyleOutlet } from '../styles/Outlet.styled'

const AppShell = () => {
  return (
    <>
      <Header />
      <Navbar />
      <StyleOutlet>
        <Outlet />
      </StyleOutlet>
    </>
  )
}

export default AppShell
