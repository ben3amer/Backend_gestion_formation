import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
  {
    idFormation : {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Formation",
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
      required : true,
      default : 0,
    },
    
    idFormateur : {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Formateur",
    },
  },
  {
    timestamps: true,
  }
);
sessionSchema.virtual("participant", {
  ref: "Participant",
  localField: "_id",
  foreignField: "idSession",
});
sessionSchema.methods.toJSON = function () {
  const session = this
  const sessionObject = session.toObject()
  return sessionObject
}

const Session = mongoose.model('Session', sessionSchema)

export default Session
