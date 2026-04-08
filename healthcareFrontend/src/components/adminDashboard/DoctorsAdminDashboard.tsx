import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import SearchIcon from '../../assets/Search.svg?react'
import Plus from '../../assets/plus.svg?react'
import TableDoctor from '../shared/table/TableDoctor'
import { useState } from 'react'
import AddDoctor from './AddDoctor'
import type { DoctorResponse } from '../../api/User/user.types'
import { useDoctors } from '../hook/useDoctors'

interface AdminDashboardProps {
  doctors: DoctorResponse[]
  onDeleteDoctor: (id: string) => void
  fetchDoctors: () => void
  handleEdit: (doctor: DoctorResponse | null) => void
  addDoctor: () => void
  editDoctor: DoctorResponse | null
}

const DoctorsAdminDashboard = () => {
  //const [open, setOpen] = useState(false)
  const {
    doctors,
    handleDeleteDoctor,
    fetchDoctors,
    handleCreate,
    handleEdit,
    editDoctor,
    open,
    setOpen,
  } = useDoctors()

  const handleAddClick = () => {
    handleCreate()
  }
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900">
            Doctor Management
          </h2>
          <p className="text-gray-600 mt-1">
            {doctors.length} registered doctors
          </p>
        </div>
        <div className="flex items-center gap-3 ">
          <Input
            type="search"
            icon={<SearchIcon className="w-5 h-5" />}
            placeholder="Search doctors..."
            className="w-64"
          />
          <Button
            onClick={handleAddClick}
            variant="active"
            className="mb-3 pr-4 gap-1"
          >
            <Plus className="w-5 h-5" />
            Add Doctor
          </Button>
        </div>
      </div>

      <div className="mt-9">
        <TableDoctor
          doctors={doctors}
          onDeleteDoctor={handleDeleteDoctor}
          handleEdit={handleEdit}
        />
      </div>
      <AddDoctor
        isOpen={open}
        onClose={() => setOpen(false)}
        editDoctor={editDoctor}
        fetchDoctors={fetchDoctors}
      />
    </div>
  )
}

export default DoctorsAdminDashboard
