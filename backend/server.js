require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connect = require('./connect')

const { router: authRoutes } = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const doctorRoutes = require('./routes/doctorRoutes')
const appointmentRoutes = require('./routes/bookApointment')
const patientsRouter = require('./routes/patientRoutes')

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working' })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)
app.use('/api/doctors', doctorRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api', patientsRouter)

// Start server after DB connection
const startServer = async () => {
  try {
    await connect.connectToServer()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err) {
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

startServer()
