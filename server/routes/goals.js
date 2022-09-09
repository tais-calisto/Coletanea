import express from 'express'
import { defineGoal, getGoals } from '../controllers/goals.js'

const router = express.Router()

router.route('/').post(defineGoal).get(getGoals)

export default router
