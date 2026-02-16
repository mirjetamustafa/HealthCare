import OurMedicareServices from '../components/services/OurMedicareServices'
import ServiceFilter from '../components/services/ServiceFilter'
import ShowingServices from '../components/services/ShowingServices'

const Services = () => {
  return (
    <div>
      <OurMedicareServices />
      <ServiceFilter />
      <ShowingServices />
    </div>
  )
}

export default Services
