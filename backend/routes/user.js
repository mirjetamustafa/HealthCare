const express = require('express')
const { authMiddleware } = require('./auth')
const { ObjectId } = require('mongodb')

const router = express.Router()

// Get current user
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const db = req.app.get('db')

    const user = await db.collection('users').findOne(
      { _id: new ObjectId(req.user.id) },
      { projection: { password: 0 } }, // mos trego password
    )

    if (!user) return res.status(404).json({ error: 'User not found' })

    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
