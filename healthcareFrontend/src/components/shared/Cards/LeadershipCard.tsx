type LeadershipStatus =
  | 'Chief Executive Officer'
  | 'Chief Medical Officer'
  | 'Director of Patient Experience'
  | 'Chief Operations Officer'

type LeadershipProps = {
  title: string
  description: string
  status: LeadershipStatus
  img: string
}

const LeadershipCard = ({
  title,
  description,
  status,
  img,
}: LeadershipProps) => {
  return (
    <div className="grid justify-items-center bg-white rounded-xl px-2 md:px-15 py-3 md:py-9 shadow-sm hover:shadow-lg transition">
      <img src={img} className="rounded-full w-30" />

      <div className="">
        <h3 className="text-lg font-semibold text-gray-900"> {title} </h3>
        <span className=" mb-1 px-3 text-xs font-semibold text-[#0066CC]">
          {status}
        </span>
        <p className="text-gray-600 text-sm leading-relaxed"> {description} </p>
      </div>
    </div>
  )
}

export default LeadershipCard
