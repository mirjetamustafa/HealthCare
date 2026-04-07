const express = require('express')
const { ObjectId } = require('mongodb')
const { authMiddleware } = require('./auth')
const adminMiddleware = require('../middleware/adminMiddleware')
const database = require('../connect')

const router = express.Router()

// Get all patients
router.get('/patients', async (req, res) => {
  try {
    const db = database.getDb()

    const patients = await db
      .collection('users')
      .find({ role: 'patient' })
      .project({ password: 0 })
      .toArray()

    res.json(patients)
  } catch (err) {
    console.error('Error fetching patients:', err)
    res.status(500).json({ error: 'Failed to fetch patients' })
  }
})

// Get patient by ID
router.get('/patients/:id', async (req, res) => {
  try {
    const db = database.getDb()
    const { id } = req.params

    const patient = await db
      .collection('users')
      .findOne(
        { _id: new ObjectId(id), role: 'patient' },
        { projection: { password: 0 } },
      )

    if (!patient) return res.status(404).json({ error: 'Patient not found' })

    res.json(patient)
  } catch (err) {
    console.error('Error fetching patient by ID:', err)
    res.status(500).json({ error: 'Failed to fetch patient' })
  }
})

// DELETE Patient (admin only)
router.delete(
  '/patients/:id',
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const db = database.getDb()
      const { id } = req.params

      const result = await db.collection('users').deleteOne({
        _id: new ObjectId(id),
        role: 'patient',
      })

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Patient not found' })
      }

      res.json({ message: 'Patient deleted successfully' })
    } catch (err) {
      console.error('Error deleting patient:', err)
      res.status(500).json({ error: 'Failed to delete patient' })
    }
  },
)

module.exports = router
