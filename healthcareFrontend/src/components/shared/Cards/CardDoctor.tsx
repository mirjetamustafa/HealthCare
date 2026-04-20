import type { ElementType } from 'react'

type DoctorProps = {
  name: string
  status: string
  experience: string
  university: string
  schedule: string
  img: string
  children?: React.ReactNode
  experienceIcon?: ElementType
  universityIcon?: ElementType
  scheduleIcon?: ElementType
}

const CardDoctor = ({
  name,
  status,
  experience,
  university,
  schedule,
  img,
  children,
  experienceIcon: ExperienceIcon,
  universityIcon: UniversityIcon,
  scheduleIcon: ScheduleIcon,
}: DoctorProps) => {
  return (
    <div className="grid bg-white rounded-xl  px-5 py-9 shadow-sm hover:shadow-lg transition">
      <div className="grid justify-items-center">
        <img src={img} alt={name} className="rounded-full w-30" />

        <h3 className="text-lg font-semibold text-gray-900 my-2"> {name} </h3>
        <span className=" mb-1 px-3 text-xs font-semibold text-[#0066CC]">
          {status}
        </span>
      </div>

      <div className="flex gap-2 items-center my-2 text-center mx-9">
        {ExperienceIcon && (
          <ExperienceIcon className="w-4 h-4 text-[#00A896]" />
        )}
        <p className="text-sm text-gray-500"> {experience} </p>
      </div>
      <div className="flex items-center gap-2 mx-9">
        {UniversityIcon && (
          <UniversityIcon className="w-4 h-4 text-[#00A896]" />
        )}
        <p className="text-sm text-gray-500"> {university} </p>
      </div>
      <div className="flex gap-2 mx-9 my-2">
        {ScheduleIcon && <ScheduleIcon className="w-4 h-4 text-[#00A896]" />}

        <p className="text-sm text-gray-500"> {schedule} </p>
      </div>
      <div className="border-t border-gray-200  mx-9 my-5"></div>
      <div className="flex justify-center gap-2">{children}</div>
    </div>
  )
}

export default CardDoctor
