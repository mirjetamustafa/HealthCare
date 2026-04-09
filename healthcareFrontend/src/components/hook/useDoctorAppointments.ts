import { useEffect, useState } from 'react'
import type { AppointmenResponse } from '../../api/BookAppointment/bookAppointment.types'
import { getAppointment } from '../../api/BookAppointment/appointment'

export const useDoctorAppointments = () => {
  const [appointments, setApointments] = useState<AppointmenResponse[]>([])

  const fetchAppointments = async () => {
    try {
      const res = await getAppointment()
      setApointments(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return { appointments, fetchAppointments }
}
