import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient(process.env.ATLAS_URI)
let database

export default {
  connectToServer: async () => {
    try {
      await client.connect()
      database = client.db('healthCare') // emri i DB-së
      console.log('Connected to MongoDB Atlas')
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err)
      process.exit(1)
    }
  },

  getDb: () => {
    if (!database) {
      throw new Error('Database not initialized. Call connectToServer first.')
    }
    return database
  },
}
