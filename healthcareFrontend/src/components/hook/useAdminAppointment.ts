import { useEffect, useState } from 'react'
import type { AppointmenResponse } from '../../api/BookAppointment/bookAppointment.types'
import { getAppointment } from '../../api/BookAppointment/appointment'

export const useAdminAppointment = () => {
  const [appointments, setAppointments] = useState<AppointmenResponse[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAdminAppointments = async () => {
    try {
      setLoading(true)
      const res = await getAppointment()
      setAppointments(res.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdminAppointments()
  }, [])
  return { appointments, fetchAdminAppointments, loading }
}
