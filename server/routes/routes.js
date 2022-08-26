import express from 'express'
import fetchBook from '../clients/books.js'

const router = express.Router()

router.route('/').get(async (req, res) => {
  const data = await fetchBook(req.query.search)
  console.log(req.query.search)
  res.status(200).json(data)
})

export default router
