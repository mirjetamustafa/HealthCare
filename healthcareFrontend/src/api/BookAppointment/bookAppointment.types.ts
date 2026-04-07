export interface AppointmentInput {
  department: string
  doctor: string
  doctorName: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  reasonForVisit?: string
  status: 'Upcoming' | 'Completed' | 'Cancelled'
}

export interface AppointmenResponse {
  _id: string
  department: string
  doctor: string
  doctorName: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  reasonForVisit?: string
  createdAt: string
  status: 'Upcoming' | 'Completed' | 'Cancelled'
}

export interface UpdateAppointmentInput {
  department?: string
  doctor?: string
  doctorName: string
  date?: string
  time?: string
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  reasonForVisit?: string
  status?: 'Upcoming' | 'Completed' | 'Cancelled'
}
