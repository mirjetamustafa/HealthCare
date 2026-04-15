import { apiRequest } from '../Api'
import type { DoctorRegisterInput, LoginInput } from './user.types'

export const loginUser = (credentials: LoginInput): any => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const getCurrentUser = () => {
  return apiRequest({
    url: '/api/user/me',
    method: 'GET',
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
export const getDoctorsById = (id: string) => {
  return apiRequest({
    url: `/api/doctors/${id}`,
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

// Patient

export const getPatients = (): any => {
  return apiRequest({
    url: '/api/patients',
    method: 'GET',
  })
}

export const deletePatient = (_id: string) => {
  return apiRequest({
    url: `/api/patients/${_id}`,
    method: 'DELETE',
  })
}

export const updatePatient = (_id: string, updateData: any) => {
  return apiRequest({
    url: `/api/patients/${_id}`,
    method: 'PUT',
    data: updateData,
  })
}

export const updateAvailability = (id: string, availability: any) => {
  return apiRequest({
    url: `/api/doctors/availability/${id}`,
    method: 'PUT',
    data: { availability },
  })
}
