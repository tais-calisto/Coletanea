import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import { getAllReadingBooks } from '../../features/allBooks/readingBooksSlice'
import Book from '../bookShelf/book'

const Reading = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getAllReadingBooks())
  }, [dispatch])

  const results = useSelector((store) => store.readingBooks)
  const { readingBooks } = results

  return (
    <StyleShowBooks>
      {readingBooks.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleShowBooks>
  )
}

export default Reading
