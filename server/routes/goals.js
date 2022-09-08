import express from 'express'
import { defineGoal } from '../controllers/goals.js'

const router = express.Router()

router.route('/').post(defineGoal)

export default router
