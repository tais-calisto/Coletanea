import React, { useState } from 'react'
import { IconPencil, IconTrash } from '@tabler/icons'
import { useLocation } from 'react-router-dom'
import { DateTime } from 'luxon'
import AddBookOptions from '../../components/addeBook/addBookOptions'
import { deleteBook } from '../../features/singleBook/bookSlice'
import { useDispatch } from 'react-redux'

const Book = (book) => {
  const location = useLocation()
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)

  const handleEditBtn = () => {
    setEdit(!edit)
  }

  const delBook = async () => {
    await dispatch(deleteBook(book._id))
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
      {edit && <AddBookOptions {...book} />}
      <div className='buttons'>
        <button>
          <IconPencil onClick={handleEditBtn} />
        </button>
        <button>
          <IconTrash onClick={delBook} />
        </button>
      </div>
    </li>
  )
}

export default Book
