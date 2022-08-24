import { CustomError } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
}

export default errorHandlerMiddleware
