import express from 'express'
import database from '../connect.js'
import { ObjectId } from 'mongodb'

const router = express.Router()

// GET all appointments (optionally filter by email)
router.get('/', async (req, res) => {
  try {
    const db = database.getDb()
    const { email, doctorEmail } = req.query

    const query = {}
    if (email) query.email = email.toString()
    if (doctorEmail) query.doctorEmail = doctorEmail.toString()

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

    const {
      department,
      doctorEmail,
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
    if (!doctorEmail) errors.push('Doctor Email is required')
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
      doctorEmail,
    })

    if (existingAppointment) {
      return res.status(400).json({
        message: 'You already have an appointment at this time',
      })
    }

    const newAppointment = {
      department,
      doctorEmail: doctorEmail.toString().toLowerCase(),
      doctorName,
      date,
      time,
      firstName,
      lastName,
      email: email.toString().toLowerCase(),
      phoneNumber,
      reasonForVisit: reasonForVisit || '',
      status: status || 'Upcoming',
      createdAt: new Date(),
    }

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

router.patch('/:id', async (req, res) => {
  try {
    const db = database.getDb()
    const { id } = req.params
    const { status } = req.body

    if (!status) {
      return res.status(400).json({ message: 'Status is required' })
    }

    const result = await db
      .collection('appointments')
      .updateOne({ _id: new ObjectId(id) }, { $set: { status } })

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Appointment not found' })
    }

    res.json({ message: 'Status updated successfully' })
  } catch (error) {
    console.error('Error updating appointment status:', error)
    res.status(500).json({ message: 'Failed to update appointment status' })
  }
})

export default router
