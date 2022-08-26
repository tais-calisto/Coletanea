import React, { useRef } from 'react'
import { IconSearch } from '@tabler/icons'

const SearchBookForm = () => {
  const searchBook = useRef(null)

  const handleSubmit = () => {}

  return (
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
  )
}

export default SearchBookForm
