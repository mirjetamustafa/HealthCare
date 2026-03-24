import CallUsSection from '../components/landigpage/CallUsSection'
import HeroMedicalSection from '../components/landigpage/HeroMedicalSection'
import HeroSection from '../components/landigpage/HeroSection'
import HeroSectionInfo from '../components/landigpage/HeroSectionInfo'
import ServiceSection from '../components/landigpage/ServiceSection'

const Landignpage: React.FC = () => {
  return (
    <main className="">
      <HeroSection />
      <HeroMedicalSection />
      <HeroSectionInfo />
      <CallUsSection />
      <ServiceSection />
    </main>
  )
}

export default Landignpage
