import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

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
    password: {
      type: String,
      required: true,
      minLength: 8,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('password is common')
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
    idSession : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Session",
      },
  },
  {
    timestamps: true,
  }
);



//Hash the password
participantSchema.pre('save', async function (next) {
  const participant = this
  if (participant.isModified('password')) {
    participant.password = await bcrypt.hash(participant.password, 8)
  }
  next()
});


const Participant = mongoose.model('Participant', participantSchema)

export default Participant
