import React from 'react'
import { IconPencil, IconTrash } from '@tabler/icons'

const Book = (book) => {
  // console.log(book)
  return (
    <li>
      <img src={book.cover} alt=''></img>
      <p>{book.title}</p>
      <div>
        <button>
          <IconPencil />
        </button>
        <button>
          <IconTrash />
        </button>
      </div>
    </li>
  )
}

export default Book
