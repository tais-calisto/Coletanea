import Book from '../models/Book.js'
import Goals from '../models/Goals.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequest, NotFoundError } from '../errors/index.js'

const addBook = async (req, res) => {
  req.body.createdBy = req.user.userId
  const book = await Book.create(req.body)

  if (book.status === 'lido') {
    const book = req.body
    console.log(req.body.title)
    await Goals.updateMany(
      { createdBy: req.user.userId },
      { $push: { completed: book } }
    )
  }

  res.status(StatusCodes.CREATED).json({ book })
}

const getAllBooks = async (req, res) => {
  const books = await Book.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )
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

const updateBook = async (req, res) => {
  const {
    body: { status },
    user: { userId },
    params: { id: bookId },
  } = req

  const book = await Book.findOneAndUpdate(
    { _id: bookId, createdBy: userId },
    { status: status },
    { new: true, runValidators: true }
  )

  if (!book) {
    throw new NotFoundError('Livro não encontrado')
  }

  res.status(StatusCodes.OK).json({ book })
}

const deleteBook = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req

  const book = await Book.findOneAndDelete({ _id: bookId, createdBy: userId })

  if (!book) {
    throw new NotFoundError('Livro não encontrado')
  }

  res.status(StatusCodes.OK).send()
}

export { addBook, getAllBooks, getBooksByStatus, updateBook, deleteBook }
