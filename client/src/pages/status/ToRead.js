import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import { getBooksByStatus } from '../../features/allBooks/booksByStatusSlice'
import Book from '../bookShelf/book'

const ToRead = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getBooksByStatus('quero ler'))
  }, [dispatch])

  const results = useSelector((store) => store.booksByStatus)
  const { books } = results

  return (
    <StyleShowBooks>
      {books.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleShowBooks>
  )
}

export default ToRead
