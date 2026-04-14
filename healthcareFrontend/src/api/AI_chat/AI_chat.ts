import { apiRequest } from '../Api'

export const sendMessage = (message: string) => {
  return apiRequest({
    url: '/api/ai/chat',
    method: 'POST',
    data: { message },
  })
}
