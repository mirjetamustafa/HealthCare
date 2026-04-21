import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  deletePatient,
  getPatients,
  patientRegister,
  updatePatient,
} from '../../api/User/user'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../lib/AuthContext'
import type { PatientResponse } from '../../api/User/user.types'

// Register patient
const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  password: '',
  confirmPassword: '',
  contactNumber: '',
  status: 'Active',
  createdAt: new Date(),
}

export const usePatient = () => {
  const [formData, setFormData] = useState(initialForm)
  const [patients, setPatents] = useState<PatientResponse[]>([])
  const [editPatient, setEditPatient] = useState<PatientResponse | null>(null)
  const [openPatientModal, setOpenPatientModal] = useState(false)

  // fetch patients
  const fetchPatients = async () => {
    try {
      const response = await getPatients()
      setPatents(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  // delete patient
  const handleDelete = async (id: string) => {
    try {
      await deletePatient(id)
      toast.success('Patient deleted successfully')
      fetchPatients()
    } catch (error) {
      toast.error('Failed to delete patient')
      console.error(error)
    }
  }

  const handleEditPatient = (patient: PatientResponse) => {
    setEditPatient(patient)
    setOpenPatientModal(true)
  }

  // sync formData with editPatient when it changes

  useEffect(() => {
    if (editPatient) {
      setFormData({
        ...editPatient,
        password: '',
        confirmPassword: '',
      })
    } else {
      setFormData(initialForm)
    }
  }, [editPatient])

  // handle form change
  const handleChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!editPatient && formData.password !== formData.confirmPassword) {
      toast.error("Password don't match")
      return
    }

    try {
      if (editPatient) {
        // update
        const { ...updateData } = formData
        await updatePatient(editPatient._id, updateData)
        toast.success('Patient updated successfully!')
      } else {
        // register
        await patientRegister(formData)
        toast.success('Registered successfully!')
      }
      setFormData(initialForm)
      setEditPatient(null)
      setOpenPatientModal(false)
      fetchPatients()
    } catch (err: any) {
      toast.error('Registration failed')
      console.error(err)
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    patients,
    fetchPatients,
    editPatient,
    setEditPatient,
    openPatientModal,
    handleEditPatient,
    handleDelete,
    setOpenPatientModal,
  }
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
