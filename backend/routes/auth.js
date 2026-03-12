const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')

const router = express.Router()

// REGISTER (PATIENT ONLY)
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, dateOfBirth, contactNumber } =
      req.body
    const db = req.app.get('db')

    // vetem pacientet mund te regjistrohen nga frontend
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        error: 'First name, last name, email and password are required',
      })
    }

    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'patient',
      status: 'Active',
      patientId: `MED-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000000)}`,
      dateOfBirth,
      contactNumber,
      createdAt: new Date(),
    }

    const result = await db.collection('users').insertOne(newUser)

    res.status(201).json({
      message: 'Patient registered successfully',
      user: {
        id: result.insertedId,
        firstName,
        lastName,
        email,
        role: 'patient',
        status: 'Active',
        patientId: newUser.patientId,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// LOGIN (ALL ROLES)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const db = req.app.get('db')

    const user = await db.collection('users').findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign(
      { id: user._id.toString(), role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    )

    // krijon name për patient
    const displayName = user.name || `${user.firstName ?? ''}`.trim()

    res.json({
      token,
      user: {
        id: user._id,
        name: displayName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        patientId: user.patientId,
        specialization: user.specialization,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// AUTH MIDDLEWARE
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ error: 'Unauthorized' })

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const db = req.app.get('db')
    const user = await db.collection('users').findOne({
      _id: new ObjectId(decoded.id),
    })

    if (!user) return res.status(401).json({ error: 'User not found' })

    req.user = {
      id: user._id.toString(),
      role: user.role,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      patientId: user.patientId,
    }
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = { router, authMiddleware }
