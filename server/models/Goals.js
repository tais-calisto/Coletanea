import mongoose from 'mongoose'

const GoalsSchema = new mongoose.Schema(
  {
    books: {
      type: Number,
    },
    period: {
      type: String,
      enum: ['mês', 'ano', 'semana'],
      default: 'ano',
      require: [true],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      require: [true],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Goals', GoalsSchema)