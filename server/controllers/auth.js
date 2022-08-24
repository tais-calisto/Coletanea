import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { Unauthenticated, BadRequest } from '../errors/index.js'

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name, token } })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequest('Por favor, preencha os campos de email e password')
  }

  const user = await User.findOne({ email })
  if (!user) {
    throw new Unauthenticated('Usuário não encontrado')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new Unauthenticated('Senha incorreta')
  }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name, token } })
}

export { register, login }
