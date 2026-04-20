import Input from '../shared/Input/Input'
import Textarea from '../shared/Textarea/Textarea'
import User from '../../assets/user.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import Clock from '../../assets/oclock.svg?react'
import Button from '../shared/Button/Button'
import type { AppointmentInput } from '../../api/BookAppointment/bookAppointment.types'
import { useBookAppointment } from '../hook/useBookAppointment'

interface YourDetailsProps {
  setStep: (step: number) => void
  appointmentData: AppointmentInput
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentInput>>
  handleSubmit: () => void
}

const YourDetails = ({
  setStep,
  appointmentData,
  setAppointmentData,
  handleSubmit,
}: YourDetailsProps) => {
  const { isLoggedIn } = useBookAppointment()
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            value={appointmentData.firstName}
            onChange={(e) =>
              setAppointmentData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={appointmentData.lastName}
            onChange={(e) =>
              setAppointmentData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />
        </div>
        {!isLoggedIn && (
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            value={appointmentData.email}
            onChange={(e) =>
              setAppointmentData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        )}

        <Input
          label="Phone Number"
          name="phoneNumber"
          type="text"
          placeholder="(123) 44 456 789"
          value={appointmentData.phoneNumber}
          onChange={(e) =>
            setAppointmentData((prev) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
        />

        <Textarea
          name="reasonForVisit"
          label="Reason for visit"
          placeholder="Berifly describe your symptoms or reason for the appointment"
          rows={5}
          value={appointmentData.reasonForVisit}
          onChange={(e) =>
            setAppointmentData((prev) => ({
              ...prev,
              reasonForVisit: e.target.value,
            }))
          }
        />
        <p className="text-xs text-gray-500 -mt-3">
          Optional but helps the doctor prepare
        </p>
      </form>
      <div className="border border-gray-200 rounded-lg mt-5 p-4">
        <h4 className="font-semibold text-gray-900 mb-3">
          Appointment Summary
        </h4>
        <p className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 text-teal-500" />
          <span className="text-gray-600">
            {' '}
            {`${appointmentData.doctorFirstName} ${appointmentData.doctorLastName}`.trim() ||
              'No doctor selected'}
          </span>
        </p>

        <p className="flex items-center gap-2 text-sm mt-2">
          <Calendar className="w-4 h-4 text-teal-500" />
          <span className="text-gray-600">
            {appointmentData.date
              ? new Date(appointmentData.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'No date selected'}
          </span>
        </p>

        <p className="flex items-center gap-2 text-sm mt-2">
          <Clock className="w-4 h-4 text-teal-500" />
          <span className="text-gray-600">{appointmentData.time}</span>
        </p>
      </div>

      <div className="flex gap-3 mt-7">
        <Button onClick={() => setStep(2)} variant="default" className="w-full">
          Back
        </Button>
        <Button
          variant="active"
          type="button"
          onClick={handleSubmit}
          className="w-full"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  )
}

export default YourDetails
