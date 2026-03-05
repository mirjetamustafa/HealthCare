const bcrypt = require('bcryptjs')
const { MongoClient } = require('mongodb')
require('dotenv').config() // nëse përdor .env

async function createAdmin() {
  const uri = await MongoClient.connect(process.env.MONGO_URI)
  const client = await MongoClient.connect(uri)
  const db = client.db('healthCare') // ky është emri i database që po përdor

  const hashedPassword = await bcrypt.hash('Admin123!', 10)

  await db.collection('users').insertOne({
    name: 'Admin User',
    email: 'admin@healthcare.com',
    password: hashedPassword,
    role: 'admin',
    createdAt: new Date(),
  })

  console.log('Admin created!')
  client.close()
}

createAdmin()
