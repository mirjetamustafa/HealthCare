import { useEffect, useState } from 'react'
import type { Availability, Day } from '../shared/doctorAvailability/types'
import DayRow from '../shared/doctorAvailability/DayRow'
import { useAuthContext } from '../../lib/AuthContext'
import { getDoctorsById, updateAvailability } from '../../api/User/user'
import { toast } from 'react-toastify'

const days: Day[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const defaultAvailability: Availability = days.reduce((acc, day) => {
  acc[day] = {
    enabled: day !== 'Saturday' && day !== 'Sunday',
    from: '09:00',
    to: '17:00',
  }
  return acc
}, {} as Availability)

const normalizeDay = (d: string): Day | null => {
  const map: Record<string, Day> = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  }
  return map[d] || null
}

const parseSchedule = (scheduleText: string) => {
  const base: any = {
    Monday: { enabled: false, from: '09:00', to: '17:00' },
    Tuesday: { enabled: false, from: '09:00', to: '17:00' },
    Wednesday: { enabled: false, from: '09:00', to: '17:00' },
    Thursday: { enabled: false, from: '09:00', to: '17:00' },
    Friday: { enabled: false, from: '09:00', to: '17:00' },
    Saturday: { enabled: false, from: '09:00', to: '17:00' },
    Sunday: { enabled: false, from: '09:00', to: '17:00' },
  }

  if (!scheduleText) return base

  const daysMap: Record<string, Day> = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  }

  const parts = scheduleText.split(',')

  parts.forEach((p) => {
    const key = p.trim().split(':')[0] // Mon
    const fullDay = daysMap[key]

    if (fullDay) {
      base[fullDay].enabled = true
    }
  })

  return base
}
const AvailabilityDoctorDashboard: React.FC = () => {
  const { user } = useAuthContext()

  const doctorId = user?.id

  const [availability, setAvailability] =
    useState<Availability>(defaultAvailability)

  useEffect(() => {
    if (!doctorId) return

    const fetchAvailability = async () => {
      try {
        const res = await getDoctorsById(doctorId)

        const doctor = res.data

        if (doctor?.schedule) {
          setAvailability(parseSchedule(doctor.schedule))
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchAvailability()
  }, [doctorId])

  const toggleDay = (day: Day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !(prev[day]?.enabled ?? false),
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

  const handleSave = async () => {
    if (!doctorId) return

    try {
      await updateAvailability(doctorId, availability)
      toast.success('Availability saved')
    } catch (err) {
      console.error(err)
      toast.error('Failed to save availability')
    }
  }

  if (!user) return <div>Loading...</div>

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
              data={availability[day] ?? defaultAvailability[day]}
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
