import User from '../../../assets/user.svg?react'
import Pencil from '../../../assets/pencil.svg?react'
import Trash from '../../../assets/trash.svg?react'

export type Patient = {
  id: string
  name: string
  email: string
  joinDate: string
  status: 'Active' | 'Inactive'
}

type Props = {
  patients: Patient[]
}

const Table = ({ patients }: Props) => {
  return (
    <div className="bg-white overflow-auto md:overflow-hidden last:rounded-b-2xl">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Join Date</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {patients.map((patient) => (
            <tr key={patient.id} className="bg-white">
              <td className="px-6 py-4  last:rounded-b-3xl">
                <div className="flex items-center gap-3 ">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium text-gray-900">
                    {patient.name}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">{patient.email}</td>
              <td className="px-6 py-4">{patient.joinDate}</td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    patient.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {patient.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex gap-3 text-gray-500">
                  <Pencil className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                  <Trash className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
