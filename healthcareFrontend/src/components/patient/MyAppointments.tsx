import { Link } from 'react-router'
import MyAppointmentCard from '../shared/Cards/MyAppointmentCard'
import Button from '../shared/Button/Button'

import { useAppointments } from '../hook/useAppointments'
import { useBookAppointment } from '../hook/useBookAppointment'

const MyAppointments = () => {
  const { appointments } = useBookAppointment()
  const { handleCancel } = useAppointments()

  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900">My Appointments</h2>
          <p className="text-gray-600 mt-1">
            View and manage your scheduled appointments
          </p>
        </div>
        <Link to="/bookAppointment">
          <Button variant="active" className="">
            Book New Appointment
          </Button>
        </Link>
      </div>

      {appointments.map((appointment) => (
        <MyAppointmentCard
          key={appointment._id}
          id={appointment._id}
          name={`Dr. ${appointment.doctorFirstName} ${appointment.doctorLastName}`}
          category={appointment.department}
          date={appointment.date}
          time={appointment.time}
          reason={appointment.reasonForVisit}
          status={appointment.status}
          onCancel={handleCancel}
        />
      ))}
    </div>
  )
}

export default MyAppointments
