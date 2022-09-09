import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import { getAllReadedBooks } from '../../features/allBooks/readedBooksSlice'
import Book from '../bookShelf/book'

const Readed = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getAllReadedBooks())
  }, [dispatch])

  const results = useSelector((store) => store.readedBooks)
  const { readedBooks } = results
  return (
    <StyleShowBooks>
      {readedBooks.map((book) => {
        return <Book key={book._id} {...book} />
      })}
    </StyleShowBooks>
  )
}

export default Readed
