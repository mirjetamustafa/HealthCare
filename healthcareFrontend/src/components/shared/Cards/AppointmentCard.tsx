import Calendar from '../../../assets/calendar.svg?react'
import Clock from '../../../assets/oclock.svg?react'
import Check from '../../../assets/circleCheckBig.svg?react'
import Xcircle from '../../../assets/xCircle.svg?react'
import FileText from '../../../assets/fileText.svg?react'

export type AppointmentStatus = 'Pending' | 'Approved' | 'Cancelled'

type AppointmentCardProps = {
  name: string
  email: string
  date: string
  time: string
  reason: string
  status: AppointmentStatus
  notes?: string
}

const AppointmentCard = ({
  name,
  email,
  date,
  time,
  reason,
  status,
  notes,
}: AppointmentCardProps) => {
  return (
    <div className=" w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6  my-6">
      <div className="flex justify-between mb-5">
        <div className="gap-2.5 flex flex-col">
          <div className="">
            <h3 className=" font-semibold">{name}</h3>
            <p className="text-gray-500 text-sm">{email}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="text-teal-500 w-4 h-4 mt-0.5" />
            <span className="text-sm text-gray-600">{date}</span>
          </div>
          <p className="font-semibold flex items-center gap-2">
            Reason:
            <span className="font-normal text-gray-700 text-sm">{reason}</span>
          </p>
        </div>

        <p className="flex items-center gap-2">
          <Clock className="text-teal-500 w-4 h-4 mt-0.5" />
          <span className="text-sm text-gray-600">{time}</span>
        </p>

        <div className="flex  items-start gap-3">
          {status === 'Pending' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
              Pending
            </span>
          )}

          {status === 'Approved' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
              Approved
            </span>
          )}

          {status === 'Cancelled' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
              Cancelled
            </span>
          )}

          {status === 'Pending' && (
            <div className="flex flex-col gap-2 mt-5 ml-5">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Check size={16} />
                Approve
              </button>

              <button className="border border-gray-200 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <Xcircle size={16} />
                Cancel
              </button>

              <button className="border border-gray-200 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <FileText size={16} />
                Add Notes
              </button>
            </div>
          )}

          {status === 'Approved' && (
            <div className="flex justify-items-center gap-4 mt-9 ml-5">
              <button className="border border-gray-200 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <FileText size={16} />
                Edit Notes
              </button>
            </div>
          )}

          {status === 'Cancelled' && (
            <div className="flex justify-items-center gap-4 mt-9 ml-5">
              <button className="border border-gray-200 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <FileText size={16} />
                Add Notes
              </button>
            </div>
          )}
        </div>
      </div>

      {notes && (
        <div className="w-[86%] bg-gray-50 rounded-lg p-4 text-gray-700">
          <p className="font-bold text-gray-600 flex gap-2">
            Notes:
            <span className="font-normal">{notes}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default AppointmentCard
