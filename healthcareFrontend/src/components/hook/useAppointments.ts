import { useState } from 'react'
import { updateAppointmentStatus } from '../../api/BookAppointment/appointment'
import { toast } from 'react-toastify'

export const useAppointments = (refetch: () => void) => {
  const [loading, setLoading] = useState(false)

  const handleApprove = async (id: string) => {
    if (!id) {
      console.log('id is missing')
      return
    }
    try {
      setLoading(true)
      await updateAppointmentStatus(id, 'Approved')
      toast.success('Appointment approved.')
      refetch()
    } catch (error) {
      console.error('Error updating appointment status:', error)
      toast.error('Failed to approve appointment.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = async (id: string) => {
    try {
      await updateAppointmentStatus(id, 'Cancelled')
      refetch()
    } catch (error) {
      console.error('Error updating appointment status:', error)
    }
  }

  return {
    handleApprove,
    handleCancel,
    loading,
  }
}
