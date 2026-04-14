import express from 'express'
import { authMiddleware } from './auth.js'
import { ObjectId } from 'mongodb'
import database from '../connect.js'

const router = express.Router()

// Get current user
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const db = database.getDb() // përdorim database.getDb()

    const user = await db.collection('users').findOne(
      { _id: new ObjectId(req.user.id) },
      { projection: { password: 0 } }, // mos trego password
    )

    if (!user) return res.status(404).json({ error: 'User not found' })

    res.json(user)
  } catch (err) {
    console.error('Error fetching current user:', err)
    res.status(500).json({ error: 'Failed to fetch user' })
  }
})

export default router
