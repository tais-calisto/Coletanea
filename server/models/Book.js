import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema(
  {
    authors: {
      type: Array,
      required: [true],
    },
    title: {
      type: String,
      required: [true],
    },
    cover: {
      type: String,
      required: [true],
    },
    pages: {
      type: Number,
      required: [false],
    },
    status: {
      type: String,
      enum: ['lido', 'quero ler', 'lendo', 'relendo'],
      required: [true],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      require: [true],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Book', BookSchema)
