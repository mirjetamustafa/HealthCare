import Modal from '../shared/modal/Modal'
import CloseMenu from '../../assets/closeMenu.svg?react'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import PasswordField from '../shared/PasswordField/PasswordField'
import Textarea from '../shared/Textarea/Textarea'
import Select from '../shared/Select/Select'
import { departament } from '../shared/categories'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { doctorRegister } from '../../api/User/user'

interface AddDoctorProps {
  isOpen: boolean
  onClose: () => void
}

const initialFormData = {
  name: '',
  email: '',
  password: '',
  specialization: '',
  department: '',
  education: '',
  yearsOfExperience: 0,
  contactNumber: '',
  schedule: '',
  biography: '',
  img: '',
}

const AddDoctor = ({ isOpen, onClose }: AddDoctorProps) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'yearsOfExperience' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }

    try {
      await doctorRegister(formData)
      toast.success('Doctor added successfully!')
      setFormData(initialFormData)
      onClose()
    } catch (err: any) {
      toast.error(err.message || 'Failed to add doctor')
      console.error('Error adding doctor:', err)
    }
  }

  console.log(formData)

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

          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter doctor's full name"
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter doctor's email"
            />
            <PasswordField
              name="password"
              value={formData.password}
              onChange={handleChange}
              label="Password"
              placeholder="••••••••"
            />

            <Input
              label="Specialization"
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Enter doctor's specialization"
            />
            <Select
              name="department"
              value={formData.department}
              onChange={handleChange}
              options={departament}
            />
            <Input
              name="education"
              label="Education"
              placeholder="Enter doctor's education"
              value={formData.education}
              onChange={handleChange}
            />
            <Input
              label="Years of Experience"
              placeholder="Enter doctor's years of experience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
            <Input
              label="Contact Number"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter doctor's contact number"
            />
            <Input
              label="Schedule"
              placeholder="Enter doctor schedule"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
            />
            {/* <Input
              label="Role"
              placeholder="Enter doctor's role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            <Input
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            /> */}
            <Input
              label="Image URL"
              placeholder="Enter doctor's image URL"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
            <Textarea
              label="Biography"
              placeholder="Enter doctor's biography"
              name="biography"
              value={formData.biography}
              onChange={handleChange}
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
