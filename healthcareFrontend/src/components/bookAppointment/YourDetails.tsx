import Input from '../shared/Input/Input'
import Textarea from '../shared/Textarea/Textarea'
import User from '../../assets/user.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import Clock from '../../assets/oclock.svg?react'
import Button from '../shared/Button/Button'

interface YourDetailsProps {
  setStep: () => void
}

const YourDetails = ({ setStep }: YourDetailsProps) => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
        />

        <Input
          label="Phone Number"
          name="contactNumber"
          type="text"
          placeholder="(123) 44 456 789"
        />

        <Textarea
          label="Reason for visit"
          placeholder="Berifly describe your symptoms or reason for the appointment"
          rows={5}
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
          <span className="text-gray-600">Dr. Michael Chen</span>
        </p>

        <p className="flex items-center gap-2 text-sm mt-2">
          <Calendar className="w-4 h-4 text-teal-500" />
          <span className="text-gray-600">Thursday, March 19, 2026</span>
        </p>

        <p className="flex items-center gap-2 text-sm mt-2">
          <Clock className="w-4 h-4 text-teal-500" />
          <span className="text-gray-600">9:00 AM</span>
        </p>
      </div>

      <div className="flex gap-3 mt-7">
        <Button onClick={() => setStep(2)} variant="default" className="w-full">
          Back
        </Button>
        <Button variant="active" className="w-full">
          Confirm Booking
        </Button>
      </div>
    </div>
  )
}

export default YourDetails
