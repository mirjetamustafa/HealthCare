import { useState } from 'react'
import AdminHeader from '../components/adminHeader/AdminHeader'
import Button from '../components/shared/Button/Button'
import Chart from '../assets/chart.svg?react'
import User from '../assets/users.svg?react'
import Stethoscope from '../assets/stethoscope.svg?react'
import Calendar from '../assets/calendar.svg?react'
import Overview from '../components/adminDashboard/Overview'
import Patients from '../components/adminDashboard/Patients'

import Appointment from '../components/adminDashboard/Appointment'
import DoctorsDashboard from '../components/adminDashboard/DoctorsDashboard'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  return (
    <div className="py-20 bg-gray-50">
      <AdminHeader />
      <div className="flex gap-5 bg-white border-b border-gray-200 px-20 p-1">
        <Button
          variant="tab"
          onClick={() => setActiveTab('overview')}
          className={`${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Chart className="w-4 h-4" />
          Overview
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('patientsDashboard')}
          className={`${activeTab === 'patientsDashboard' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <User className="w-4 h-4" />
          Patients
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('doctorsDashboard')}
          className={`${activeTab === 'doctorsDashboard' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Stethoscope className="w-4 h-4" />
          Doctors
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('appointmentsDashboard')}
          className={`${activeTab === 'appointmentsDashboard' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Calendar className="w-4 h-4" />
          Appointment
        </Button>
      </div>

      <div className="bg-gray-50">
        {activeTab === 'overview' && (
          <div>
            {' '}
            <Overview />{' '}
          </div>
        )}
        {activeTab === 'patientsDashboard' && (
          <div>
            {' '}
            <Patients />{' '}
          </div>
        )}
        {activeTab === 'doctorsDashboard' && (
          <div>
            {' '}
            <DoctorsDashboard />{' '}
          </div>
        )}
        {activeTab === 'appointmentsDashboard' && (
          <div>
            {' '}
            <Appointment />{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
