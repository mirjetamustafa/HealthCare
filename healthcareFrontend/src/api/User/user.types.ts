export interface LoginInput {
  email: string
  password: string
}

export interface DoctorRegisterInput {
  firstName: string
  lastName: string
  email: string
  password: string
  role?: string
  specialization: string
  department: string
  education: string
  yearsOfExperience: number
  contactNumber: string
  schedule: string
  img: string
  biography: string
}

export interface DoctorResponse {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  role?: string
  specialization: string
  department: string
  education: string
  yearsOfExperience: number
  contactNumber: string
  schedule: string
  status: string
  img: string
  biography: string
}

export interface PatientResponse {
  _id: string
  firstName: string
  lastName: string
  email: string
  contactNumber: string
  dateOfBirth: string
  status: string
  createdAt: string
}

export interface RegisterInput {
  firstName: string
  lastName: string
  email: string
  password: string
  role?: string
}

export interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  role: string
}

export interface SetPasswordInput {
  password: string
  confirmPassword: string
}

export interface SetPasswordResponse {
  message: string
}
