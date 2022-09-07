import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const fetchBook = async (query) => {
  const bookURL = 'https://www.googleapis.com/books/v1/volumes?q='
  const apiKey = `&key=${process.env.BOOKS_API_KEY}`
  const maxResults = `&maxResults=40`
  const printType = `&printType=books`

  const { data } = await axios.get(
    `${bookURL}${query}${maxResults}${printType}${apiKey}`
  )

  const books = data.items

  const booksWithCover = books.filter((book) => {
    return book.volumeInfo.imageLinks
  })

  const info = booksWithCover.map((book) => {
    const {
      id,
      volumeInfo: {
        title,
        authors,
        description,
        imageLinks: { thumbnail: cover },
        pageCount: pages,
      },
    } = book
    return { id, title, authors, description, cover, pages }
  })

  return info
}

export default fetchBook
