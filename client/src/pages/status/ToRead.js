import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import { getAllToReadBooks } from '../../features/allBooks/toReadBooksSlice'
import Book from '../bookShelf/book'

const ToRead = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getAllToReadBooks())
  }, [dispatch])

  const results = useSelector((store) => store.toReadBooks)
  const { toReadBooks } = results

  return (
    <StyleShowBooks>
      {toReadBooks.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleShowBooks>
  )
}

export default ToRead
