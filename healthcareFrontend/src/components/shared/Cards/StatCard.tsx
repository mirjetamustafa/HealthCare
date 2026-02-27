import type { ComponentType, SVGProps } from 'react'

type StatCardProps = {
  title: string
  value: string | number
  change: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  iconBg: string
}

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
}: StatCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <p className="text-xs mt-2 text-green-500">{change}</p>
    </div>
  )
}

export default StatCard
