const express = require('express')
const bcrypt = require('bcryptjs')
const { authMiddleware } = require('./auth')
const adminMiddleware = require('../middleware/adminMiddleware')

const router = express.Router()

// CREATE DOCTOR
router.post(
  '/create-doctor',
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
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

      const doctor = {
        name,
        email,
        password: hashedPassword,
        role: 'doctor',
        createdAt: new Date(),
      }

      const result = await db.collection('users').insertOne(doctor)

      res.status(201).json({
        message: 'Doctor created successfully',
        doctor: {
          id: result.insertedId,
          name,
          email,
          role: 'doctor',
        },
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },
)

module.exports = router
