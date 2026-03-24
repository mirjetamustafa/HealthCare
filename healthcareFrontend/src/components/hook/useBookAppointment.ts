import React, { useState } from 'react'
import { createAppointment } from '../../api/BookAppointment/bookAppointment.client'
import { toast } from 'react-toastify'
import type { DoctorResponse } from '../../api/User/user.types'

interface BookAppointmentProps {
  doctors: DoctorResponse[]
}

const initialData = {
  department: '',
  doctor: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  reasonForVisit: '',
}

export const useBookAppointment = () => {
  const [step, setStep] = useState(1)
  const [appointmentData, setAppointmentData] = useState(initialData)

  const handleSubmit = async () => {
    try {
      const res = await createAppointment(appointmentData)
      toast.success('Appointment booked successfully!')
      setStep(1)
      setAppointmentData(initialData)
    } catch (error) {
      console.error('Error:', error)
      toast.error('Something went wrong')
    }
  }
  return { step, setStep, appointmentData, setAppointmentData, handleSubmit }
}
