import { useState } from 'react'
import Input from '../shared/Input/Input'
import Button from '../shared/Button/Button'

interface ChooseTimeProps {
  setStep: () => void
}

const ChooseTime = ({ setStep }: ChooseTimeProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const times = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
  ]
  return (
    <div>
      <Input label="Preferred Date" type="date" require />

      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-lg font-medium mb-4">Available Time Slots</h2>
        <div className="grid grid-cols-4 gap-4">
          {times.map((time) => (
            <Button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-3 rounded-lg font-medium transition ${selectedTime === time ? 'bg-[#0066CC] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {' '}
              {time}{' '}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="default" className="w-full" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button variant="active" className="w-full" onClick={() => setStep(3)}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default ChooseTime
