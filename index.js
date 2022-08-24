import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import userRouters from './src/routers/UserRouters.js'
import formationRouters from './src/routers/FormateurRouters.js'
import formateurRouters from './src/routers/FormationRouters.js'
import sessionRouters from './src/routers/SessionRouters.js'

const app = express()

app.use(express.json())
app.use(cors())


app.use(userRouters)
app.use(formateurRouters)
app.use(formationRouters)
app.use(sessionRouters)
app.use(participantRouters)
mongoose
  .connect(process.env.MONGODB_URL, () =>
    console.log('Connected successfully to database')
  )
  .catch(() => console.log('Something went wrong when connecting to database'))

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server in running on http://localhost:${PORT}`)
})
