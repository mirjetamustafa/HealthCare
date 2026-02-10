import MedicalCard from '../shared/Cards/MedicalCard'
import Heart from '../../assets/heart.svg?react'
import Activity from '../../assets/activity.svg?react'
import HeartPulse from '../../assets/heartPulse.svg?react'
import Baby from '../../assets/baby.svg?react'
import RightArrow from '../../assets/rightArrow.svg?react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button/Button'

const HeroMedicalSection = () => {
  return (
    <div className="mt-20 grid justify-items-center mb-9">
      <h1 className="text-4xl font-bold">Out Medical Services</h1>
      <p className="text-gray-500 text-md md:text-xl text-center mt-3">
        Comprehensive healthcare services delivered by experienced specialists
        using <br className="hidden md:block" /> the latest medical technology.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-[50px]">
        <MedicalCard
          title="Heart Health Checkup"
          description="Comprehensive cardiovascular assessment including ECG, blood pressure monitoring, and cholesterol screening."
          status="Cardiology"
          icon={Heart}
        />
        <MedicalCard
          title="ECG Testing"
          description="Electrocardiogram testing to monitor heart rhythm and detect cardiac abnormalities."
          status="Cardiology"
          icon={Activity}
        />
        <MedicalCard
          title="Cardiac Rehabilitation"
          description="Supervised exercise and lifestyle modification programs for heart disease recovery."
          status="Cardiology"
          icon={HeartPulse}
        />
        <MedicalCard
          title="Child Wellness Exams"
          description="Regular health checkups for children including growth monitoring and developmental assessments."
          status="Pediatrics"
          icon={Baby}
        />
      </div>
      <Link to="/services">
        <Button variant="default">
          View All Services <RightArrow className="w-4 h-4 mt-1" />
        </Button>
      </Link>
    </div>
  )
}

export default HeroMedicalSection
