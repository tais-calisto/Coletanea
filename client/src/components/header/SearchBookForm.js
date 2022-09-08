import React, { useRef } from 'react'
import { IconSearch } from '@tabler/icons'
import { useDispatch } from 'react-redux'
import { searchBook } from '../../features/searchBooks/searchBooksSlice'
import { useNavigate } from 'react-router-dom'

const SearchBookForm = () => {
  const navigate = useNavigate()
  const search = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const book = search.current.value
    await dispatch(searchBook({ book }))
    navigate('/search')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Pesquise um livro' ref={search} />
      <button>
        <IconSearch size={18} />
      </button>
    </form>
  )
}

export default SearchBookForm
