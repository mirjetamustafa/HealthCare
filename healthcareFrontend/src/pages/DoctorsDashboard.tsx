import { useState } from 'react'
import DoctorHeader from '../components/doctorDashboard/DoctorHeader'
import Button from '../components/shared/Button/Button'
import Calendar from '../assets/calendar.svg?react'
import Oclock from '../assets/oclock.svg?react'
import Settings from '../assets/settings.svg?react'
import AppointmentsDoctorDashboard from '../components/doctorDashboard/AppointmentsDoctorDashboard'
import ProfileDoctorDashboard from '../components/doctorDashboard/ProfileDoctorDashboard'
import AvailabilityDoctorDashboard from '../components/doctorDashboard/AvailabilityDoctorDashboard'

const DoctorsDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments')

  return (
    <div className="py-20 bg-gray-50">
      <DoctorHeader />
      <div className="flex gap-5 bg-white border-b border-gray-200 px-20 p-1 overflow-x-auto">
        <Button
          variant="tab"
          onClick={() => setActiveTab('appointments')}
          className={`${activeTab === 'appointments' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Calendar className="w-4 h-4" />
          Appointments
          <span className="bg-red-400 text-white rounded-full px-2 py-1 text-xs">
            2
          </span>
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('availability')}
          className={`${activeTab === 'availability' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Oclock className="w-4 h-4" />
          Availability
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('profile')}
          className={`${activeTab === 'profile' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Settings className="w-4 h-4" />
          Profile
        </Button>
      </div>

      <div className="bg-gray-50">
        {activeTab === 'appointments' && (
          <div>
            {' '}
            <AppointmentsDoctorDashboard />{' '}
          </div>
        )}
        {activeTab === 'availability' && (
          <div>
            {' '}
            <AvailabilityDoctorDashboard />{' '}
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            {' '}
            <ProfileDoctorDashboard />{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorsDashboard
