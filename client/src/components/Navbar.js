import React from 'react'
import { StyleNavbar } from '../styles/Navbar.styled'
import { useGlobalContext } from '../contexts/globalContext'
import NavLinks from './NavLinks'

const Navbar = () => {
  const { showNavbar } = useGlobalContext()

  return (
    <StyleNavbar>
      {showNavbar && (
        <div className='mobile'>
          <NavLinks />
        </div>
      )}
      <div className='desktop'>
        <NavLinks />
      </div>
    </StyleNavbar>
  )
}

export default Navbar
