import fetchBook from '../clients/books.js'

const searchBooks = async (req, res) => {
  const data = await fetchBook(req.query.search)
  res.status(200).json(data)
}

export default searchBooks
