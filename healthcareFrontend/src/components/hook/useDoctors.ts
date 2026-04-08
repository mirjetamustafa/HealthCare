import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import type { DoctorResponse } from '../../api/User/user.types'
import { deleteDoctor, getDoctors } from '../../api/User/user'

export const useDoctors = () => {
  const [doctors, setDoctors] = useState<DoctorResponse[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [editDoctor, setEditDoctor] = useState<DoctorResponse | null>(null)
  const [open, setOpen] = useState(false)

  const fetchDoctors = async () => {
    try {
      const response = await getDoctors()
      setDoctors(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  const handleDeleteDoctor = async (id: string) => {
    try {
      await deleteDoctor(id)
      toast.success('Doctor deleted successfully')
      fetchDoctors()
    } catch (error) {
      toast.error('Failed to delete doctor')
      console.error(error)
    }
  }

  const handleCreate = () => {
    setEditDoctor(null)
    setOpen(true)
  }

  const handleEdit = (doctor: DoctorResponse) => {
    setEditDoctor(doctor)
    setOpen(true)
  }

  const formatText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

  const departments = [
    { label: 'All Departments', value: 'all' },
    ...Array.from(new Set(doctors.map((doctor) => doctor.department))).map(
      (department) => ({
        label: formatText(department),
        value: department,
      }),
    ),
  ]

  const filteredDoctors =
    selectedDepartment === 'all'
      ? doctors
      : doctors.filter((doctor) => doctor.department === selectedDepartment)

  return {
    doctors,
    filteredDoctors,
    departments,
    setSelectedDepartment,
    handleDeleteDoctor,
    fetchDoctors,
    handleEdit,
    handleCreate,
    editDoctor,
    open,
    setOpen,
  }
}
