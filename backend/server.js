import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connect from './connect.js'

import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'
import userRoutes from './routes/user.js'
import doctorRoutes from './routes/doctorRoutes.js'
import appointmentRoutes from './routes/bookApointment.js'
import patientsRouter from './routes/patientRoutes.js'
import aiChatRoutes from './routes/ai_chat.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)
app.use('/api/doctors', doctorRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api', patientsRouter)
app.use('/api/ai', aiChatRoutes)

const startServer = async () => {
  try {
    await connect.connectToServer()
    app.listen(PORT, () => {
      console.log('Server running on', PORT)
    })
  } catch (err) {
    console.error(err)
  }
}

startServer()
