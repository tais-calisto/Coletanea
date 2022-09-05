import express from 'express'
import searchBooks from '../controllers/search.js'

const router = express.Router()

router.route('/').get(searchBooks)

export default router
