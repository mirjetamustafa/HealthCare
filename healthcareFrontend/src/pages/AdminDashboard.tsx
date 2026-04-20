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
import DoctorsAdminDashboard from '../components/adminDashboard/DoctorsAdminDashboard'
import { usePatient } from '../components/hook/usePatient'
import Input from '../components/shared/Input/Input'
import PasswordField from '../components/shared/PasswordField/PasswordField'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const {
    patients,
    editPatient,
    openPatientModal,
    handleEditPatient,
    handleDelete,
    formData,
    handleChange,
    handleSubmit,
    setOpenPatientModal,
  } = usePatient()

  return (
    <div className="py-20 bg-gray-50">
      <AdminHeader />
      <div className="flex gap-5 bg-white border-b border-gray-200 px-20 p-1 overflow-x-auto">
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
            <Patients
              patients={patients}
              handleDelete={handleDelete}
              handleEdit={(patient) => {
                handleEditPatient(patient)
                setOpenPatientModal(true)
              }}
            />{' '}
          </div>
        )}
        {activeTab === 'doctorsDashboard' && (
          <div>
            {' '}
            <DoctorsAdminDashboard />{' '}
          </div>
        )}
        {activeTab === 'appointmentsDashboard' && (
          <div>
            {' '}
            <Appointment />{' '}
          </div>
        )}
      </div>

      {openPatientModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h2 className="text-xl font-bold mb-4">
              {editPatient ? 'Edit Patient' : 'Add Patient'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />

              <PasswordField
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <PasswordField
                name="confirmPassword"
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="contactNumber"
                type="text"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <Input
                label="Status"
                name="status"
                type="text"
                value={formData.status}
                onChange={handleChange}
              />

              <div className="flex gap-3 mt-4">
                <Button type="submit" variant="active" className="flex-1">
                  {editPatient ? 'Update' : 'Create'}
                </Button>
                <Button
                  type="button"
                  variant="default"
                  className="flex-1"
                  onClick={() => setOpenPatientModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
