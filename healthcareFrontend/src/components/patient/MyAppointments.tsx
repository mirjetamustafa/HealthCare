import { Link } from 'react-router'
import MyAppointmentCard from '../shared/Cards/MyAppointmentCard'
import Button from '../shared/Button/Button'

const MyAppointments = () => {
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900">My Appointments</h2>
          <p className="text-gray-600 mt-1">
            View and manage your scheduled appointments
          </p>
        </div>
        <Link to="/appointments">
          <Button variant="active" className="">
            Book New Appointment
          </Button>
        </Link>
      </div>

      <MyAppointmentCard
        name="John Smith"
        category="General Checkup"
        date="Sunday, January 25, 2026"
        time="9:00 AM"
        reason="Annual checkup"
        status="Completed"
      />

      <MyAppointmentCard
        name="Sarah Johnson"
        category="Follow-up Consultation"
        date="Sunday, January 25, 2026"
        time="10:00 AM"
        reason="Follow-up consultation"
        status="Upcoming"
      />
      <MyAppointmentCard
        name="Sarah Johnson"
        category="Routine Checkup"
        date="Sunday, January 25, 2026"
        time="10:00 AM"
        reason="Follow-up consultation"
        status="Cancelled"
      />
    </div>
  )
}

export default MyAppointments
