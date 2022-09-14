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
        <img src={book.cover} alt={book.title} />
        <h4>{book.title}</h4>
        <div className='authors'>
          {book.authors &&
            book.authors.map((author, index) => {
              return <p key={index}>{author}</p>
            })}
        </div>

        <button className='addButton' onClick={handleAddBtn}>
          <IconCirclePlus /> Adicionar à estante
        </button>
        {showOptions && <AddBookOptions {...book} />}
      </li>
    </>
  )
}

export default SearchResult
