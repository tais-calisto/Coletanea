import mongoose from 'mongoose'
import bycript from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },

  email: {
    type: String,
    require: [true, 'Please, provide a email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please, provida a password'],
    minLength: 8,
  },
})

UserSchema.pre('save', async function () {
  const salt = await bycript.genSalt(10)
  this.password = await bycript.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}

UserSchema.methods.comparePassword = async function (passedPassword) {
  const isMatch = await bycript.compare(passedPassword, this.password)
  return isMatch
}

export default mongoose.model('User', UserSchema)
