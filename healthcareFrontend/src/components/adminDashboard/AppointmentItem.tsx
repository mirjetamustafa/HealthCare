import type { AppointmenResponse } from '../../api/BookAppointment/bookAppointment.types'

type AppointmentStatus = 'Approved' | 'Pending' | 'Cancelled' | 'Completed'

type AppointmentItemProps = AppointmenResponse

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

const AppointmentItem = ({
  firstName,
  lastName,
  doctorName,
  department,
  status,
}: AppointmentItemProps) => {
  const safeStatus = getStatus(status)
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 ">
      <div>
        <h4 className="font-semibold text-gray-900">
          {firstName} {lastName}
        </h4>
        <p className="text-sm text-gray-500 ">
          {doctorName} •{' '}
          {department?.charAt(0).toUpperCase() + department?.slice(1)}
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[safeStatus]}`}
      >
        {safeStatus}
      </span>
    </div>
  )
}

export default AppointmentItem
