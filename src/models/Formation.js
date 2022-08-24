import { Double } from 'mongodb'
import mongoose from 'mongoose'

const formationSchema = new mongoose.Schema(
  {
    titre : {
      type : String,
      required: true,
      unique:true,
      trim: true,
    },
    Nb_session : {
      type : Number,
      defalut : 0,
      required: true,
    },
    Nb_participant : {
      type : Number,
      default : 0,
      required: true,
    },
    Duree : {
      type : Number,
    },
    Budget : {
      type : Double,
      default: 0,
    },
    completed : {
      type: Boolean,
      default : false,
    },
    Annee :  {
      type : Number,
      default: new Date(). getFullYear(),
    }
  },
  {
    timestamps: true,
  }
)

const Formation = mongoose.model('Formation', formationSchema)

export default Formation
