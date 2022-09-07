import React, { useState } from 'react'
import { IconCirclePlus } from '@tabler/icons'
import AddBookOptions from '../addeBook/addBookOptions'

const SearchResult = (book) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleAddBtn = () => {
    setShowOptions(!showOptions)
  }

  return (
    <>
      <li>
        <h4>{book.title}</h4>
        <img src={book.cover} alt={book.title} />
        <button onClick={handleAddBtn}>
          <IconCirclePlus />
        </button>
        {showOptions && <AddBookOptions bookInfo={book} />}
      </li>
    </>
  )
}

export default SearchResult
