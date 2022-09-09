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

const getReadedBooks = async (req, res) => {
  const books = await Book.find({
    createdBy: req.user.userId,
    status: 'lido',
  }).sort('createdAt')
  res.status(StatusCodes.OK).json({ books })
}

const getReadingBooks = async (req, res) => {
  const books = await Book.find({
    createdBy: req.user.userId,
    status: 'lendo',
  }).sort('createdAt')
  res.status(StatusCodes.OK).json({ books })
}

const getToReadBooks = async (req, res) => {
  const books = await Book.find({
    createdBy: req.user.userId,
    status: 'quero ler',
  }).sort('createdAt')
  res.status(StatusCodes.OK).json({ books })
}

const getBooksByStatus = async (req, res) => {
  const status = req.query.status
  const books = await Book.find({
    createdBy: req.user.userId,
    status: status,
  }).sort('createdAt')
  res.status(StatusCodes.OK).json({ books })
}

export {
  addBook,
  getAllBooks,
  getReadedBooks,
  getReadingBooks,
  getToReadBooks,
  getBooksByStatus,
}
