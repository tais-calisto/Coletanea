import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/ShowBooks.styled'
import Book from '../bookShelf/book'
import { getBooksByStatus } from '../../features/allBooks/booksByStatusSlice'

const Readed = () => {
  const dispatch = useDispatch()

  const results = useSelector((store) => store.booksByStatus)
  const { books } = results

  useEffect(() => {
    async function getBooks() {
      await dispatch(getBooksByStatus('lido'))
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

export default Readed
