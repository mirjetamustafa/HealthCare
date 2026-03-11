import { apiRequest } from '../Api'
import type { DoctorRegisterInput, LoginInput } from './user.types'

export const loginUser = (credentials: LoginInput): any => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const patientRegister = (data: any): any => {
  return apiRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: data,
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

export const updateDoctors = (_id: string, updateData: any): any => {
  return apiRequest({
    url: `/api/admin/${_id}`,
    method: 'PUT',
    data: updateData,
  })
}

export const deleteDoctor = (_id: string) => {
  return apiRequest({
    url: `/api/admin/${_id}`,
    method: 'DELETE',
  })
}
