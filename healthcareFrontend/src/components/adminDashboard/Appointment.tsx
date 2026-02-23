import TableAppointments from '../shared/table/TableAppointments'

const appointments = [
  {
    id: '1',
    patient: 'John Smith',
    doctor: 'Dr. Emily Rodriguez',
    department: 'Cardiology',
    dateTime: '2/5/2026 at 9:00 AM',
    status: 'Approved',
  },
  {
    id: '2',
    patient: 'Sarah Johnson',
    doctor: 'Dr. James Williams',
    department: 'Neurology',
    dateTime: '2/5/2026 at 10:00 AM',
    status: 'Pending',
  },
  {
    id: '3',
    patient: 'Michael Brown',
    doctor: 'Dr. Emily Rodriguez',
    department: 'Orthopedics',
    dateTime: '2/5/2026 at 2:00 AM',
    status: 'Completed',
  },
  {
    id: '4',
    patient: 'Emily Davis',
    doctor: '	Dr. James Williams',
    department: 'Neurology',
    dateTime: '2/5/2026 at 2:00 AM',
    status: 'Cancelled',
  },
]

const Appointment = () => {
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      {' '}
      <div className="">
        <h2 className="text-2xl font-bold text-gray-900">All Appointments</h2>
        <p className="text-gray-600 mt-1">
          View and manage system-wide appointments
        </p>
      </div>
      <div className="mt-9">
        <TableAppointments appointments={appointments} />
      </div>
    </div>
  )
}

export default Appointment
