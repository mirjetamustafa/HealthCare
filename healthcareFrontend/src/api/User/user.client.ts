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
    data: data,
  })

export const registerUser = async (data: RegisterInput) =>
  apiRequest<RegisterInput, { user: User }>({
    method: 'POST',
    url: '/api/auth/register',
    data,
  })

export const getDoctor = async () => {
  return await apiRequest<any, any>({
    url: '/api/doctors',
    method: 'GET',
  })
}

export const getDoctorById = async (id: string) => {
  return await apiRequest<any, any>({
    url: `/api/doctors/${id}`,
    method: 'GET',
  })
}

export const getPatient = async () => {
  return await apiRequest<any, any>({
    url: '/api/patients',
    method: 'GET',
  })
}

export const getPatientById = async (id: string) => {
  return await apiRequest<any, any>({
    url: `/api/patients/${id}`,
    method: 'GET',
  })
}

export const updateDoctorById = async (id: string, data: any) => {
  return await apiRequest<any, any>({
    url: `api/doctors/${id}`,
    method: 'PUT',
    data: { doctor: data },
  })
}

export const deleteDoctor = async (id: any) => {
  return await apiRequest<any, any>({
    url: `api/doctors/${id}`,
    method: 'DELETE',
  })
}

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
