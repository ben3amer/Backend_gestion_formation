import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
)

const Session = mongoose.model('Session', sessionSchema)

export default Session
