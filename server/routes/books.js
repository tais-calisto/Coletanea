import express from 'express'
import searchBooks from '../controllers/search.js'
import { addedBook } from '../controllers/book.js'

const router = express.Router()

router.route('/').get(searchBooks).post(addedBook)

export default router
