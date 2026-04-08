import Button from '../components/shared/Button/Button'
import Input from '../components/shared/Input/Input'
import PasswordField from '../components/shared/PasswordField/PasswordField'
import Stethoscope from '../assets/stethoscope.svg?react'
import { Link } from 'react-router'
import { usePatient } from '../components/hook/usePatient'

const Register = () => {
  const { formData, handleChange, handleSubmit, editPatient } = usePatient()

  return (
    <div className="flex items-center justify-center py-[100px] bg-gray-50">
      <div className="grid justify-items-center">
        <div className="grid justify-items-center">
          <Stethoscope className="w-10 h-10 bg-[#0066CC] text-white rounded-lg p-2" />
          <h1 className="text-3xl font-extrabold text-gray-900 mt-5">
            MediCare Portal
          </h1>
          <p className="text-sm text-gray-600 mt-1">Create an account</p>
        </div>
        <div className=" bg-white shadow-sm rounded-lg p-9 w-[450px] m-9">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />

            <PasswordField
              name="password"
              label="Password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordField
              name="confirmPassword"
              label="Confirm Password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="contactNumber"
              type="text"
              placeholder="(123) 44 456 789"
              value={formData.contactNumber}
              onChange={handleChange}
            />

            <Button type="submit" variant="active" className="mt-4 w-full">
              {editPatient ? 'Update Account' : 'Create Account'}
            </Button>

            <p className="flex justify-center mt-5 gap-2 text-xs ">
              Do you have an account?
              <Link
                to="/login"
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
