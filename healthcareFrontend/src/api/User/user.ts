import { apiRequest } from '../Api'
import type { DoctorRegisterInput, LoginInput } from './user.types'

export const loginUser = async (credentials: LoginInput): any => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const patientRegister = async (data: any): any => {
  return apiRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: data,
  })
}

export const doctorRegister = async (data: DoctorRegisterInput): any => {
  return apiRequest({
    url: '/api/admin/create-doctor',
    method: 'POST',
    data: data,
  })
}

export const getDoctors = async (): any => {
  return apiRequest({
    url: '/api/doctors',
    method: 'GET',
  })
}

export const updateDoctors = async (_id: string, updateData: any): any => {
  return apiRequest({
    url: `/api/admin/${_id}`,
    method: 'PUT',
    data: updateData,
  })
}

export const deleteDoctor = async (_id: string) => {
  return apiRequest({
    url: `/api/admin/${_id}`,
    method: 'DELETE',
  })
}

// Patient

export const getPatients = async (): any => {
  return apiRequest({
    url: '/api/patients',
    method: 'GET',
  })
}

export const deletePatient = async (_id: string) => {
  return apiRequest({
    url: `/api/patients/${_id}`,
    method: 'DELETE',
  })
}
