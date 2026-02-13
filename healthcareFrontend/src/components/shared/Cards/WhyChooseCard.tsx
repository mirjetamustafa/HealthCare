import type { ComponentType, SVGProps } from 'react'

type WhyChooseCardProps = {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const WhyChooseCard = ({
  title,
  description,
  icon: Icon,
}: WhyChooseCardProps) => {
  return (
    <div className="text-center bg-white rounded-xl py-6 px-9 shadow-sm">
      <div className="mb-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 mx-auto">
          <Icon className="w-6 h-6 text-[#0066CC]" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 my-2"> {title} </h3>
        <p className="text-sm text-gray-600"> {description} </p>
      </div>
    </div>
  )
}

export default WhyChooseCard
