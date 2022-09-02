import mongoose from 'mongoose'

const formationSchema = new mongoose.Schema(
  {
    titre : {
      type : String,
      required: true,
      unique:true,
      trim: true,
    },
    nbSession : {
      type : Number,
      defalut : 0,
      required: true,
    },
    nbParticipant : {
      type : Number,
      default : 0,
      required: true,
    },
    duree : {
      type : Number,
    },
    budget : {
      type : Number,
      default: 0,
    },
    completed : {
      type: Boolean,
      default : false,
    },
    year :  {
      type : Number,
      default: new Date(). getFullYear(),
    }
  },
  {
    timestamps: true,
  }
);
formationSchema.virtual("session", {
  ref: "Session",
  localField: "_id",
  foreignField: "idFormation",
})


const Formation = mongoose.model('Formation', formationSchema)

export default Formation
