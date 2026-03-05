import { useEffect, useState } from 'react'
import DoctorsCard from '../components/doctors/DoctorsCard'
import FilterBySpeciality from '../components/doctors/FilterBySpeciality'
import OurMedicalTeam from '../components/doctors/OurMedicalTeam'
import type { DoctorResponse } from '../api/User/user.types'
import { getDoctor } from '../api/User/user.client'

const Doctors = () => {
  const [doctors, setDoctors] = useState<DoctorResponse[]>([])

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

  const departments = Array.from(
    new Set(doctors.map((doctor) => doctor.department)),
  ).map((dep) => ({
    label: dep,
    value: dep,
  }))

  return (
    <div className="">
      <OurMedicalTeam />
      <FilterBySpeciality departments={departments} />
      <div className="bg-gray-50 p-9">
        <p className="text-gray-600 mb-5">Showing {doctors.length} doctors</p>
        <DoctorsCard doctors={doctors} />
      </div>
    </div>
  )
}

export default Doctors
