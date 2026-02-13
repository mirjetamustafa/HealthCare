import type { ComponentType, SVGProps } from 'react'

type CardAboutProps = {
  title: string
  description: string
  status: 'our mission' | 'our vision'
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const statusStyle = {
  'our mission': 'border-l-[#0066CC]',
  'our vision': 'border-l-[#00A896]',
}

const iconStyle = {
  'our mission': 'bg-[#0066CC]',
  'our vision': 'bg-[#00A896]',
}

const CardAbout = ({
  title,
  description,
  status,
  icon: Icon,
}: CardAboutProps) => {
  return (
    <div
      className={`bg-white shadow-md rounded-xl border-l-4 p-7 my-5  mx-2 md:mx-10 ${statusStyle[status]}`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`mt-5 md:mt-0 p-3 rounded-lg flex items-center justify-center ${iconStyle[status]}`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-gray-900  my-2"> {title} </h3>
          <p className="text-gray-600 text- leading-relaxed max-w-xl">
            {' '}
            {description}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardAbout
