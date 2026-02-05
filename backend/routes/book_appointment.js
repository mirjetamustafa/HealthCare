const express = require('express')
const database = require('../connect')
const { ObjectId } = require('mongodb')

let appointmentRoutes = express.Router()

// get all
appointmentRoutes.get('/', async (req, res) => {
  try {
    const db = database.getDb()
    const appointment = await db.collection('appointment').find({}).toArray()
    res.json(appointment)
  } catch (error) {
    console.error('Error fetching apointment:', error)
    res.status(500).json({ message: 'Faied to fetch appointment' })
  }
})

// Create
appointmentRoutes.post('/', async (req, res) => {
  try {
    const {
      departament,
      doctor,
      date,
      firstName,
      lastName,
      email,
      phoneNumber,
      reasonForVisit,
    } = req.body

    // Server-side validation
    const errors = []
    if (!departament) errors.push('Departament is required')
    if (!doctor) errors.push('Doctor is required')
    if (!date) errors.push('Date is required')
    if (!firstName) errors.push('Name is required')
    if (!lastName) errors.push('Lastname is required')
    if (!email) errors.push('Email is required')
    if (!phoneNumber) errors.push('Phone Number is required')
    if (!reasonForVisit) errors.push('Reason for visit is required')

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors })
    }

    const db = database.getDb()
    const newAppointment = {
      departament,
      doctor,
      date,
      firstName,
      lastName,
      email,
      phoneNumber,
      reasonForVisit,
    }

    const result = await db.collection('appointment').insertOne(newAppointment)

    // Send the newly created task back
    res.status(201).json({ ...newAppointment, _id: result.insertedId })
  } catch (error) {
    console.error('Error creating appointment:', error)
    res.status(500).json({ message: 'Faied to create appointment' })
  }
})

// Update

appointmentRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      departament,
      doctor,
      date,
      firstName,
      lastName,
      email,
      phoneNumber,
      reasonForVisit,
    } = req.body

    // Optional: server-side validation can be added here as well

    const db = database.getDb()
    const result = await db.collection('appointment').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          departament,
          doctor,
          date,
          firstName,
          lastName,
          email,
          phoneNumber,
          reasonForVisit,
        },
      },
    )

    if (result.matchCount === 0) {
      return res.status(404).json({ message: 'Appointment not found' })
    }
    res.json({ message: 'Appointment updated successfully' })
  } catch (error) {
    console.error('Error udating task:', error)
    res.status(500).json({ message: 'Failed to update appointment' })
  }
})

//Delete

appointmentRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const db = database.getDb()
    const result = await db
      .collection('appointment')
      .deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Appointment not found' })
    }
    res.json({ message: 'Appintment deleted successfully' })
  } catch (error) {
    console.error('Error deleting appointment:', error)
    res.status(500).json({ message: 'Failed to delete appointment' })
  }
})

module.exports = appointmentRoutes
