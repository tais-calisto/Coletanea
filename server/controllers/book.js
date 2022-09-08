import Book from '../models/Book.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequest, NotFoundError } from '../errors/index.js'

const addBook = async (req, res) => {
  req.body.createdBy = req.user.userId
  const book = await Book.create(req.body)
  res.status(StatusCodes.CREATED).json({ book })
}

const getAllBooks = async (req, res) => {
  const books = await Book.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )
  res.status(StatusCodes.OK).json({ books })
}

export { addBook, getAllBooks }
