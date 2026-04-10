import { useAppointments } from '../hook/useAppointments'
import { useDoctorAppointments } from '../hook/useDoctorAppointments'
import AppointmentCard from '../shared/Cards/AppointmentCard'

const AppointmentsDoctorDashboard = () => {
  const { appointments, fetchAppointments } = useDoctorAppointments()

  const { handleApprove, handleCancel, handleComplete } =
    useAppointments(fetchAppointments)

  console.log(appointments)
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-900">Your Appointments</h2>
        <p className="text-gray-600 mt-1">
          Manage your upcoming appointments and patient consultations
        </p>
      </div>
      <div className="mt-9">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            id={appointment._id}
            name={appointment.firstName + ' ' + appointment.lastName}
            email={appointment.email}
            date={appointment.date}
            time={appointment.time}
            reason={appointment.reason}
            status={appointment.status}
            onApprove={handleApprove}
            onCancel={handleCancel}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  )
}

export default AppointmentsDoctorDashboard
