import React, { useState } from 'react'
import { IconPencil, IconTrash } from '@tabler/icons'
import { useLocation } from 'react-router-dom'
import { DateTime } from 'luxon'
import AddBookOptions from '../../components/addeBook/addBookOptions'

const Book = (book) => {
  const location = useLocation()

  const [edit, setEdit] = useState(false)

  const handleEditBtn = () => {
    setEdit(true)
  }

  return (
    <li>
      <img src={book.cover} alt=''></img>
      <h4>{book.title}</h4>
      <div className='authors'>
        {book.authors.map((author, index) => {
          return <p key={index}>{author}</p>
        })}
      </div>
      <article>
        {location.pathname === '/' ? (
          <p className='status'>{book.status}</p>
        ) : (
          <p>
            Adicionado em:{' '}
            {DateTime.fromISO(book.createdAt).toFormat('dd/LL/yyyy')}
          </p>
        )}
      </article>
      <div className='buttons'>
        <button>
          <IconPencil onClick={handleEditBtn} />
        </button>
        <button>
          <IconTrash />
        </button>
      </div>
      {edit && <AddBookOptions {...book} />}
    </li>
  )
}

export default Book
