import React from 'react'
import { useSelector } from 'react-redux'
import SearchResult from './searchResult'
import { StyleShowBooks } from '../../styles/ShowBooks.styled'

const SearchResults = () => {
  const results = useSelector((store) => store.searchBook)
  const { booksList } = results

  if (booksList[0]) {
    const books = booksList[0]
    return (
      <StyleShowBooks>
        {books.map((book) => {
          return <SearchResult key={book.id} {...book} />
        })}
      </StyleShowBooks>
    )
  }
}

export default SearchResults
