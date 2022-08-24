import React, { useRef } from 'react'
import { useGlobalContext } from '../contexts/globalContext'

import { StyledHeader } from '../styles/Header.styled'
import { IconSearch } from '@tabler/icons'
import { IconMenu2, IconSquareX } from '@tabler/icons'

import axios from 'axios'

const Header = () => {
  const { setShowNavbar, showNavbar } = useGlobalContext()

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
            if (showNavbar) {
              setShowNavbar(false)
            } else {
              setShowNavbar(true)
            }
          }}
        >
          {showNavbar ? <IconSquareX /> : <IconMenu2 />}
        </i>
      </div>
      {!showNavbar && (
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
    </StyledHeader>
  )
}

export default Header
