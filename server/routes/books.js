import express from 'express'
import searchBooks from '../controllers/search.js'
import { addBook, getAllBooks } from '../controllers/book.js'

const router = express.Router()

router.route('/').get(searchBooks).post(addBook)
router.route('/all-books').get(getAllBooks)

export default router
