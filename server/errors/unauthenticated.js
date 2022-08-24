import CustomError from './customError.js'
import { StatusCodes } from 'http-status-codes'

class Unauthenticated extends CustomError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default Unauthenticated
