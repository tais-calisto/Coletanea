import React from 'react'

const SearchResult = (book) => {
  console.log(book)
  return (
    <>
      <li>
        <h4>{book.title}</h4>
        <img src={book.cover} alt={book.title} />
      </li>
    </>
  )
}

export default SearchResult
