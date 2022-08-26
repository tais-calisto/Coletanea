import React, { useRef } from 'react'
import { StyledHeader } from '../../styles/Header.styled'
import { IconMenu2, IconSquareX, IconSearch } from '@tabler/icons'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import UserIcon from './UserIcon'
import { toggleSidebar } from '../../features/user/userSlice'
import SearchBookForm from './SearchBookForm'

const Header = () => {
  const dispatch = useDispatch()
  const { user, isSidebarOpen } = useSelector((store) => store.user)

  return (
    <StyledHeader>
      <div>
        <h1>
          <a href='/'>Coletânea</a>
        </h1>
        <i
          onClick={() => {
            dispatch(toggleSidebar())
          }}
        >
          {isSidebarOpen ? <IconSquareX /> : <IconMenu2 />}
        </i>
      </div>
      {!isSidebarOpen && <SearchBookForm />}
      <UserIcon />
    </StyledHeader>
  )
}

export default Header
