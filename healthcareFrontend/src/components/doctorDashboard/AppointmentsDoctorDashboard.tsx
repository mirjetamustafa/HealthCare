import AppointmentCard from '../shared/Cards/AppointmentCard'

const AppointmentsDoctorDashboard = () => {
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-900">Your Appointments</h2>
        <p className="text-gray-600 mt-1">
          Manage your upcoming appointments and patient consultations
        </p>
      </div>
      <div className="mt-9">
        <AppointmentCard
          name="John Smith"
          email="john@example.com"
          date="Sunday, January 25, 2026"
          time="9:00 AM"
          reason="Annual checkup"
          status="Pending"
        />

        <AppointmentCard
          name="Sarah Johnson"
          email="sarah@example.com"
          date="Sunday, January 25, 2026"
          time="10:00 AM"
          reason="Follow-up consultation"
          status="Approved"
          notes="Patient recovering well from previous treatment."
        />
        <AppointmentCard
          name="Sarah Johnson"
          email="sarah@example.com"
          date="Sunday, January 25, 2026"
          time="10:00 AM"
          reason="Follow-up consultation"
          status="Cancelled"
        />
      </div>
    </div>
  )
}

export default AppointmentsDoctorDashboard
