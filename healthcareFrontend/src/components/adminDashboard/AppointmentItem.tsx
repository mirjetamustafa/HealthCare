type Status = 'approved' | 'pending' | 'completed' | 'cancelled'

type AppointmentItemProps = {
  patient: string
  doctor: string
  specialty: string
  status: Status
}

const statusLabel: Record<Status, string> = {
  approved: 'Approved',
  pending: 'Pending',
  completed: 'Completed',
  cancelled: 'Cancelled',
}

const statusStyles: Record<Status, string> = {
  approved: 'bg-blue-100 text-blue-600',
  pending: 'bg-yellow-100 text-yellow-600',
  completed: 'bg-green-100 text-green-600',
  cancelled: 'bg-red-100 text-red-600',
}

const AppointmentItem = ({
  patient,
  doctor,
  specialty,
  status,
}: AppointmentItemProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 ">
      <div>
        <h4 className="font-semibold text-gray-900">{patient}</h4>
        <p className="text-sm text-gray-500">
          {doctor} • {specialty}
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
      >
        {statusLabel[status]}
      </span>
    </div>
  )
}

export default AppointmentItem
