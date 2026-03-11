import Button from '../components/shared/Button/Button'
import Input from '../components/shared/Input/Input'
import PasswordField from '../components/shared/PasswordField/PasswordField'
import Stethoscope from '../assets/stethoscope.svg?react'
import { Link } from 'react-router'

const Register = () => {
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="John"
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
            />

            <Input label="Date of Birth" name="email" type="date" />
            <PasswordField
              name="password"
              label="Password"
              placeholder="••••••••"
            />
            <PasswordField
              name="password"
              label="Confirm Password"
              placeholder="••••••••"
            />

            <Input
              label="Phone Number"
              name="contactNumber"
              type="tel"
              placeholder="(123) 44 456 789"
            />

            <Button type="submit" variant="active" className="mt-4 w-full">
              Create Account
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
