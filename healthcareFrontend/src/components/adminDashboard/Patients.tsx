import Input from '../shared/Input/Input'
import SearchIcon from '../../assets/Search.svg?react'
import Table from '../shared/table/Table'
import type { PatientResponse } from '../../api/User/user.types'

// const patients = [
//   {
//     id: '1',
//     name: 'John Smith',
//     email: 'john@example.com',
//     joinDate: '6/15/2025',
//     status: 'Active',
//   },
//   {
//     id: '2',
//     name: 'Sarah Johnson',
//     email: 'sarah@example.com',
//     joinDate: '6/15/2025',
//     status: 'Active',
//   },

//   {
//     id: '3',
//     name: 'Michael Brown',
//     email: 'michael@example.com',
//     joinDate: '6/15/2025',
//     status: 'Inactive',
//   },
// ]

interface PatentsProps {
  patients: PatientResponse[]
}

const Patients = ({ patients }: PatentsProps) => {
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900">
            Patient Management
          </h2>
          <p className="text-gray-600 mt-1">4 registered patients</p>
        </div>
        <div className="flex items-center gap-3 ">
          <Input
            type="search"
            icon={<SearchIcon className="w-5 h-5" />}
            placeholder="Search patients..."
            className="w-64"
          />
        </div>
      </div>
      <div className="mt-9">
        <Table patients={patients} />
      </div>
    </div>
  )
}

export default Patients
