import Book from '../models/Book.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequest, NotFoundError } from '../errors/index.js'

const addedBook = async (req, res) => {
  req.body.createdBy = req.user.userId
  const book = await Book.create(req.body)
  res.status(StatusCodes.CREATED).json({ book })
}

export { addedBook }
