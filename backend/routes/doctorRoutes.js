const express = require('express')
const { ObjectId } = require('mongodb')

const router = express.Router()

// Get all doctors

router.get('/', async (req, res) => {
  try {
    const db = req.app.get('db')

    const doctors = await db
      .collection('users')
      .find({ role: 'doctor' })
      .project({ password: 0 })
      .toArray()

    res.json(doctors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get doctor by ID

router.get('/doctors/:id', async (req, res) => {
  try {
    const db = req.app.get('db')
    const { id } = req.params

    const doctor = await db
      .collection('users')
      .findOne(
        { _id: new ObjectId(id), role: doctor },
        { projection: { password: 0 } },
      )

    if (!doctor) return res.status(404).json({ error: 'Doctor not found' })

    res.json(doctor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
