import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getCurrentUser, loginUser } from '../api/User/user'

interface User {
  id: string
  name?: string
  email: string
  role: 'admin' | 'doctor' | 'patient'
  patientId?: string
  firstName: string
  lastName: string
  specialization?: string
}

interface UserLoginData {
  email: string
  password: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: UserLoginData) => Promise<User>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
      axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`
    }
    setIsLoading(false)
  }, [])

  const login = async (credentials: UserLoginData) => {
    setIsLoading(true)
    try {
      const res = await loginUser(credentials)
      const { token, user: userData } = res.data

      const loggedUser: User = {
        id: userData._id?.toString(),
        email: userData.email,
        role: userData.role,
        patientId: userData.patientId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        specialization: userData.specialization,
      }
      setUser(loggedUser)
      setToken(token)
      localStorage.setItem('user', JSON.stringify(loggedUser))
      localStorage.setItem('token', token)

      axios.defaults.headers.common.Authorization = `Bearer ${token}`

      setIsLoading(false)
      return loggedUser
    } catch (error) {
      setIsLoading(false)
      console.error(error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    delete axios.defaults.headers.common.Authorization
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated: !!user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
