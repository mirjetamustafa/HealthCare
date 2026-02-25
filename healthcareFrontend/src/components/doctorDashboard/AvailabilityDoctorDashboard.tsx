import { useState } from 'react'
import type { Availability, Day } from '../shared/doctorAvailability/types'
import DayRow from '../shared/doctorAvailability/DayRow'

const days: Day[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const AvailabilityDoctorDashboard: React.FC = () => {
  const [availability, setAvailability] = useState<Availability>(
    days.reduce((acc, day) => {
      acc[day] = {
        enabled: day !== 'Saturday' && day !== 'Sunday',
        from: '09:00',
        to: '17:00',
      }
      return acc
    }, {} as Availability),
  )

  const toggleDay = (day: Day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
      },
    }))
  }

  const changeTime = (day: Day, field: 'from' | 'to', value: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }))
  }

  const handleSave = () => {
    console.log('Saved:', availability)
  }

  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="pb-9">
        <h2 className="text-2xl font-bold text-gray-900">
          Set Your Availability
        </h2>
        <p className="text-gray-600 mt-1">
          Configure your working hours for each day of the week
        </p>
      </div>

      <div className=" p-6 bg-white rounded-xl shadow">
        <div className="space-y-4">
          {days.map((day) => (
            <DayRow
              key={day}
              day={day}
              data={availability[day]}
              onToggle={() => toggleDay(day)}
              onTimeChange={(field, value) => changeTime(day, field, value)}
            />
          ))}
        </div>
        <button
          onClick={handleSave}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Availability
        </button>
      </div>
    </div>
  )
}

export default AvailabilityDoctorDashboard
