import { apiRequest } from '../Api'
import type {
  AppointmenResponse,
  AppointmentInput,
} from './bookAppointment.types'

export const createAppointment = (appointment: AppointmentInput) => {
  return apiRequest({
    url: '/api/appointments',
    method: 'POST',
    data: appointment,
  })
}

export const getAppointment = (email?: string, doctorEmail?: string) => {
  const params: Record<string, string> = {}
  if (email) params.email = email
  if (doctorEmail) params.doctorEmail = doctorEmail

  return apiRequest({
    url: '/api/appointments',
    method: 'GET',
    params,
  })
}

export const updateAppointment = (_id: string, data: AppointmenResponse) => {
  return apiRequest({
    url: `api/appointments/${_id}`,
    method: 'PUT',
    data,
  })
}

// update status
export const updateAppointmentStatus = (_id: string, status: string) => {
  return apiRequest({
    url: `api/appointments/${_id}`,
    method: 'PATCH',
    data: { status },
  })
}

export const deleteAppointment = (_id: string) => {
  return apiRequest({
    url: `api/appointments/${_id}`,
    method: 'DELETE',
  })
}
