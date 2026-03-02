import { apiRequest } from '../Api'
import type {
  RegisterInput,
  User,
  SetPasswordInput,
  SetPasswordResponse,
  LoginInput,
} from './user.types'

export const login = async (data: LoginInput) =>
  apiRequest<any, any>({
    method: 'POST',
    url: 'api/auth/login',
    data: { credentials: data },
  })

export const registerUser = async (data: RegisterInput) =>
  apiRequest<RegisterInput, { user: User }>({
    method: 'POST',
    url: '/api/auth/register',
    data,
  })

export const resetPassword = async (data: SetPasswordInput, token: string) =>
  apiRequest<SetPasswordInput, SetPasswordResponse>({
    method: 'POST',
    url: `auth/reset-password`,
    data,
    params: {
      token,
    },
  })

export const getUserDetails = async () =>
  apiRequest<undefined, User>({ method: 'GET', url: 'users/me' })
