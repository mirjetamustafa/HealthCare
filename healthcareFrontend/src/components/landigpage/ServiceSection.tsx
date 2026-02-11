import { statesService } from '../shared/statesService'

const ServiceSection = () => {
  return (
    <section className="grid grid-cols-3 md:grid-cols-4 justify-items-center gap-6 p-9">
      {statesService.map(({ value, label }) => (
        <div key={label} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold"> {value} </h3>
          <p className="text-gray-400 text-sm"> {label} </p>
        </div>
      ))}
    </section>
  )
}

export default ServiceSection
