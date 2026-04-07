// const express = require('express')
// const { ObjectId } = require('mongodb')

// let appointmentRoutes = express.Router()

// // ✅ GET ALL (me filter sipas email)
// appointmentRoutes.get('/', async (req, res) => {
//   try {
//     const db = req.app.get('db')
//     const { email } = req.query

//     let query = {}

//     if (email) {
//       query.email = email
//     }

//     const appointments = await db
//       .collection('appointments')
//       .find(query)
//       .toArray()

//     res.json(appointments)
//   } catch (error) {
//     console.error('Error fetching appointments:', error)
//     res.status(500).json({ message: 'Failed to fetch appointments' })
//   }
// })

// // ✅ CREATE (me kontroll për duplicate)
// appointmentRoutes.post('/', async (req, res) => {
//   try {
//     const {
//       department,
//       doctor,
//       doctorName,
//       date,
//       time,
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       reasonForVisit,
//       status,
//     } = req.body

//     // VALIDATION
//     const errors = []
//     if (!department) errors.push('Department is required')
//     if (!doctor) errors.push('Doctor is required')
//     if (!date) errors.push('Date is required')
//     if (!time) errors.push('Time is required')
//     if (!firstName) errors.push('First name is required')
//     if (!lastName) errors.push('Last name is required')
//     if (!email) errors.push('Email is required')
//     if (!phoneNumber) errors.push('Phone number is required')

//     if (errors.length > 0) {
//       return res.status(400).json({ message: 'Validation failed', errors })
//     }

//     const db = req.app.get('db')

//     // ❌ CHECK DUPLICATE (email + department)
//     const existingAppointment = await db.collection('appointments').findOne({
//       email,
//       department,
//     })

//     if (existingAppointment) {
//       return res.status(400).json({
//         message: 'You already have an appointment in this department',
//       })
//     }

//     const newAppointment = {
//       department,
//       doctor,
//       doctorName,
//       date,
//       time,
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       reasonForVisit,
//       status: status || 'Upcoming',
//       createdAt: new Date(),
//     }

//     const result = await db.collection('appointments').insertOne(newAppointment)

//     res.status(201).json({
//       ...newAppointment,
//       _id: result.insertedId,
//     })
//   } catch (error) {
//     console.error('Error creating appointment:', error)
//     res.status(500).json({ message: 'Failed to create appointment' })
//   }
// })

// // ✅ UPDATE (me kontroll duplicate)
// appointmentRoutes.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const db = req.app.get('db')

//     const { department, email } = req.body

//     // ❌ nëse po ndryshohet department/email → kontrollo duplicate
//     if (department && email) {
//       const existing = await db.collection('appointments').findOne({
//         email,
//         department,
//         _id: { $ne: new ObjectId(id) }, // mos e krahaso me veten
//       })

//       if (existing) {
//         return res.status(400).json({
//           message: 'You already have an appointment in this department',
//         })
//       }
//     }

//     const updateFields = {
//       ...(req.body.department && { department }),
//       ...(req.body.doctor && { doctor }),
//       ...(req.body.doctorName && { doctorName }),
//       ...(req.body.date && { date }),
//       ...(req.body.time && { time }),
//       ...(req.body.firstName && { firstName }),
//       ...(req.body.lastName && { lastName }),
//       ...(req.body.email && { email }),
//       ...(req.body.phoneNumber && { phoneNumber }),
//       ...(req.body.reasonForVisit && { reasonForVisit }),
//       ...(req.body.status && { status }),
//     }

//     const result = await db
//       .collection('appointments')
//       .updateOne({ _id: new ObjectId(id) }, { $set: updateFields })

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: 'Appointment not found' })
//     }

//     res.json({ message: 'Appointment updated successfully' })
//   } catch (error) {
//     console.error('Error updating appointment:', error)
//     res.status(500).json({ message: 'Failed to update appointment' })
//   }
// })

// // DELETE
// appointmentRoutes.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const db = req.app.get('db')

//     const result = await db
//       .collection('appointments')
//       .deleteOne({ _id: new ObjectId(id) })

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: 'Appointment not found' })
//     }

//     res.json({ message: 'Appointment deleted successfully' })
//   } catch (error) {
//     console.error('Error deleting appointment:', error)
//     res.status(500).json({ message: 'Failed to delete appointment' })
//   }
// })

// module.exports = appointmentRoutes
