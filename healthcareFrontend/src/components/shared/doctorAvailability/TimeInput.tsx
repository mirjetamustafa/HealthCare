import type React from 'react'

interface TimeInputProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange, disabled }) => {
  return (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="w-auto md:w-full border border-gray-200 rounded-md p-3 disabled:opacity-50"
    />
  )
}

export default TimeInput
