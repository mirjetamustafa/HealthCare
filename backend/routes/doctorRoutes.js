import express from 'express'
import database from '../connect.js'
import { ObjectId } from 'mongodb'

const router = express.Router()

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const db = database.getDb()
    const doctors = await db
      .collection('users')
      .find({ role: 'doctor' })
      .project({ password: 0 })
      .toArray()
    res.json(doctors)
  } catch (err) {
    console.error('Error fetching doctors:', err)
    res.status(500).json({ error: 'Failed to fetch doctors' })
  }
})

// GET doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const db = database.getDb()
    const { id } = req.params

    const doctor = await db
      .collection('users')
      .findOne(
        { _id: new ObjectId(id), role: 'doctor' },
        { projection: { password: 0 } },
      )

    if (!doctor) return res.status(404).json({ error: 'Doctor not found' })
    res.json(doctor)
  } catch (err) {
    console.error('Error fetching doctor by ID:', err)
    res.status(500).json({ error: 'Failed to fetch doctor' })
  }
})

router.put('/availability/:id', async (req, res) => {
  try {
    const db = database.getDb()
    const { id } = req.params
    const { availability } = req.body

    if (!availability) {
      return res.status(400).json({ error: 'Availability is required' })
    }

    const result = await db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(id), role: 'doctor' },
        { $set: { schedule: availability } },
      )

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Doctor not found' })
    }

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

export default router
