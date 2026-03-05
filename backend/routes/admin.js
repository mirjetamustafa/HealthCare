const express = require('express')
const bcrypt = require('bcryptjs')
const { authMiddleware } = require('./auth')
const adminMiddleware = require('../middleware/adminMiddleware')
const { ObjectId } = require('mongodb')

const router = express.Router()

// CREATE Doctor (admin only)
router.post(
  '/create-doctor',
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        specialization,
        department,
        education,
        yearsOfExperience,
        contactNumber,
        schedule,
        biography,
        img,
      } = req.body

      const db = req.app.get('db')

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: 'Name, email and password are required' })
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
        role: 'doctor', // gjithmonë role doctor
        specialization,
        department,
        education,
        yearsOfExperience: Number(yearsOfExperience),
        contactNumber,
        schedule,
        biography,
        img,
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

// UPDATE Doctor (admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const db = req.app.get('db')
    const { id } = req.params
    const updateData = req.body

    // Siguro numerik për experience
    if (updateData.yearsOfExperience) {
      updateData.yearsOfExperience = Number(updateData.yearsOfExperience)
    }

    const result = await db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(id), role: 'doctor' },
        { $set: updateData },
      )

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Doctor not found' })
    }

    res.json({ message: 'Doctor updated successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE Doctor (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const db = req.app.get('db')
    const { id } = req.params

    const result = await db.collection('users').deleteOne({
      _id: new ObjectId(id),
      role: 'doctor',
    })

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Doctor not found' })
    }

    res.json({ message: 'Doctor deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
