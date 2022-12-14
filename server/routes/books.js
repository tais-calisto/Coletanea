import express from 'express'
import searchBooks from '../controllers/search.js'
import {
  addBook,
  getAllBooks,
  getBooksByStatus,
  updateBook,
  deleteBook,
} from '../controllers/book.js'

const router = express.Router()

router.route('/').get(searchBooks).post(addBook)
router.route('/all-books').get(getAllBooks)
router.route('/status').get(getBooksByStatus)
router.route('/:id').patch(updateBook).delete(deleteBook)

export default router
