import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
  {
    idFormation : {
      type: String,
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
    
    idFormateur : {
      type: String,
      required : true,
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model('Session', sessionSchema)

export default Session
