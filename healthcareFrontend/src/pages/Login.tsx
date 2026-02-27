import Stethoscope from '../assets/stethoscope.svg?react'
import Button from '../components/shared/Button/Button'
import Input from '../components/shared/Input/Input'
import PasswordField from '../components/shared/PasswordField/PasswordField'

const Login = () => {
  return (
    <div className="flex items-center justify-center py-[100px] bg-gray-50">
      <div className="grid justify-items-center">
        <div className="grid justify-items-center">
          <Stethoscope className="w-10 h-10 bg-[#0066CC] text-white rounded-lg p-2" />
          <h1 className="text-3xl font-extrabold text-gray-900 mt-5">
            MediCare Portal
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to access your dashboard
          </p>
        </div>
        <div className=" bg-white shadow-sm rounded-lg p-9 w-[450px] m-9">
          <form action="">
            <Input
              type="email"
              label="Email address"
              placeholder="email@example.com"
            />
            <PasswordField label="Password" placeholder="••••••••" />
            <Button variant="active" type="submit" className="w-full mt-9">
              Sign in
            </Button>
            <div class="flex items-center justify-center my-8">
              <div class="flex-grow border-t border-gray-300"></div>

              <span class="mx-4 text-gray-600 text-sm">Demo Credentials</span>

              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex gap-3 justify-center mt-5">
              <Button
                variant="default"
                className="text-sm hover:bg-gray-100 px-6"
              >
                Admin
              </Button>
              <Button
                variant="default"
                className="text-sm hover:bg-gray-100 px-6"
              >
                Doctor
              </Button>
              <Button
                variant="default"
                className="text-sm hover:bg-gray-100 px-6"
              >
                Patient
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
