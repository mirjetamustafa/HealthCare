export interface AppointmentInput {
  department: string
  doctor: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  reasonForVisit?: string
}

export interface AppointmenResponse {
  _id: string
  department: string
  doctor: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  reasonForVisit?: string
  createdAt: string
}

export interface UpdateAppointmentInput {
  department?: string
  doctor?: string
  date?: string
  time?: string
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  reasonForVisit?: string
}
