import React from 'react'

const Book = (book) => {
  return (
    <div>
      <img src={book.cover} alt=''></img>
      <p>{book.title}</p>
    </div>
  )
}

export default Book
