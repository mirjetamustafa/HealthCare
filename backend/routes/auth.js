import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import database from '../connect.js'

const router = express.Router()

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const db = database.getDb()
    const { firstName, lastName, email, password, dateOfBirth, contactNumber } =
      req.body

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) return res.status(400).json({ error: 'User exists' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'patient',
      createdAt: new Date(),
    }

    const result = await db.collection('users').insertOne(newUser)

    res.status(201).json({
      id: result.insertedId.toString(),
      email,
      role: 'patient',
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const db = database.getDb()
    const { email, password } = req.body

    const user = await db.collection('users').findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign(
      { id: user._id.toString(), role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    )

    res.json({
      token,
      user: {
        _id: user._id.toString(),
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        specialization: user.specialization,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// MIDDLEWARE
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return res.status(401).json({ error: 'No token' })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const db = database.getDb()

    const user = await db.collection('users').findOne({
      _id: new ObjectId(decoded.id),
    })

    if (!user) return res.status(401).json({ error: 'User not found' })

    // req.user = user

    req.user = {
      id: user._id.toString(),
      role: user.role,
    }

    next()
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

export default router
