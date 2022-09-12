import React, { useEffect } from 'react'
import { StyleShowBooks } from '../../styles/ShowBooks.styled'
import { getAllBooks } from '../../features/allBooks/allBooksSlice'
import { useSelector, useDispatch } from 'react-redux'
import Book from './book'

const BookShelf = () => {
  const dispatch = useDispatch()

  const results = useSelector((store) => store.allBooks)
  const { allBooks } = results

  useEffect(() => {
    async function getBooks() {
      await dispatch(getAllBooks())
    }
    getBooks()
  }, [dispatch, allBooks])

  return (
    <StyleShowBooks>
      {allBooks.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleShowBooks>
  )
}

export default BookShelf
