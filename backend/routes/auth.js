const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

// REGISTER (PATIENT ONLY)

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const db = req.app.get('db')

    if (!name || !email || !password) {
      return res.status(400).json({
        error: 'Name, email and password are required',
      })
    }

    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: 'patient', // 🔐 always patient
      createdAt: new Date(),
    }

    const result = await db.collection('users').insertOne(newUser)

    res.status(201).json({
      message: 'Patient registered successfully',
      user: {
        id: result.insertedId,
        name,
        email,
        role: newUser.role,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// LOGIN

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const db = req.app.get('db')

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required',
      })
    }

    const user = await db.collection('users').findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    )

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// AUTH MIDDLEWARE

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = { router, authMiddleware }
