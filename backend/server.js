require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connect = require('./connect')

const { router: authRoutes } = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const appointmentRoutes = require('./routes/book_appointment')

const app = express()
const PORT = process.env.PORT || 3000

// MIDDLEWARE

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  req.app.set('db', connect.getDb())
  next()
})

// TEST

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working' })
})

// ROUTES

app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)
app.use('/api/appointments', appointmentRoutes)

// START SERVER

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
