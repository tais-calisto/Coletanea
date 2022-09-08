import express from 'express'
import searchBooks from '../controllers/search.js'
import {
  addBook,
  getAllBooks,
  getReadedBooks,
  getReadingBooks,
  getToReadBooks,
} from '../controllers/book.js'

const router = express.Router()

router.route('/').get(searchBooks).post(addBook)
router.route('/all-books').get(getAllBooks)
router.route('/readed-books').get(getReadedBooks)
router.route('/reading-books').get(getReadingBooks)
router.route('/to-read-books').get(getToReadBooks)

export default router
