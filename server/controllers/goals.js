import Goals from '../models/Goals.js'
import { StatusCodes } from 'http-status-codes'
import Book from '../models/Book.js'
import { DateTime } from 'luxon'
import { BadRequest, NotFoundError } from '../errors/index.js'

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

const deleteGoal = async (req, res) => {
  const {
    user: { userId },
    params: { id: goalId },
  } = req

  const goal = await Goals.findOneAndDelete({ _id: goalId, createdBy: userId })

  if (!goal) {
    throw new NotFoundError('Livro não encontrado')
  }

  res.status(StatusCodes.OK).send()
}

export { defineGoal, getGoals, deleteGoal }
