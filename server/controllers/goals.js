import Goals from '../models/Goals.js'
import { StatusCodes } from 'http-status-codes'
import Book from '../models/Book.js'
import { DateTime } from 'luxon'

const defineGoal = async (req, res) => {
  req.body.createdBy = req.user.userId

  const date = DateTime.now().toUTC().toString()
  const period = req.body.period
  let endDate

  if (period === 'week') {
    endDate = DateTime.fromISO(date).minus({ weeks: 1 }).toUTC().toString()
  } else if (period === 'month') {
    endDate = DateTime.fromISO(date).minus({ months: 1 }).toUTC().toString()
  } else {
    endDate = DateTime.fromISO(date).minus({ years: 1 }).toUTC().toString()
  }

  const completed = await Book.find({
    status: 'lido',
    createdBy: req.body.createdBy,
    createdAt: { $gt: endDate, $lt: date },
  }).sort('createdAt')

  req.body.completed = completed

  const goal = await Goals.create(req.body)

  res.status(StatusCodes.CREATED).json({ goal, completed })
}

const getGoals = async (req, res) => {
  const goals = await Goals.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )
  res.status(StatusCodes.OK).json({ goals })
}

const getBooksByGoals = async (req, res) => {
  const period = req.query.period
  const date = DateTime.now().toUTC().toString()
  let endDate

  if (period === 'week') {
    endDate = DateTime.fromISO(date).minus({ weeks: 1 }).toUTC().toString()
  } else if (period === 'month') {
    endDate = DateTime.fromISO(date).plus({ months: 1 }).toUTC().toString()
  } else {
    endDate = DateTime.fromISO(date).plus({ years: 1 }).toUTC().toString()
  }

  const books = await Book.find({
    status: 'lido',
    createdBy: req.user.userId,
    createdAt: { $gt: endDate, $lt: date },
  }).sort('createdAt')

  res.status(StatusCodes.OK).json({ books })
}

export { defineGoal, getGoals, getBooksByGoals }
