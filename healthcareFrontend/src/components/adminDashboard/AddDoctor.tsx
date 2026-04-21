import Modal from '../shared/modal/Modal'
import CloseMenu from '../../assets/closeMenu.svg?react'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import PasswordField from '../shared/PasswordField/PasswordField'
import Textarea from '../shared/Textarea/Textarea'
import Select from '../shared/Select/Select'
import { departament } from '../shared/categories'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { doctorRegister, updateDoctors } from '../../api/User/user'
import type { DoctorResponse } from '../../api/User/user.types'

interface AddDoctorProps {
  isOpen: boolean
  onClose: () => void
  editDoctor: DoctorResponse | null
  fetchDoctors?: () => void
}

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'doctor',
  specialization: '',
  department: '',
  education: '',
  yearsOfExperience: 0,
  contactNumber: '',
  schedule: '',
  status: '',
  biography: '',
  img: '',
}

const AddDoctor = ({
  isOpen,
  onClose,
  editDoctor,
  fetchDoctors,
}: AddDoctorProps) => {
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (editDoctor) {
      setFormData({
        firstName: editDoctor.firstName || '',
        lastName: editDoctor.lastName || '',
        email: editDoctor.email || '',
        password: '',
        role: editDoctor.role || 'doctor',
        specialization: editDoctor.specialization || '',
        department: editDoctor.department || '',
        education: editDoctor.education || '',
        yearsOfExperience: editDoctor.yearsOfExperience || 0,
        contactNumber: editDoctor.contactNumber || '',
        schedule: editDoctor.schedule || '',
        status: editDoctor.status || '',
        biography: editDoctor.biography || '',
        img: editDoctor.img || '',
      })
    } else {
      setFormData(initialFormData)
    }
  }, [editDoctor])

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

    if (!editDoctor && formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }

    try {
      if (editDoctor) {
        const { ...updateData } = formData
        await updateDoctors(editDoctor._id, updateData)
        toast.success('Doctor updated successfully!')
      } else {
        await doctorRegister(formData)
        toast.success('Doctor added successfully!')
      }

      setFormData(initialFormData)
      onClose()
      fetchDoctors?.()
    } catch (err: any) {
      toast.error(err.message || 'Failed to add doctor')
      console.error('Error adding doctor:', err)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" h-150 overflow-y-auto">
        <div className="px-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {' '}
              {editDoctor ? 'Edit Doctor' : 'Add New Doctor'}{' '}
            </h2>
            <Button variant="btn" onClick={onClose}>
              <CloseMenu className="w-6 h-6" />
            </Button>
          </div>

          <form onSubmit={handleSubmit}>
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              type="email"
              placeholder="Enter doctor's email"
            />
            <PasswordField
              name="password"
              value={formData.password}
              onChange={handleChange}
              label="Password"
              placeholder={
                editDoctor ? 'Leave blank to keep current password' : '••••••••'
              }
            />

            <Input
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              type="text"
            />

            <Input
              label="Status"
              name="status"
              placeholder="Enter doctor's status"
              value={formData.status || ''}
              onChange={handleChange}
              type="text"
            />

            <Input
              label="Specialization"
              type="text"
              name="specialization"
              value={formData.specialization || ''}
              onChange={handleChange}
              placeholder="Enter doctor's specialization"
            />
            <Select
              name="department"
              value={formData.department || ''}
              onChange={(value: string) =>
                setFormData((prev) => ({
                  ...prev,
                  department: value,
                }))
              }
              options={departament}
            />
            <Input
              name="education"
              label="Education"
              placeholder="Enter doctor's education"
              value={formData.education || ''}
              onChange={handleChange}
            />
            <Input
              label="Years of Experience"
              placeholder="Enter doctor's years of experience"
              name="yearsOfExperience"
              value={String(formData.yearsOfExperience)}
              onChange={handleChange}
            />
            <Input
              label="Contact Number"
              name="contactNumber"
              type="text"
              value={formData.contactNumber || ''}
              onChange={handleChange}
              placeholder="Enter doctor's contact number"
            />
            <Input
              label="Schedule"
              placeholder="Enter doctor schedule"
              name="schedule"
              value={formData.schedule || ''}
              onChange={handleChange}
            />

            <Input
              label="Image URL"
              type="text"
              placeholder="Enter doctor's image URL"
              name="img"
              value={formData.img || ''}
              onChange={handleChange}
            />
            <Textarea
              label="Biography"
              placeholder="Enter doctor's biography"
              name="biography"
              value={formData.biography || ''}
              onChange={handleChange}
            />
            <Button type="submit" variant="active" className="mt-4 w-full">
              {editDoctor ? 'Update Doctor' : ' Add Doctor'}
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default AddDoctor
