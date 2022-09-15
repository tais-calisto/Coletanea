import express from 'express'
import { defineGoal, getGoals, deleteGoal } from '../controllers/goals.js'

const router = express.Router()

router.route('/').post(defineGoal).get(getGoals)
router.route('/:id').delete(deleteGoal)

export default router
