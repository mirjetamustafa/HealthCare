import { statesService } from '../shared/statesService'

const AboutService = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 justify-items-center content-center h-70 gap-6 bg-[#0066CC] text-white p-9">
      {statesService.map(({ value, label }) => (
        <div key={label} className="text-center mt-9">
          <h3 className="text-2xl md:text-5xl font-bold"> {value} </h3>
          <p className="text-gray-200 text-lg"> {label} </p>
        </div>
      ))}
    </section>
  )
}

export default AboutService
