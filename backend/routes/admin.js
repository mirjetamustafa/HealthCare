import express from 'express'
import bcrypt from 'bcryptjs'
import { authMiddleware } from './auth.js'
import adminMiddleware from '../middleware/adminMiddleware.js'
import { ObjectId } from 'mongodb'
import database from '../connect.js'

const router = express.Router()

// CREATE Doctor (admin only)
const defaultSchedule = {
  Monday: { enabled: true, from: '09:00', to: '17:00' },
  Tuesday: { enabled: true, from: '09:00', to: '17:00' },
  Wednesday: { enabled: true, from: '09:00', to: '17:00' },
  Thursday: { enabled: true, from: '09:00', to: '17:00' },
  Friday: { enabled: true, from: '09:00', to: '17:00' },
  Saturday: { enabled: false, from: '09:00', to: '17:00' },
  Sunday: { enabled: false, from: '09:00', to: '17:00' },
}

router.post(
  '/create-doctor',
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const db = database.getDb()
      const {
        firstName,
        lastName,
        email,
        password,
        specialization,
        department,
        education,
        yearsOfExperience,
        contactNumber,
        schedule,
        status,
        biography,
        img,
      } = req.body

      if (!firstName || !lastName || !email || !password) {
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
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: 'doctor',
        specialization,
        department,
        education,
        yearsOfExperience: Number(yearsOfExperience),
        contactNumber,
        schedule: schedule || defaultSchedule,
        status,
        biography,
        img,
        createdAt: new Date(),
      }

      const result = await db.collection('users').insertOne(doctor)

      res.status(201).json({
        message: 'Doctor created successfully',
        doctor: {
          id: result.insertedId,
          firstName,
          lastName,
          email,
          role: 'doctor',
        },
      })
    } catch (err) {
      console.error('Error creating doctor:', err)
      res.status(500).json({ error: 'Failed to create doctor' })
    }
  },
)

// UPDATE Doctor (admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const db = database.getDb()
    const { id } = req.params
    const updateData = req.body

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
    console.error('Error updating doctor:', err)
    res.status(500).json({ error: 'Failed to update doctor' })
  }
})

// DELETE Doctor (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const db = database.getDb()
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
    console.error('Error deleting doctor:', err)
    res.status(500).json({ error: 'Failed to delete doctor' })
  }
})

export default router
