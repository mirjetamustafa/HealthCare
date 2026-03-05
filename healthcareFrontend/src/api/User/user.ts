import { apiRequest } from '../Api'
import type { DoctorRegisterInput, LoginInput } from './user.types'

export const loginUser = (credentials: LoginInput): any => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const doctorRegister = (data: DoctorRegisterInput): any => {
  return apiRequest({
    url: '/api/admin/create-doctor',
    method: 'POST',
    data: data,
  })
}

export const getDoctors = (): any => {
  return apiRequest({
    url: '/api/doctors',
    method: 'GET',
  })
}
