import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../features/singleBook/bookSlice'

const AddBookOption = (book) => {
  const status = useRef(null)
  const dispatch = useDispatch()
  console.log(book)

  const addBookBtn = async () => {
    const addBookInfo = { ...book, status: status.current.value }
    await dispatch(addBook(addBookInfo))
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
