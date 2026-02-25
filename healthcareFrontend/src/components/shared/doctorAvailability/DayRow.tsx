import type React from 'react'
import TimeInput from './TimeInput'
import type { DayAvailability } from './types'

interface DayRowProps {
  day: string
  data: DayAvailability
  onToggle: () => void
  onTimeChange: (field: 'from' | 'to', value: string) => void
}

const DayRow: React.FC<DayRowProps> = ({
  day,
  data,
  onToggle,
  onTimeChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row  md:items-center justify-between gap-3 p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={data.enabled}
          onChange={onToggle}
          className="w-4 h-4"
        />
        <span className="font-medium">{day}</span>
      </div>

      {data.enabled ? (
        <div className="flex items-center w-full md:w-5xl gap-2">
          <TimeInput
            value={data.from}
            onChange={(value) => onTimeChange('from', value)}
          />
          <span>to</span>
          <TimeInput
            value={data.to}
            onChange={(value) => onTimeChange('to', value)}
          />
        </div>
      ) : (
        <span className="text-gray-500">Not Available</span>
      )}
    </div>
  )
}

export default DayRow
