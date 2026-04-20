import type { AppointmenResponse } from '../../../api/BookAppointment/bookAppointment.types'

type AppointmentStatus = 'Approved' | 'Pending' | 'Cancelled' | 'Completed'

type Props = {
  appointments: AppointmenResponse[]
}

const statusStyle: Record<AppointmentStatus, string> = {
  Approved: 'bg-blue-100 text-blue-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-700',
  Completed: 'bg-green-100 text-green-700',
}

const getStatus = (status: string): AppointmentStatus => {
  if (
    status === 'Approved' ||
    status === 'Pending' ||
    status === 'Cancelled' ||
    status === 'Completed'
  ) {
    return status
  }

  return 'Pending'
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
          {appointments.map((appointment) => {
            const status = getStatus(appointment.status)
            return (
              <tr key={appointment._id} className="bg-white">
                <td className="px-6 py-4  last:rounded-b-3xl">
                  <span className="font-medium text-gray-900">
                    {appointment.firstName} {appointment.lastName}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {appointment.doctorFirstName} {appointment.doctorLastName}
                </td>
                <td className="px-6 py-4  capitalize">
                  {appointment.department}
                </td>
                <td className="px-6 py-4">
                  {appointment.date} at {appointment.time}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyle[status]
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableAppointments
