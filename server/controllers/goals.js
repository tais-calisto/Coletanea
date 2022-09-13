import Goals from '../models/Goals.js'
import { StatusCodes } from 'http-status-codes'
import Book from '../models/Book.js'
import { DateTime } from 'luxon'

const defineGoal = async (req, res) => {
  req.body.createdBy = req.user.userId
  const goal = await Goals.create(req.body)
  res.status(StatusCodes.CREATED).json({ goal })
}

const getGoals = async (req, res) => {
  const goals = await Goals.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )
  res.status(StatusCodes.OK).json({ goals })
}

const getBooksByGoals = async (req, res) => {
  const startDate = req.query.startDate
  const period = req.query.period
  let endDate
  if (period === 'week') {
    endDate = DateTime.fromISO(startDate).plus({ weeks: 1 }).toString()
  } else if (period === 'month') {
    endDate = DateTime.fromISO(startDate).plus({ months: 1 }).toString()
  } else {
    endDate = DateTime.fromISO(startDate).plus({ years: 1 }).toString()
  }

  const books = await Book.find({
    status: 'lido',
    createdBy: req.user.userId,
    createdAt: { $gt: startDate, $lt: endDate },
  }).sort('createdAt')
  res.status(StatusCodes.OK).json({ books })
}

export { defineGoal, getGoals, getBooksByGoals }
