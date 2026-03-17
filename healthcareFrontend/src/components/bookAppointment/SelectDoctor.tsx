import { useEffect, useState } from 'react'
import type { DoctorResponse } from '../../api/User/user.types'
import Button from '../shared/Button/Button'
// import { departament } from '../shared/categories'
import Select from '../shared/Select/Select'
import { getUserDisplayName } from '../../utils/userHelpers'

interface SelectDoctorProps {
  setStep: (step: number) => void
  doctors: DoctorResponse[]
}

const SelectDoctor = ({ setStep, doctors }: SelectDoctorProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorResponse[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const departments =
    doctors.length > 0
      ? Array.from(
          new Set(
            doctors
              .map((d) => d.department?.trim().toLowerCase())
              .filter(Boolean),
          ),
        ).map((dep) => ({
          label: dep.charAt(0).toUpperCase() + dep.slice(1),
          value: dep,
        }))
      : []

  useEffect(() => {
    if (!selectedDepartment) {
      setFilteredDoctors([])
      return
    } else {
      const filtered = doctors.filter(
        (doctor) =>
          doctor.department?.trim().toLowerCase() ===
          selectedDepartment?.toLowerCase(),
      )

      setFilteredDoctors(filtered)
    }
  }, [selectedDepartment, doctors])

  useEffect(() => {
    setSelectedDoctor('')
  }, [selectedDepartment])

  const doctor = filteredDoctors.find((d) => d._id === selectedDoctor)

  return (
    <div className="">
      <Select
        label="Department"
        name="department"
        value={selectedDepartment}
        options={departments}
        onChange={(value) => setSelectedDepartment(value)}
      />

      <Select
        label="Doctor"
        name="doctor"
        value={selectedDoctor}
        onChange={(value) => setSelectedDoctor(value)}
        options={filteredDoctors.map((doctor) => ({
          label: getUserDisplayName(doctor),
          value: doctor._id,
        }))}
        disabled={filteredDoctors.length === 0}
      />
      {doctor && (
        <div className="border border-gray-200 rounded-xl p-5 my-5">
          <div className="flex items-center gap-3">
            <img
              src={doctor.img}
              alt={getUserDisplayName(doctor)}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h3 className="font-semibold">{getUserDisplayName(doctor)}</h3>
              <p className="text-[#0066CC]"> {doctor.specialization} </p>
              <p className="text-gray-500 text-sm"> {doctor.schedule} </p>
            </div>
          </div>
        </div>
      )}

      <Button
        variant="active"
        className="w-full"
        onClick={() => setStep(2)}
        disabled={selectedDoctor.length === 0}
      >
        Continue
      </Button>
    </div>
  )
}

export default SelectDoctor
