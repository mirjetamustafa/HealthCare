export interface AppointmentInput {
  department: string
  doctorEmail: string
  doctorFirstName: string
  doctorLastName: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  reasonForVisit?: string
  status: 'Upcoming' | 'Approved' | 'Cancelled' | 'Completed'
}

export interface AppointmenResponse {
  _id: string
  department: string
  doctorEmail: string
  doctorFirstName: string
  doctorLastName: string
  date: string
  time: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  reasonForVisit?: string
  createdAt: string
  status: 'Upcoming' | 'Approved' | 'Cancelled' | 'Completed'
}

export interface UpdateAppointmentInput {
  department?: string
  doctorEmail?: string
  doctorFirstName: string
  doctorLastName: string
  date?: string
  time?: string
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  reasonForVisit?: string
  status?: 'Upcoming' | 'Approved' | 'Cancelled' | 'Completed'
}
