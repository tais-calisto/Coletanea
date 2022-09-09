import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import Book from '../bookShelf/book'
import { getBooksByStatus } from '../../features/allBooks/booksByStatusSlice'

const Readed = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getBooksByStatus('lido'))
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

export default Readed
