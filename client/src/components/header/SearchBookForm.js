import React, { useRef } from 'react'
import { IconSearch } from '@tabler/icons'
import { useDispatch } from 'react-redux'
import { searchBook } from '../../features/searchBooks/searchBooksSlice'
import { showSearch } from '../../features/appShell/appShellSlice'
import { Link } from 'react-router-dom'

const SearchBookForm = () => {
  const search = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const book = search.current.value
    dispatch(showSearch())
    await dispatch(searchBook({ book }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Pesquise um livro' ref={search} />
      <button>
        <Link to='search'>
          <IconSearch size={18} />
        </Link>
      </button>
    </form>
  )
}

export default SearchBookForm
