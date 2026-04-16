import type React from 'react'
import Modal from '../shared/modal/Modal'
import Button from '../shared/Button/Button'
import CloseMenu from '../../assets/closeMenu.svg?react'
import Briefcase from './../../assets/briefcase.svg?react'
import Graduation from '../../assets/graduation.svg?react'
import Clock from '../../assets/oclock.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import type { DoctorResponse } from '../../api/User/user.types'

interface DoctorProfileModalProps {
  isOpen: boolean
  onClose: () => void
  doctor: DoctorResponse[] | null
}

const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  isOpen,
  onClose,
  doctor,
}) => {
  if (!doctor) return null
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Doctor Profile</h2>
        <Button onClick={onClose}>
          <CloseMenu className="w-6 h-6" />
        </Button>
      </div>

      {/* body */}

      {doctor && (
        <div>
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={doctor.img}
              alt="Doctor"
              className="w-28 h-28 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold">
                Dr. {doctor.firstName} {doctor.lastName}
              </h3>
              <p className="text-blue-600 font-medium">
                {doctor.specialization}
              </p>
              <p className="text-gray-600 mt-2">
                {doctor.biography || 'No biography available.'}
              </p>
            </div>
          </div>

          {/* info */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center bg-gray-50 p-4 rounded-xl">
              <Briefcase className="w-5 h-5 text-teal-500 mr-4" />
              <div className="">
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold">{doctor.yearsOfExperience}</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 p-4 rounded-xl">
              <Graduation className="w-5 h-5 text-teal-500 mr-4" />
              <div className="">
                <p className="text-sm text-gray-500">Education</p>
                <p className="font-semibold">{doctor.education}</p>
              </div>
            </div>
          </div>
          {/* schedule */}

          <div className="flex items-center bg-gray-50 p-4 rounded-xl mt-4">
            <Clock className="w-5 h-5 text-teal-500 mr-4" />
            <div className="">
              <p className="text-sm text-gray-500">Schedule</p>
              <p className="font-semibold">{doctor.schedule}</p>
            </div>
          </div>
          <Button variant="active" className="w-full mt-6">
            <Calendar className="w-5 h-5 text-white mr-2" />
            Book Appointment with {doctor.name}
          </Button>
        </div>
      )}
    </Modal>
  )
}

export default DoctorProfileModal
