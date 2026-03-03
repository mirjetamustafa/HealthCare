import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import SearchIcon from '../../assets/Search.svg?react'
import Plus from '../../assets/plus.svg?react'
import TableDoctor from '../shared/table/TableDoctor'
import { useState } from 'react'
import AddDoctor from './AddDoctor'

const doctors = [
  {
    id: '1',
    name: 'Dr. Emily Rodriguez',
    email: 'emily.r@medicare.com',
    department: 'Cardiology',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Dr. James Williams',
    email: 'james.w@medicare.com',
    department: 'Neurology',
    status: 'Active',
  },
]

const DoctorsAdminDashboard = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900">
            Doctor Management
          </h2>
          <p className="text-gray-600 mt-1">2 registered doctors</p>
        </div>
        <div className="flex items-center gap-3 ">
          <Input
            type="search"
            icon={<SearchIcon className="w-5 h-5" />}
            placeholder="Search patients..."
            className="w-64"
          />
          <Button
            onClick={() => setOpen(true)}
            variant="active"
            className="mb-3 pr-4 gap-1"
          >
            <Plus className="w-5 h-5" />
            Add Doctor
          </Button>
        </div>
      </div>

      <div className="mt-9">
        <TableDoctor doctors={doctors} />
      </div>
      <AddDoctor isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default DoctorsAdminDashboard
