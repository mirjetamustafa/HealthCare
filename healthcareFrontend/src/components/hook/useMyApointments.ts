import { useEffect, useState } from 'react'
import { useAuthContext } from '../../lib/AuthContext'
import { getAppointments } from '../../api/BookAppointment/bookAppointment.client'

const useMyApointments = () => {
  const { user } = useAuthContext()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    if (!user?.email) return

    getAppointments(user.email).then((res) => setAppointments(res.data))
  }, [user?.email])
  return { appointments }
}

export default useMyApointments
