import Stethoscope from '../../../assets/stethoscope.svg?react'
import Pencil from '../../../assets/pencil.svg?react'
import Trash from '../../../assets/trash.svg?react'
import type { DoctorResponse } from '../../../api/User/user.types'
import Button from '../Button/Button'

//

type TableDoctors = {
  doctors: DoctorResponse[]
  onDeleteDoctor: (id: string) => void
  handleEdit: (doctor: DoctorResponse | null) => void
}

const TableDoctor = ({ doctors, onDeleteDoctor, handleEdit }: TableDoctors) => {
  return (
    <div className="bg-white overflow-auto md:overflow-hidden last:rounded-b-2xl">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-5 py-4">Departament</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {doctors.map((doctor) => {
            const isActive = doctor.status === 'Active'

            return (
              <tr key={doctor._id} className="bg-white">
                <td className="px-6 py-4  last:rounded-b-3xl">
                  <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-teal-500" />
                    </div>
                    <span className="font-medium text-gray-900">
                      {doctor.firstName} {doctor.lastName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">{doctor.email}</td>
                <td className="px-6 py-4">{doctor.department}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isActive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {doctor.status || 'Inactive'}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3 text-gray-500">
                    <Button variant="btn" onClick={() => handleEdit(doctor)}>
                      <Pencil className="w-4 h-4 hover:text-blue-600" />
                    </Button>
                    <Button
                      variant="btn"
                      onClick={() => onDeleteDoctor(doctor._id)}
                    >
                      <Trash className="w-4 h-4 hover:text-blue-600" />
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableDoctor
