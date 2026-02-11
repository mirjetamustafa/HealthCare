import { Link } from 'react-router-dom'
import {
  publicLinks,
  adminLinks,
  doctorLinks,
  patientLinks,
  loginLink,
} from './navLinks'
import Health from '../../assets/health.svg?react'
import Shield from '../../assets/shield.svg?react'
import Stethoscope from '../../assets/stethoscope.svg?react'
import User from '../../assets/user.svg?react'

const icons = {
  user: User,
  shield: Shield,
  stethoscope: Stethoscope,
}

const Header = ({ role }) => {
  const roleLinks =
    role === 'admin'
      ? adminLinks
      : role === 'doctor'
        ? doctorLinks
        : role === 'patient'
          ? patientLinks
          : loginLink
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-center-safe gap-3 p-5">
        <Link to="/" className="flex items-center gap-1 cursor-pointer group ">
          <Health className="text-blue-600 w-8 h-8 group-hover:text-blue-500" />
          <h1 className="text-blue-600 font-bold text-2xl group-hover:text-blue-500">
            MediCare
          </h1>
        </Link>

        <ul className="flex items-center gap-2 mt-1">
          {publicLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-sm text-gray-700 cursor-pointer font-semibold p-2 hover:bg-gray-100 hover:text-blue-600 rounded-md"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {roleLinks.map((link) => {
            const Icon = icons[link.icon]
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex items-center gap-1.5 border border-gray-200 text-sm text-gray-700 cursor-pointer font-semibold p-2 hover:bg-gray-50 rounded-md"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
