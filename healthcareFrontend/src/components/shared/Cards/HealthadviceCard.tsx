import type { ComponentType, SVGProps } from 'react'

type AdviceProps = {
  title: string
  description: string
  status: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const HealthadviceCard = ({
  title,
  description,
  status,
  icon: Icon,
}: AdviceProps) => {
  return (
    <div className=" bg-white rounded-xl p-6 my-1 shadow-sm hover:shadow-lg transition">
      {/* Icon Badge */}
      <div className="flex items-start gap-3 mb-4">
        <div className=" p-3 rounded-lg bg-emerald-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#00A896]" />
        </div>
        <div className="">
          <span
            className={`inline-block mb-1 uppercase px- py-1 text-xs font-semibold rounded-full text-[#0066CC] }`}
          >
            {status}
          </span>
          <h3 className="text-lg font-semibold text-gray-900"> {title} </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {' '}
            {description}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HealthadviceCard
