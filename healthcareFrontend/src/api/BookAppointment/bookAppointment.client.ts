import { apiRequest } from '../Api'
import type {
  AppointmenResponse,
  AppointmentInput,
} from './bookAppointment.types'

export const createAppointment = async (data: AppointmentInput) =>
  apiRequest<AppointmentInput, AppointmenResponse>({
    method: 'POST',
    url: '/api/appointments',
    data,
  })
export const getAppointments = async () =>
  apiRequest<undefined, AppointmenResponse>({
    method: 'GET',
    url: '/api/appointments',
  })
