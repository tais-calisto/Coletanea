import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { Unauthenticated } from '../errors/index.js'
import dotenv from 'dotenv'
dotenv.config()

const authentication = async (req, res, next) => {
  const autheHeader = req.headers.authorization
  if (!autheHeader || !autheHeader.startsWith('Bearer')) {
    throw new Unauthenticated('Authentication invalid')
  }

  const token = autheHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new Unauthenticated('Authentication invalid')
  }
}

export default authentication
