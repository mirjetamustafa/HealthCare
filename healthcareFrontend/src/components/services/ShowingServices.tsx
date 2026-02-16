import MedicalCard from '../shared/Cards/MedicalCard'
import Heart from '../../assets/heart.svg?react'
import Activity from '../../assets/activity.svg?react'
import HeartPulse from '../../assets/heartPulse.svg?react'
import Baby from '../../assets/baby.svg?react'
import Syringe from '../../assets/syringe.svg?react'
import Brain from '../../assets/brain.svg?react'
import Bone from '../../assets/bone.svg?react'
import Gym from '../../assets/gym.svg?react'
import Bandage from '../../assets/bandage.svg?react'
import Sad from '../../assets/sad.svg?react'
import Zap from '../../assets/zap.svg?react'
import BrainCircuit from '../../assets/brain-circuit.svg?react'

const ShowingServices = () => {
  return (
    <div className="bg-gray-50 p-9">
      <p className="text-gray-500">Showing 16 services</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
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
        <MedicalCard
          title="Vaccinations"
          description="Complete immunization services following CDC recommended schedules for children."
          status="Pediatrics"
          icon={Syringe}
        />
        <MedicalCard
          title="Developmental Screening"
          description="Early detection and intervention for developmental delays and learning disabilities."
          status="Pediatrics"
          icon={Brain}
        />
        <MedicalCard
          title="Joint Replacement"
          description="Hip, knee, and shoulder replacement surgeries using minimally invasive techniques."
          status="Orthopedics"
          icon={Bone}
        />
        <MedicalCard
          title="Sports Medicine"
          description="Treatment and prevention of sports-related injuries for athletes of all levels."
          status="Orthopedics"
          icon={Gym}
        />
        <MedicalCard
          title="Fracture Care"
          description="Expert treatment of bone fractures including casting, splinting, and surgical repair."
          status="Orthopedics"
          icon={Bandage}
        />

        <MedicalCard
          title="Headache Treatment"
          description="Diagnosis and management of chronic headaches, migraines, and cluster headaches."
          status="Neurology"
          icon={Sad}
        />
        <MedicalCard
          title="Stroke Care"
          description="Rapid response stroke treatment and comprehensive rehabilitation services."
          status="Neurology"
          icon={Zap}
        />

        <MedicalCard
          title="Epilepsy Management"
          description="Advanced diagnosis and treatment options for seizure disorders."
          status="Neurology"
          icon={BrainCircuit}
        />

        <MedicalCard
          title="General Health Checkup"
          description="Annual physical examinations and preventive health screenings."
          status="General Medicine"
          icon={BrainCircuit}
        />

        <MedicalCard
          title="Emergency Care"
          description="24/7 emergency medical services for acute illnesses and injuries."
          status="Emergency"
          icon={BrainCircuit}
        />
        <MedicalCard
          title="Laboratory Services"
          description="Comprehensive blood tests, urinalysis, and diagnostic testing."
          status="Laboratory"
          icon={BrainCircuit}
        />

        <MedicalCard
          title="Diagnostic Imaging"
          description="X-ray, MRI, CT scan, and ultrasound imaging services."
          status="Radiology"
          icon={BrainCircuit}
        />
      </div>
    </div>
  )
}

export default ShowingServices
