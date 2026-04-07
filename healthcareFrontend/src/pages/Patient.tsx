import PatientHeader from '../components/patient/PatientHeader'
import Button from '../components/shared/Button/Button'
import Calendar from '../assets/calendar.svg?react'
import ClipBoard from '../assets/clipBoardList.svg?react'
import FileText from '../assets/fileText.svg?react'
import { useState } from 'react'
import PatientOverview from '../components/patient/PatientOverview'
import MyAppointments from '../components/patient/MyAppointments'
import MedicalHistory from '../components/patient/MedicalHistory'

const Patient = () => {
  const [activeTab, setActiveTab] = useState('myOverview')

  return (
    <div className="py-20 bg-gray-50">
      <PatientHeader />
      <div className="flex gap-5 bg-white border-b border-gray-200 px-20 p-1 overflow-x-auto">
        <Button
          variant="tab"
          onClick={() => setActiveTab('myOverview')}
          className={`${activeTab === 'myOverview' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <ClipBoard className="w-4 h-4" />
          Overview
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('myAppointments')}
          className={`${activeTab === 'myAppointments' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <Calendar className="w-4 h-4" />
          My Appointments
          <span className="bg-[#0066CC] text-white rounded-full px-2 py-1 text-xs">
            2
          </span>
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveTab('medicalHistory')}
          className={`${activeTab === 'medicalHistory' ? 'border-b-2 border-blue-600 text-blue-600 hover:text-blue-700 ' : 'text-gray-600 hover:text-gray-800 '}`}
        >
          <FileText className="w-4 h-4" />
          Medical History
        </Button>
      </div>

      <div className="bg-gray-50">
        {activeTab === 'myOverview' && (
          <div>
            {' '}
            <PatientOverview setActiveTab={setActiveTab} />{' '}
          </div>
        )}
        {activeTab === 'myAppointments' && (
          <div>
            {' '}
            <MyAppointments />{' '}
          </div>
        )}
        {activeTab === 'medicalHistory' && (
          <div>
            {' '}
            <MedicalHistory />{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default Patient
