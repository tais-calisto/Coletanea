import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../features/singleBook/bookSlice'

const AddBookOption = (props) => {
  const status = useRef(null)
  const dispatch = useDispatch()

  const addBookBtn = async () => {
    const book = props.book.bookInfo
    const addBookInfo = { ...book, status: status.current.value }
    await dispatch(addBook(addBookInfo))
  }

  return (
    <>
      <button value={props.option} ref={status} onClick={addBookBtn}>
        {props.option}
      </button>
    </>
  )
}

export default AddBookOption
