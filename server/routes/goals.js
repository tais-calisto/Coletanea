import express from 'express'
import { defineGoal, getGoals, getBooksByGoals } from '../controllers/goals.js'

const router = express.Router()

router.route('/').post(defineGoal).get(getGoals)
router.route('/books').get(getBooksByGoals)

export default router
