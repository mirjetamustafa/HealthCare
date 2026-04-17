import type { DoctorResponse } from '../../api/User/user.types'
import Button from '../shared/Button/Button'

import Select from '../shared/Select/Select'
import { getUserDisplayName } from '../../utils/userHelpers'
import type { AppointmentInput } from '../../api/BookAppointment/bookAppointment.types'

interface SelectDoctorProps {
  setStep: (step: number) => void
  doctors: DoctorResponse[]
  appointmentData: AppointmentInput
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentInput>>
}

const SelectDoctor = ({
  setStep,
  doctors,
  appointmentData,
  setAppointmentData,
}: SelectDoctorProps) => {
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

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.department?.toLocaleLowerCase() === appointmentData.department,
  )

  const doctor = filteredDoctors.find(
    (d) => d.email === appointmentData.doctorEmail,
  )

  return (
    <div className="">
      <Select
        label="Department"
        name="department"
        value={appointmentData.department}
        options={departments}
        onChange={(value) => {
          setAppointmentData((prev) => ({
            ...prev,
            department: value,
            doctorEmail: '', // when you change department, reset doctor
            doctorName: '',
          }))
        }}
      />

      <Select
        label="Doctor"
        name="doctor"
        value={appointmentData.doctorEmail}
        options={filteredDoctors.map((doctor) => ({
          label: getUserDisplayName(doctor),
          value: doctor.email,
        }))}
        onChange={(value) => {
          const selectedDoctor = filteredDoctors.find((d) => d.email === value)

          if (selectedDoctor) {
            setAppointmentData((prev) => ({
              ...prev,
              doctorEmail: selectedDoctor.email,
              doctorFirstName: selectedDoctor.firstName,
              doctorLastName: selectedDoctor.lastName,
            }))
          }
        }}
        disabled={filteredDoctors.length === 0}
      />
      {doctor && (
        <div className="border border-gray-200 rounded-xl p-5 my-5">
          <div className="flex items-center gap-3">
            <img
              src={doctor.img}
              alt={doctor.firstName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h3 className="font-semibold">
                Dr. {doctor.firstName} {doctor.lastName}
              </h3>
              <p className="text-[#0066CC]"> {doctor.specialization} </p>
              <div className="text-gray-500 text-sm">
                {typeof doctor.schedule === 'string'
                  ? doctor.schedule
                  : Object.entries(doctor.schedule)
                      .filter(([_, value]: any) => value?.enabled)
                      .map(([day, value]: any) => (
                        <div key={day}>
                          {day}: {value.from} - {value.to}
                        </div>
                      ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Button
        variant="active"
        className="w-full"
        onClick={() => setStep(2)}
        disabled={!appointmentData.doctorEmail}
      >
        Continue
      </Button>
    </div>
  )
}

export default SelectDoctor
