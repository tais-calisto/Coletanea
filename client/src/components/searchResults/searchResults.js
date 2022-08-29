import React from 'react'
import { useSelector } from 'react-redux'
import SearchResult from './searchResult'
import { StyleSearchResults } from '../../styles/SearchResults.styles'

const SearchResults = () => {
  const results = useSelector((store) => store.searchBook)
  const { booksList } = results

  if (booksList[0]) {
    const books = booksList[0]
    return (
      <StyleSearchResults>
        {books.map((book) => {
          return <SearchResult key={book.id} {...book} />
        })}
      </StyleSearchResults>
    )
  }
}

export default SearchResults
