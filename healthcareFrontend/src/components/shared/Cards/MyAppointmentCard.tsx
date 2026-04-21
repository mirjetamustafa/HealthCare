import Calendar from '../../../assets/calendar.svg?react'
import Clock from '../../../assets/oclock.svg?react'
import Button from '../Button/Button'

export type AppointmentStatus =
  | 'Approved'
  | 'Pending'
  | 'Cancelled'
  | 'Completed'
  | 'Upcoming'

type AppointmentCardProps = {
  name: string
  category: string
  date: string
  time: string
  reason: string
  status: AppointmentStatus
  notes?: string
  onCancel: (id: string) => void
  id: string
}

const MyAppointmentCard = ({
  name,
  category,
  date,
  time,
  reason,
  status,
  id,
  onCancel,
}: AppointmentCardProps) => {
  return (
    <div className=" w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6  my-6">
      <div className="flex justify-between mb-5">
        <div className="gap-2.5 flex flex-col">
          <div className="">
            <h3 className=" font-semibold">{name}</h3>
            <p className="text-blue-500 text-sm capitalize">{category}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="text-teal-500 w-4 h-4 mt-0.5" />
            <span className="text-sm text-gray-600">{date}</span>
            <p className="flex items-center gap-2">
              <Clock className="text-teal-500 w-4 h-4 mt-0.5" />
              <span className="text-sm text-gray-600">{time}</span>
            </p>
          </div>
          <p className="font-semibold flex items-center gap-2">
            Reason:
            <span className="font-normal text-gray-700 text-sm">{reason}</span>
          </p>
        </div>

        <div className="flex  items-start gap-3">
          {status === 'Upcoming' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
              Upcoming
            </span>
          )}

          {status === 'Approved' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
              Approved
            </span>
          )}

          {status === 'Completed' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
              Completed
            </span>
          )}

          {status === 'Cancelled' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
              Cancelled
            </span>
          )}

          {status === 'Upcoming' && (
            <div className="flex gap-2 mt-5 ml-2 md:ml-5">
              <Button variant="default" className="text-sm hover:bg-gray-50">
                Reschedule
              </Button>

              <Button
                onClick={() => onCancel(id)}
                variant="cancel"
                className=""
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyAppointmentCard
