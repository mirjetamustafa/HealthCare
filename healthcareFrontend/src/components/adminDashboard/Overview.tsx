import StatCard from '../shared/Cards/StatCard'
import UserIcon from '../../assets/users.svg?react'
import DoctorIcon from '../../assets/stethoscope.svg?react'
import CalendarIcon from '../../assets/calendar.svg?react'
import ReportIcon from '../../assets/tredingUp.svg?react'
import AppointmentItem from './AppointmentItem'
import HealthItem from './HealthItem'

const appointments = [
  {
    patient: 'John Smith',
    doctor: 'Dr. Emily Rodriguez',
    specialty: 'Cardiology',
    status: 'approved',
  },
  {
    patient: 'Sarah Johnson',
    doctor: 'Dr. James Williams',
    specialty: 'Neurology',
    status: 'pending',
  },
  {
    patient: 'Michael Brown',
    doctor: 'Dr. Emily Rodriguez',
    specialty: 'Cardiology',
    status: 'completed',
  },
  {
    patient: 'Emily Davis',
    doctor: 'Dr. James Williams',
    specialty: 'Neurology',
    status: 'cancelled',
  },
] as const

const healthData = [
  {
    label: 'Server Status',
    value: 'Operational',
    variant: 'success',
  },
  {
    label: 'Database',
    value: 'Healthy',
    variant: 'success',
  },
  {
    label: 'API Services',
    value: 'All Running',
    variant: 'success',
  },
  {
    label: 'Backup Status',
    value: 'Last: 2h ago',
    variant: 'info',
  },
] as const

const Overview = () => {
  return (
    <div className="py-5 md:py-13 px-5 md:px-20 mx-9">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value="1,234"
          change="+12%"
          icon={UserIcon}
          iconBg="bg-blue-500"
        />
        <StatCard
          title="Total Doctors"
          value="56"
          change="+5%"
          icon={DoctorIcon}
          iconBg="bg-green-500"
        />
        <StatCard
          title="Appointments Today"
          value="45"
          change="+3%"
          icon={CalendarIcon}
          iconBg="bg-yellow-500"
        />
        <StatCard
          title="Pending Reports"
          value="8"
          change="-2%"
          icon={ReportIcon}
          iconBg="bg-red-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
        <div className="bg-white rounded-2xl shadow-xs p-5">
          <h4 className="text-md md:text-lg text-gray-900 mb-4 font-semibold">
            Recent Appointments
          </h4>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <AppointmentItem key={index} {...appointment} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xs p-5">
          <h2 className="text-lg font-semibold mb-4">System Health</h2>
          <div className="space-y-5">
            {healthData.map((item, index) => (
              <HealthItem
                key={index}
                label={item.label}
                value={item.value}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
