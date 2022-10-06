import mongoose from 'mongoose'
import Formation from './Formation.js';
import Formateur from './Formateur.js';


const sessionSchema = new mongoose.Schema(
  {
    formation : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Formation',
      required: true,
    },
    titre : {
      type : String,
      required : true,
      trim : true,
    },
    dateDebut : {
      type : Date,
      required : true,
    },
    dateFin : {
      type : Date,
      required : true,
    },
    description : {
      type : String,
      required : true,
      trim : true,
    },
    nbParticipants : {
      type : Number,
      default : 0,
    },
    
    formateur : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Formateur',
      required : true,
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model('Session', sessionSchema)

export default Session
