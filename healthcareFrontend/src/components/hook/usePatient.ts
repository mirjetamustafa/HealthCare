import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { patientRegister } from '../../api/User/user'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../../lib/AuthContext'

// Register patient
const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  password: '',
  confirmPassword: '',
  contactNumber: '',
  createdAt: new Date(),
}

export const usePatient = () => {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password don't match")
      return
    }

    try {
      const res = await patientRegister({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        contactNumber: formData.contactNumber,
      })
      toast.success('Registered successfully!')
      console.log('Registered patient:', res.data)
      setFormData(initialForm)
    } catch (err: any) {
      toast.error('Registration failed')
      console.error(err)
    }
  }

  return { formData, handleChange, handleSubmit }
}

// useLogin hook
const intialData = {
  email: '',
  password: '',
}
export const useLogin = () => {
  const [loginData, setLoginData] = useState(intialData)
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const user = await login(loginData)

      if (user.role === 'admin') navigate('/admin')
      if (user.role === 'doctor') navigate('/doctorDashboard')
      if (user.role === 'patient') navigate('/patient')

      toast.success('Logged in successfully!')
    } catch {
      toast.error('Login failed')
    }
  }

  return { loginData, setLoginData, handleSubmit }
}
