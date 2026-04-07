const express = require('express')
const database = require('../connect')
const { ObjectId } = require('mongodb')

const router = express.Router()

// GET all appointments (optionally filter by email)
router.get('/', async (req, res) => {
  try {
    const db = database.getDb()
    const { email } = req.query
    const query = email ? { email } : {}
    const appointments = await db
      .collection('appointments')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray()
    res.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    res.status(500).json({ message: 'Failed to fetch appointments' })
  }
})

// POST create appointment
router.post('/', async (req, res) => {
  try {
    const db = database.getDb()
    console.log('Body:', req.body)

    const {
      department,
      doctor,
      doctorName,
      date,
      time,
      firstName,
      lastName,
      email,
      phoneNumber,
      reasonForVisit,
      status,
    } = req.body

    // validation
    const errors = []
    if (!department) errors.push('Department is required')
    if (!doctor) errors.push('Doctor is required')
    if (!doctorName) errors.push('Doctor name is required')
    if (!date) errors.push('Date is required')
    if (!time) errors.push('Time is required')
    if (!firstName) errors.push('First Name is required')
    if (!lastName) errors.push('Last Name is required')
    if (!email) errors.push('Email is required')
    if (!phoneNumber) errors.push('Phone Number is required')

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors })
    }

    // check duplicate appointment
    const existingAppointment = await db.collection('appointments').findOne({
      email,
      department,
      date,
      time,
    })

    if (existingAppointment) {
      return res.status(400).json({
        message: 'You already have an appointment at this time',
      })
    }

    const newAppointment = {
      department,
      doctor,
      doctorName,
      date,
      time,
      firstName,
      lastName,
      email,
      phoneNumber,
      reasonForVisit: reasonForVisit || '',
      status: status || 'Upcoming',
      createdAt: new Date(),
    }

    console.log('Saving:', newAppointment)
    const result = await db.collection('appointments').insertOne(newAppointment)

    res.status(201).json({
      ...newAppointment,
      _id: result.insertedId,
    })
  } catch (error) {
    console.error('Error creating appointment:', error)
    res.status(500).json({ message: 'Failed to create appointment' })
  }
})

module.exports = router
