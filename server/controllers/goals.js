import Goals from '../models/Goals.js'
import { StatusCodes } from 'http-status-codes'

const defineGoal = async (req, res) => {
  req.body.createdBy = req.user.userId
  const goal = await Goals.create(req.body)
  res.status(StatusCodes.CREATED).json({ goal })
}

export { defineGoal }