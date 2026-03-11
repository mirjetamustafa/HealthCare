import { useState } from 'react'
import Stethoscope from '../assets/stethoscope.svg?react'
import Button from '../components/shared/Button/Button'
import Input from '../components/shared/Input/Input'
import PasswordField from '../components/shared/PasswordField/PasswordField'
import { toast } from 'react-toastify'
import { loginUser } from '../api/User/user'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../lib/AuthContext'

const intialForm = {
  email: '',
  password: '',
}

const roleDefaults: Record<string, { email: string; password: string }> = {
  admin: { email: 'admin@healthcare.com', password: 'Admin123!' },
  doctor: { email: 'doctor@healthcare.com', password: 'Doctor123!' },
  patient: { email: 'patient@healthcare.com', password: 'Patient123!' },
}

const Login = () => {
  const [loginData, setLoginData] = useState(intialForm)
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(loginData)
      navigate('/admin')
      toast.success('Logged in successfully!')
    } catch {
      toast.error('Login failed')
    }
  }

  const handleRoleLogin = (role: 'admin' | 'doctor' | 'patient') => {
    setLoginData(roleDefaults[role])
  }

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
              label="Email address"
              placeholder="email@example.com"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <PasswordField
              label="Password"
              placeholder="••••••••"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <Link
              to="/register"
              className="text-xs text-blue-600 hover:text-blue-700"
            >
              Register Patient Only
            </Link>
            <Button variant="active" type="submit" className="w-full mt-9">
              Sign in
            </Button>
            <div className="flex items-center justify-center my-8">
              <div className="flex-grow border-t border-gray-300"></div>

              <span className="mx-4 text-gray-600 text-sm">
                Demo Credentials
              </span>

              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex gap-3 justify-center mt-5">
              {['admin', 'doctor', 'patient'].map((role) => (
                <Button
                  key={role}
                  type="button"
                  variant="default"
                  className="text-sm hover:bg-gray-100 px-6"
                  onClick={() =>
                    handleRoleLogin(role as 'admin' | 'doctor' | 'patient')
                  }
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </Button>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
