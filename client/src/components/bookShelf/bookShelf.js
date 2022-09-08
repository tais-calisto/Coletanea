import React, { useMemo } from 'react'
import { StyleSearchResults } from '../../styles/SearchResults.styles'
import { getAllBooks } from '../../features/allBooks/allBooksSlice'
import { useSelector, useDispatch } from 'react-redux'
import Book from './book'

const BookShelf = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getAllBooks())
  }, [dispatch])

  const results = useSelector((store) => store.allBooks)
  const { allBooks } = results

  return (
    <StyleSearchResults>
      {allBooks.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleSearchResults>
  )
}

export default BookShelf
