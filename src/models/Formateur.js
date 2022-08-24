import mongoose from 'mongoose'

const formateurSchema = new mongoose.Schema(
  {
    Email  : {
      type : String,
      required : true,
      unique : true,
      trim : true,
      lowercase : true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("invalid email !");
        }
      },
    },
    Nom : {
      type : String,
      required : true,
      trim :  true,
    },
    Prenom : {
      type : String,
      required : true,
      trim : true, 
    },
    Tel : {
      type : Number,
      required : true,
    },
    
  },
  {
    timestamps: true,
  }
)

const Formateur = mongoose.model('Formateur', formateurSchema)

export default Formateur
