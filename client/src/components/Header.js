import React, { useRef } from 'react'
import { StyledHeader } from '../styles/Header.styled'
import { IconMenu2, IconSquareX, IconSearch } from '@tabler/icons'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import UserIcon from './UserIcon'
import { toggleSidebar } from '../user/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { user, isSidebarOpen } = useSelector((store) => store.user)

  const searchBook = useRef(null)

  const url = 'http://localhost:5000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const search = searchBook.current.value
    //API
    const { data } = await axios.get(url, { params: { search: search } })
    console.log(data)
    return data
  }

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
      {!isSidebarOpen && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search a book or author'
            ref={searchBook}
          />
          <button>
            <IconSearch size={18} />
          </button>
        </form>
      )}
      <UserIcon />
    </StyledHeader>
  )
}

export default Header
