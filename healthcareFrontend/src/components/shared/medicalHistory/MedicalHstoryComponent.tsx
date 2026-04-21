import CheckIcon from '../../../assets/stethoscope.svg?react'
import ClipboardIcon from '../../../assets/clipBoardList.svg?react'
import PillIcon from '../../../assets/pill.svg?react'
import FileIcon from '../../../assets/fileText.svg?react'
import CalendarIcon from '../../../assets/calendar.svg?react'
import type { HistoryType, MedicalHistoryItem } from './types'

interface Props {
  data: MedicalHistoryItem[]
}

const iconMap: Record<HistoryType, React.ReactNode> = {
  checkup: <CheckIcon className="w-5 h-5 text-blue-600 mt-4 ml-3.5" />,
  condition: <ClipboardIcon className="w-5 h-5 text-red-600  mt-3.5 ml-3.5" />,
  medication: <PillIcon className="w-5 h-5 text-green-600 mt-3.5 ml-3.5" />,
  test: <FileIcon className="w-5 h-5 text-purple-600 mt-4 ml-3.5" />,
  consultation: <CheckIcon className="w-5 h-5 text-blue-600 mt-3 ml-3.5" />,
}

const bgMap: Record<HistoryType, string> = {
  checkup: 'bg-blue-100',
  condition: 'bg-red-100',
  medication: 'bg-green-100',
  test: 'bg-purple-100',
  consultation: 'bg-blue-100',
}

const MedicalHstoryComponent: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-8">Medical History</h2>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200" />

          <div className="space-y-10">
            {data.map((item) => (
              <div key={item.id} className="relative flex gap-6">
                {/* icon circle */}
                <div
                  className={`relative z-10 items-center justify-center w-12 h-12 rounded-full ${bgMap[item.type]}`}
                >
                  {iconMap[item.type]}
                </div>

                {/* Content */}

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                      <p className="text-gray-500 mt-2 text-sm">
                        Dr. {item.doctor}{' '}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <CalendarIcon className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalHstoryComponent
