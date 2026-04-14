import { apiRequest } from '../Api'

export const sendMessage = async (message: string) => {
  return await apiRequest({
    url: '/api/ai/chat',
    method: 'POST',
    data: { message },
  })
}
