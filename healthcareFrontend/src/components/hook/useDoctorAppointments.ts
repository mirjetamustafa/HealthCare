import { useEffect, useState } from 'react'
import type { AppointmenResponse } from '../../api/BookAppointment/bookAppointment.types'
import { getAppointment } from '../../api/BookAppointment/appointment'
import { useAuthContext } from '../../lib/AuthContext'

export const useDoctorAppointments = () => {
  const { user } = useAuthContext()
  const [appointments, setApointments] = useState<AppointmenResponse[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAppointments = async () => {
    if (!user || user.role !== 'doctor') return

    try {
      setLoading(true)
      const { data } = await getAppointment(undefined, user.email)
      const filteredAppointments = (data as AppointmenResponse[]).filter(
        (appt: AppointmenResponse) => appt.doctorEmail === user.email,
      )

      setApointments(filteredAppointments)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [user?.email, user?.role])

  return { appointments, fetchAppointments, loading }
}
