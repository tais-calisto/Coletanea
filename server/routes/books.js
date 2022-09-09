import express from 'express'
import searchBooks from '../controllers/search.js'
import { addBook, getAllBooks, getBooksByStatus } from '../controllers/book.js'

const router = express.Router()

router.route('/').get(searchBooks).post(addBook)
router.route('/all-books').get(getAllBooks)
router.route('/status').get(getBooksByStatus)

export default router
