import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

router.post('/chat', async (req, res) => {
  const { message } = req.body

  try {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `
You are a health assistant.
- Give only general advice
- Do NOT diagnose diseases
- Do NOT prescribe medication
- Always recommend consulting a doctor
            `,
            },
            {
              role: 'user',
              content: message,
            },
          ],
        }),
      },
    )

    const data = await response.json()

    res.json({
      reply: data.choices?.[0]?.message?.content || 'No response',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'AI error' })
  }
})

export default router
