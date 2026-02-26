import type { LabStatus } from './types'

interface Props {
  status: LabStatus
}

const statusStyles: Record<LabStatus, string> = {
  Completed: 'text-xs bg-green-100 text-green-700',
  Processing: 'text-xs bg-blue-100 text-blue-700',
  Pending: 'text-xs bg-yellow-100 text-yellow-700',
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}

export default StatusBadge
