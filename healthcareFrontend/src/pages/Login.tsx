import Stethoscope from '../assets/stethoscope.svg?react'
import Button from '../components/shared/Button/Button'
import Input from '../components/shared/Input/Input'
import PasswordField from '../components/shared/PasswordField/PasswordField'
import { Link } from 'react-router-dom'
import { useLogin } from '../components/hook/usePatient'

const Login = () => {
  const { loginData, setLoginData, handleSubmit } = useLogin()

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
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="email@example.com"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <PasswordField
              label="Password"
              name="password"
              placeholder="••••••••"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <Button variant="active" type="submit" className="w-full mt-9">
              Sign in
            </Button>

            <p className="flex justify-center gap-2 mt-5 text-xs">
              Patient only{' '}
              <Link
                to="/register"
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
