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
import type { AxiosError } from 'axios'

// interface BookAppointmentProps {
//   doctors: DoctorResponse[]
// }

const initialData: AppointmentInput = {
  department: '',
  doctorEmail: '',
  doctorFirstName: '',
  doctorLastName: '',
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

  const userEmail = user?.email || appointmentData.email

  const fetchAppointments = async () => {
    if (!userEmail) return

    try {
      const response = await getAppointment(userEmail)
      const data = response.data as AppointmenResponse[]
      setAppointments(data)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }

  useEffect(() => {
    fetchAppointments()
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
      doctorEmail: appointmentData.doctorEmail,
      doctorFirstName: appointmentData.doctorFirstName,
      doctorLastName: appointmentData.doctorLastName,
    }

    try {
      await createAppointment(payload)
      toast.success('Appointment booked successfully!')
      setStep(1)
      setAppointmentData(initialData)

      //rifetch after submit
      await fetchAppointments()
    } catch (error) {
      console.error('Error:', error)
      const err = error as AxiosError<{ message: string }>

      if (err?.response?.data?.message) {
        toast.error(err.response.data.message)
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
    fetchAppointments,
  }
}
