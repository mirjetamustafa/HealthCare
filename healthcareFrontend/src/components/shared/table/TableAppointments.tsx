export type Appointments = {
  id: string
  doctor: string
  patient: string
  dateTime: string
  department: string
  status: 'Approved' | 'Pending' | 'Cancelled' | 'Completed'
}

type Props = {
  appointments: Appointments[]
}

const statusStyle = {
  Approved: 'bg-blue-100 text-blue-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-700',
  Completed: 'bg-green-100 text-green-700',
}

const TableAppointments = ({ appointments }: Props) => {
  return (
    <div className="bg-white overflow-auto md:overflow-hidden last:rounded-b-2xl">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th className="px-6 py-4">Patient</th>
            <th className="px-6 py-4">Doctor</th>
            <th className="px-6 py-4">Departament</th>
            <th className="px-6 py-4">Date & Time</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="bg-white">
              <td className="px-6 py-4  last:rounded-b-3xl">
                <span className="font-medium text-gray-900">
                  {appointment.patient}
                </span>
              </td>
              <td className="px-6 py-4">{appointment.doctor}</td>
              <td className="px-6 py-4">{appointment.department}</td>
              <td className="px-6 py-4">{appointment.dateTime}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusStyle[appointment.status]
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableAppointments
