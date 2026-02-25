import type React from 'react'
import Modal from '../shared/modal/Modal'
import Button from '../shared/Button/Button'
import CloseMenu from '../../assets/closeMenu.svg?react'
import Briefcase from './../../assets/briefcase.svg?react'
import Graduation from '../../assets/graduation.svg?react'
import Clock from '../../assets/oclock.svg?react'
import Calendar from '../../assets/calendar.svg?react'

interface DoctorProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
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

      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
          alt="Doctor"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold">Dr. Sarah Johnson</h3>
          <p className="text-blue-600 font-medium">Cardiologist</p>
          <p className="text-gray-600 mt-2">
            Dr. Johnson is a board-certified cardiologist specializing in
            preventive cardiology and heart failure management.
          </p>
        </div>
      </div>

      {/* info */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center bg-gray-50 p-4 rounded-xl">
          <Briefcase className="w-5 h-5 text-teal-500 mr-4" />
          <div className="">
            <p className="text-sm text-gray-500">Experience</p>
            <p className="font-semibold">15 years</p>
          </div>
        </div>

        <div className="flex items-center bg-gray-50 p-4 rounded-xl">
          <Graduation className="w-5 h-5 text-teal-500 mr-4" />
          <div className="">
            <p className="text-sm text-gray-500">Education</p>
            <p className="font-semibold">Harvard Medical School</p>
          </div>
        </div>
      </div>
      {/* schedule */}

      <div className="flex items-center bg-gray-50 p-4 rounded-xl mt-4">
        <Clock className="w-5 h-5 text-teal-500 mr-4" />
        <div className="">
          <p className="text-sm text-gray-500">Schedule</p>
          <p className="font-semibold">Mon, Wed, Fri 9:00 AM - 5:00 PM</p>
        </div>
      </div>
      <Button variant="active" className="w-full mt-6">
        <Calendar className="w-5 h-5 text-white mr-2" />
        Book Appointment with Dr.
      </Button>
    </Modal>
  )
}

export default DoctorProfileModal
