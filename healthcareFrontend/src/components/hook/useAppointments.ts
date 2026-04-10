import { useState } from 'react'
import { updateAppointmentStatus } from '../../api/BookAppointment/appointment'
import { toast } from 'react-toastify'

type Status = 'Pending' | 'Approved' | 'Cancelled' | 'Upcoming' | 'Completed'

export const useAppointments = (refetch: () => void) => {
  const [loading, setLoading] = useState(false)

  const updateStatus = async (
    id: string,
    status: Status,
    successMsg: string,
  ) => {
    if (!id) {
      console.log('id iis missing')
      return
    }
    try {
      setLoading(true)
      await updateAppointmentStatus(id, status)
      toast.success(successMsg)
      refetch?.()
    } catch (error) {
      console.error(`Error updating status to ${status}:`, error)
      toast.error(`Failed to update appointment`)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (id: string) => {
    await updateStatus(id, 'Approved', 'Appointment approved')
  }

  const handleCancel = async (id: string) => {
    await updateStatus(id, 'Cancelled', 'Appointment cancelled')
  }

  const handleComplete = async (id: string) => {
    await updateStatus(id, 'Completed', 'Appointment marked as completed')
  }

  return {
    handleApprove,
    handleCancel,
    handleComplete,
    loading,
  }
}
