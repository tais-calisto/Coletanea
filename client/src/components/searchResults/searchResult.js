import React from 'react'
import { IconCirclePlus } from '@tabler/icons'

const SearchResult = (book) => {
  return (
    <>
      <li>
        <h4>{book.title}</h4>
        <img src={book.cover} alt={book.title} />
        <button>
          <IconCirclePlus />
        </button>
      </li>
    </>
  )
}

export default SearchResult
