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

export const getAppointment = (email?: string) => {
  return apiRequest({
    url: 'api/appointments',
    method: 'GET',
    params: email ? { email } : {},
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
