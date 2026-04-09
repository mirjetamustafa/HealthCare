import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import type {
  AppointmenResponse,
  AppointmentInput,
} from '../../api/BookAppointment/bookAppointment.types'
import { useAuthContext } from '../../lib/AuthContext'
import {
  createAppointment,
  getAppointment,
} from '../../api/BookAppointment/appointment'

// interface BookAppointmentProps {
//   doctors: DoctorResponse[]
// }

const initialData: AppointmentInput = {
  department: '',
  doctor: '',
  doctorName: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  reasonForVisit: '',
  status: 'Upcoming',
}

export const useBookAppointment = () => {
  const { user } = useAuthContext()
  const [step, setStep] = useState(1)
  const [appointmentData, setAppointmentData] =
    useState<AppointmentInput>(initialData)
  const [appointments, setAppointments] = useState<AppointmenResponse[]>([])

  const userEmail = user?.email || ''

  const fetchApointments = async () => {
    if (!userEmail) return

    try {
      const response = await getAppointment(userEmail)
      setAppointments(response.data)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }

  useEffect(() => {
    fetchApointments()
  }, [userEmail])

  const handleSubmit = async () => {
    if (!userEmail) {
      toast.error('Email is required.')
      return
    }

    const alreadyExists = appointments.some(
      (appt) =>
        appt.email === userEmail &&
        appt.department === appointmentData.department,
    )

    if (alreadyExists) {
      toast.error('You already have an appointment in this department.')
      return
    }

    const payload = {
      ...appointmentData,
      email: userEmail,
      status: appointmentData.status || 'Upcoming',
      doctorName: appointmentData.doctorName,
      doctor: appointmentData.doctor,
    }

    try {
      await createAppointment(payload)
      toast.success('Appointment booked successfully!')
      setStep(1)
      setAppointmentData(initialData)

      //rifetch after submit
      await fetchApointments()
    } catch (error) {
      console.error('Error:', error)

      if (error?.response?.data?.message) {
        toast.error(error.response.data.message)
      }
    }
  }
  return {
    step,
    setStep,
    appointmentData,
    setAppointmentData,
    handleSubmit,
    appointments,
    isLoggedIn: !!user,
  }
}
