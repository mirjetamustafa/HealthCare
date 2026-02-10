import type { ComponentType, SVGProps } from 'react'

type CardStatus =
  | 'Cardiology'
  | 'Pediatrics'
  | 'Orthopedics'
  | 'Neurology'
  | 'General Medicine'
  | 'Emergency'
  | 'Laboratory'
  | 'Radiology'

type CardsProps = {
  title: string
  description: string
  status: CardStatus
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const statusStyle: Record<CardStatus, string> = {
  Cardiology: 'bg-red-100 text-red-600',
  Pediatrics: 'bg-blue-100 text-blue-600',
  Orthopedics: 'bg-green-100 text-green-600',
  Neurology: 'bg-purple-100 text-purple-600',
  'General Medicine': 'bg-gray-100 text-gray-600',
  Emergency: 'bg-orange-100 text-orange-600',
  Laboratory: 'bg-yellow-100 text-yellow-600',
  Radiology: 'bg-indigo-100 text-indigo-600',
}

const MedicalCard = ({
  title,
  description,
  status,
  icon: Icon,
}: CardsProps) => {
  return (
    <div className=" bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      {/* Icon Badge */}
      <div className="flex items-start gap-3 mb-4">
        <div className=" p-3 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="">
          <span
            className={`inline-block mb-1 px-3 py-1 text-xs font-semibold rounded-full ${statusStyle[status]}`}
          >
            {status}
          </span>
          <h3 className="text-lg font-semibold text-gray-900  my-2">
            {' '}
            {title}{' '}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {' '}
            {description}{' '}
          </p>
        </div>
      </div>
      {/* Title */}

      {/* Description */}
    </div>
  )
}

export default MedicalCard
