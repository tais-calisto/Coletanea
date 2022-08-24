import CustomError from './customError.js'
import { StatusCodes } from 'http-status-codes'

class BadRequest extends CustomError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequest
