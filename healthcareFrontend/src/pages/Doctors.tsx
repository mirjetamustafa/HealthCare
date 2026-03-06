import { useEffect, useState } from 'react'
import DoctorsCard from '../components/doctors/DoctorsCard'
import FilterBySpeciality from '../components/doctors/FilterBySpeciality'
import OurMedicalTeam from '../components/doctors/OurMedicalTeam'
import type { DoctorResponse } from '../api/User/user.types'
import { getDoctor } from '../api/User/user.client'

const Doctors = () => {
  const [doctors, setDoctors] = useState<DoctorResponse[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')

  const fetchDoctors = async () => {
    try {
      const response = await getDoctor()
      setDoctors(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  const formatText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

  const departments = [
    { label: 'All Departments', value: 'all' },
    ...Array.from(new Set(doctors.map((doctor) => doctor.department))).map(
      (department) => ({
        label: formatText(department),
        value: department,
      }),
    ),
  ]

  const filteredDoctors =
    selectedDepartment === 'all'
      ? doctors
      : doctors.filter((doctor) => doctor.department === selectedDepartment)
  return (
    <div className="">
      <OurMedicalTeam />
      <FilterBySpeciality
        departments={departments}
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
