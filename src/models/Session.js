import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
  {
    idFormation : {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Formation",
    },
    Date_debut : {
      type : Date,
      required : true,
    },
    Date_fin : {
      type : Date,
      required : true,
    },
    Description : {
      type : String,
      required : true,
      trim : true,
    },
    Nb_participants : {
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
participantSchema.virtual("participant", {
  ref: "Participant",
  localField: "_id",
  foreignField: "idSession",
});

const Session = mongoose.model('Session', sessionSchema)

export default Session
