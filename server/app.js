import express, { application } from 'express'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import 'express-async-errors'
import notFoundMiddleware from './middleware/notFound.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'
import booksRouter from './routes/books.js'
import authRouter from './routes/authentication.js'
import goalRouter from './routes/goals.js'
import authentication from './middleware/authentication.js'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/books', authentication, booksRouter)
app.use('/api/v1/goals', authentication, goalRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
