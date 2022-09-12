import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/ShowBooks.styled'
import { getBooksByStatus } from '../../features/allBooks/booksByStatusSlice'
import Book from '../bookShelf/book'

const Reading = () => {
  const dispatch = useDispatch()

  const results = useSelector((store) => store.booksByStatus)
  const { books } = results

  useEffect(() => {
    async function getBooks() {
      await dispatch(getBooksByStatus('lendo'))
    }
    getBooks()
  }, [dispatch, books])

  return (
    <StyleShowBooks>
      {books.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleShowBooks>
  )
}

export default Reading
