import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { Unauthenticated, BadRequest } from '../errors/index.js'

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    throw new BadRequest('Please provide a name, email and password')
  }

  const user = await User.findOne({ email })
  if (!user) {
    throw new Unauthenticated('Invalid credentials, user not find')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new Unauthenticated('Invalid credentials, incorrect password')
  }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

export { register, login }
