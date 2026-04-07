const express = require('express')
const database = require('../connect')
const { ObjectId } = require('mongodb')

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

module.exports = router
