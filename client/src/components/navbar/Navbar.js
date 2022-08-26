import React from 'react'
import { StyleNavbar } from '../../styles/Navbar.styled'
import NavLinks from './NavLinks'
import { IconUserCircle } from '@tabler/icons'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/user/userSlice'

const Navbar = () => {
  const dispach = useDispatch()
  const { user, isSidebarOpen } = useSelector((store) => store.user)

  return (
    <StyleNavbar>
      {isSidebarOpen && (
        <div className='mobile'>
          <div className='userSection'>
            <div className='userIcon'>
              <IconUserCircle />
              {user.name}
            </div>
            <button
              className='logout'
              onClick={() => {
                dispach(logoutUser())
              }}
            >
              Sair
            </button>
          </div>

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
