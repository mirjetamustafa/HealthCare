import type { ComponentType, SVGProps } from 'react'

type GetInTouchProps = {
  title: string
  contact: string
  description: string
  description1: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const GetInTouchCard = ({
  title,
  contact,
  description,
  description1,
  icon: Icon,
}: GetInTouchProps) => {
  return (
    <div className="flex items-start gap-3 py-5">
      <div className=" p-3 rounded-lg bg-blue-50 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#0066CC]" />
      </div>
      <div className="">
        <span className="font-bold text-gray-700">{title}</span>
        <h3 className="text-sm text-gray-600">{contact}</h3>
        <p className="text-gray-500 text-sm"> {description} </p>
        <p className="text-gray-500 text-sm"> {description1} </p>
      </div>
    </div>
  )
}

export default GetInTouchCard
