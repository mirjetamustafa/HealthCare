import DoctorsCard from '../components/doctors/DoctorsCard'
import FilterBySpeciality from '../components/doctors/FilterBySpeciality'
import OurMedicalTeam from '../components/doctors/OurMedicalTeam'

interface DoctorProps {
  filteredDoctors: any
  departments: { label: string; value: string }[]
  setSelectedDepartment: (department: string) => void
  selectedDepartment: string
}

const Doctors = ({
  filteredDoctors,
  departments,
  setSelectedDepartment,
}: DoctorProps) => {
  return (
    <div className="">
      <OurMedicalTeam />
      <FilterBySpeciality
        departments={departments}
        value=""
        onChange={setSelectedDepartment}
      />
      <div className="bg-gray-50 p-9">
        <p className="text-gray-600 mb-5">
          Showing {filteredDoctors.length} doctors
        </p>
        <DoctorsCard doctors={filteredDoctors} />
      </div>
    </div>
  )
}

export default Doctors
