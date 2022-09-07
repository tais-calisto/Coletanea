import express from 'express'
import searchBooks from '../controllers/search.js'
import { addBook } from '../controllers/book.js'

const router = express.Router()

router.route('/').get(searchBooks).post(addBook)

export default router
