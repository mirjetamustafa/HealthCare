import { Link } from 'react-router-dom'
import Health from '../../assets/health.svg?react'
import HamburgerMenu from '../../assets/hamburgerMenu.svg?react'
import CloseMenu from '../../assets/closeMenu.svg?react'
import Shield from '../../assets/shield.svg?react'
import Stethoscope from '../../assets/stethoscope.svg?react'
import User from '../../assets/user.svg?react'
import Button from '../shared/Button/Button'
import { useState } from 'react'
import {
  publicLinks,
  adminLinks,
  doctorLinks,
  patientLinks,
  loginLink,
} from './navLinks'

const icons = {
  user: User,
  shield: Shield,
  stethoscope: Stethoscope,
}

const ResponsiveHeader = ({ role }) => {
  const [menu, setMenu] = useState(false)

  const roleLinks =
    role === 'admin'
      ? adminLinks
      : role === 'doctor'
        ? doctorLinks
        : role === 'patient'
          ? patientLinks
          : loginLink

  return (
    <div className="flex md:hidden justify-between items-center p-5">
      <Link to="/" className="flex items-center gap-1 cursor-pointer group ">
        <Health className="text-blue-600 w-8 h-8 group-hover:text-blue-500" />
        <h1 className="text-blue-600 font-bold text-2xl group-hover:text-blue-500">
          MediCare
        </h1>
      </Link>
      <div className="">
        {menu ? (
          <Button onClick={() => setMenu(false)} className="hover:bg-gray-100">
            <CloseMenu className="w-5 h-5" />
          </Button>
        ) : (
          <Button onClick={() => setMenu(true)} className="hover:bg-gray-100">
            <HamburgerMenu className="w-5 h-5" />
          </Button>
        )}

        {menu && (
          <div className="fixed top-16 left-0 w-full h-screen bg-white shadow-md z-50 transition-all duration-300">
            <div className="border-b border-gray-200 mx-9 mt-5"></div>
            <div className="p-6">
              <ul className="flex flex-col mt-1">
                {publicLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="lex items-center gap-1.5  text-sm text-gray-700 cursor-pointer font-semibold p-2 hover:bg-gray-50 hover:text-blue-600 rounded-md"
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
          </div>
        )}
      </div>
    </div>
  )
}

export default ResponsiveHeader
