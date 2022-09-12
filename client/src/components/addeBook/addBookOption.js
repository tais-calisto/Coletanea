import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addBook, updateBook } from '../../features/singleBook/bookSlice'

const AddBookOption = (book) => {
  const location = useLocation()
  const { pathname } = location

  const status = useRef(null)
  const dispatch = useDispatch()

  const addBookBtn = async () => {
    if (pathname === '/search') {
      const addBookInfo = { ...book, status: status.current.value }
      await dispatch(addBook(addBookInfo))
    } else {
      const update = { book: book._id, status: status.current.value }
      await dispatch(updateBook(update))
    }
  }

  return (
    <>
      <button value={book.option} ref={status} onClick={addBookBtn}>
        {book.option}
      </button>
    </>
  )
}

export default AddBookOption
