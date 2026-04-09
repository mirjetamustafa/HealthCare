import { apiRequest } from '../Api'

export const createAppointment = async (appointmentData: any) => {
  return await apiRequest({
    url: '/api/appointments',
    method: 'POST',
    data: appointmentData,
  })
}

export const getAppointments = async () => {
  return await apiRequest<any, any>({
    url: 'api/appointments',
    method: 'GET',
  })
}

export const getAppointmentById = async (id: string) => {
  return await apiRequest<any, any>({
    url: `api/appointments/${id}`,
    method: 'GET',
  })
}

export const updateAppointmentById = async (
  id: string,
  appointmentData: any,
) => {
  return await apiRequest<any, any>({
    url: `api/appointments/${id}`,
    method: 'PUT',
    data: { appointment: appointmentData },
  })
}

export const updateAppointmentStatus = async (id: string, status: any) => {
  return await apiRequest<any, any>({
    url: `api/appointments/${id}`,
    method: 'PATCH',
    data: { status: status },
  })
}

export const deleteAppointment = async (id: any) => {
  return await apiRequest<any, any>({
    url: `api/appointments/${id}`,
    method: 'DELETE',
  })
}
