import mongoose from 'mongoose'

const formationSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
)

const Formation = mongoose.model('Formation', formationSchema)

export default Formation
