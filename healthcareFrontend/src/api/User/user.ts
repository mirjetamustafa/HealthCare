import { apiRequest } from '../Api'
import type { LoginInput } from './user.types'

export const loginUser = (credentials: LoginInput): any => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}
