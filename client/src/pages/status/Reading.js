import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import { getBooksByStatus } from '../../features/allBooks/booksByStatusSlice'
import Book from '../bookShelf/book'

const Reading = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getBooksByStatus('lendo'))
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

export default Reading
