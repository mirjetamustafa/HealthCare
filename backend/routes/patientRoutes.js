const express = require('express')
const { ObjectId } = require('mongodb')
const { authMiddleware } = require('./auth')
const adminMiddleware = require('../middleware/adminMiddleware')

const router = express.Router()

// Get all patients
router.get('/patients', async (req, res) => {
  try {
    const db = req.app.get('db')

    // Përfshij vetëm fushat që duhen, përjashto password automatikisht
    const patients = await db
      .collection('users')
      .find({ role: 'patient' })
      .project({
        password: 0,
      })
      .toArray()

    res.json(patients)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get patient by ID
router.get('/patients/:id', async (req, res) => {
  try {
    const db = req.app.get('db')
    const { id } = req.params

    const patient = await db.collection('users').findOne(
      { _id: new ObjectId(id), role: 'patient' },
      {
        projection: {
          password: 0,
        },
      },
    )

    if (!patient) return res.status(404).json({ error: 'Patient not found' })

    res.json(patient)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE Patient (admin only)

router.delete(
  '/patients/:id',
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const db = req.app.get('db')
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
      res.status(500).json({ error: err.message })
    }
  },
)

module.exports = router
