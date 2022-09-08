import React from 'react'
import { IconPencil } from '@tabler/icons'

const Book = (book) => {
  return (
    <li>
      <img src={book.cover} alt=''></img>
      <p>{book.title}</p>
      <button>
        <IconPencil />
      </button>
    </li>
  )
}

export default Book
