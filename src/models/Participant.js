import mongoose from 'mongoose'
import validator from 'validator'


const participantSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('invalid email')
        }
      },
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error('age must be positive')
        }
      },
    },
    phone : {
      type: String,
      required: true,
      trim: true,
    },
    idSession : {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);




const Participant = mongoose.model('Participant', participantSchema)

export default Participant
