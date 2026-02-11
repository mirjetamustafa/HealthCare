import CallUsSection from '../components/landigpage/CallUsSection'
import HeroMedicalSection from '../components/landigpage/HeroMedicalSection'
import HeroSection from '../components/landigpage/HeroSection'
import HeroSectionInfo from '../components/landigpage/HeroSectionInfo'

const Landignpage: React.FC = () => {
  return (
    <div className="">
      <HeroSection />
      <HeroMedicalSection />
      <HeroSectionInfo />
      <CallUsSection />
    </div>
  )
}

export default Landignpage
