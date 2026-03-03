import Modal from '../shared/modal/Modal'
import CloseMenu from '../../assets/closeMenu.svg?react'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import PasswordField from '../shared/PasswordField/PasswordField'
import Textarea from '../shared/Textarea/Textarea'
import Select from '../shared/Select/Select'
import { departament } from '../shared/categories'
import DayRow from '../shared/doctorAvailability/DayRow'
import TimeInput from '../shared/doctorAvailability/TimeInput'

interface AddDoctorProps {
  isOpen: boolean
  onClose: () => void
}

const AddDoctor = ({ isOpen, onClose }: AddDoctorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" h-150 overflow-y-auto">
        <div className="px-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add New Doctor</h2>
            <Button onClick={onClose}>
              <CloseMenu className="w-6 h-6" />
            </Button>
          </div>

          <form className="">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter doctor's full name"
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter doctor's email"
            />
            <PasswordField label="Password" placeholder="••••••••" />

            <Input
              label="Specialization"
              type="text"
              placeholder="Enter doctor's specialization"
            />
            <Select name="category" options={departament} />
            <Input label="Education" placeholder="Enter doctor's education" />
            <Input
              label="Years of Experience"
              placeholder="Enter doctor's years of experience"
            />
            <Input
              label="Contact Number"
              type="tel"
              placeholder="Enter doctor's contact number"
            />
            <Input label="Schedule" placeholder="Enter doctor schedule" />
            <Textarea
              label="Biography"
              placeholder="Enter doctor's biography"
            />
            <Button type="submit" variant="active" className="mt-4 w-full">
              Add Doctor
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default AddDoctor
