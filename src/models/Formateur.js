import mongoose from 'mongoose'

const formateurSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
)

const Formateur = mongoose.model('Formateur', formateurSchema)

export default Formateur
