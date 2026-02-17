import DoctorsCard from '../components/doctors/DoctorsCard'
import FilterBySpeciality from '../components/doctors/FilterBySpeciality'
import OurMedicalTeam from '../components/doctors/OurMedicalTeam'

const Doctors = () => {
  return (
    <div className="">
      <OurMedicalTeam />
      <FilterBySpeciality />
      <div className="bg-gray-50 p-9">
        <p className="text-gray-600 mb-5">Showing 8 doctors</p>
        <DoctorsCard />
      </div>
    </div>
  )
}

export default Doctors
