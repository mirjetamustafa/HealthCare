import { Link } from 'react-router-dom'
import Health from '../../assets/health.svg?react'
import Phone from '../../assets/phone.svg?react'
import Mail from '../../assets/mail.svg?react'
import MapPin from '../../assets/mapPin.svg?react'
import Facebook from '../../assets/facebook.svg?react'
import Twitter from '../../assets/twitter.svg?react'
import Linkedin from '../../assets/linkedIn.svg?react'
import Instagram from '../../assets/instagram.svg?react'
import { footerLinks, legal, recourcesLinks } from '../header/navLinks'

const Footer = () => {
  return (
    <section className="bg-gray-900 text-gray-300k p-9">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center md:justify-items-center gap-5">
        <div className="py-5 ">
          <Link
            to="/"
            className="flex items-center gap-1 cursor-pointer group "
          >
            <Health className="text-[#00A896] w-8 h-8 group-hover:opacity-85" />
            <h1 className="text-gray-50 font-bold text-2xl group-hover:opacity-85">
              MediCare
            </h1>
          </Link>
          <p className="text-sm text-gray-400 w-60 py-7">
            Providing exceptional healthcare services with compassion and
            expertise. Your health is our priority.
          </p>

          <div className="flex gap-2 items-center cursor-pointer group">
            <Phone className="w-4 h-4 text-[#00A896]" />
            <span className="text-gray-300 text-sm group-hover:text-gray-100">
              (123)44-456-789
            </span>
          </div>

          <div className="flex gap-2 items-center cursor-pointer group mt-3">
            <Mail className="w-4 h-4 text-[#00A896]" />
            <span className="text-gray-300 text-sm group-hover:text-gray-100">
              info@medicare.com
            </span>
          </div>

          <div className="flex gap-2 mt-5">
            <MapPin className="w-4 h-4 text-[#00A896] mt-1" />
            <span className="text-gray-300 text-sm w-55">
              123 Medical Center Drive Healthcare City, HC 12345
            </span>
          </div>
        </div>

        <div className="">
          <h1 className="text-gray-100 font-bold text-xl">Quick Links</h1>

          <ul>
            {footerLinks.map((link) => (
              <li key={link.to} className="pt-2">
                <Link
                  to={link.to}
                  className="text-sm text-gray-300 cursor-pointer p-2  hover:text-gray-100 rounded-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h1 className="text-gray-100 font-bold text-xl">Patient Resources</h1>

          <ul>
            {recourcesLinks.map((link) => (
              <li key={link.to} className="pt-2">
                <Link
                  to={link.to}
                  className="text-sm text-gray-300 cursor-pointer p-2  hover:text-gray-100 rounded-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h1 className="text-gray-100 font-bold text-xl">Legal</h1>

          <ul>
            {legal.map((link) => (
              <li key={link.to} className="pt-2">
                <Link
                  to={link.to}
                  className="text-sm text-gray-300 cursor-pointer p-2  hover:text-gray-100 rounded-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="text-gray-100 font-bold text-xl mt-9">Follow Us</h1>
          <ul className="flex gap-2 mt-4">
            <Link to="facebook.com" className="">
              <Facebook className="w-8 h-8 bg-gray-700 text-gray-100 hover:bg-[#0066CC] rounded-md p-1.5" />
            </Link>
            <Link to="twiter.com" className="">
              <Twitter className="w-8 h-8 bg-gray-700 text-gray-100 hover:bg-[#0066CC] rounded-md p-1.5" />
            </Link>
            <Link to="facebook.com" className="">
              <Linkedin className="w-8 h-8 bg-gray-700 text-gray-100 hover:bg-[#0066CC] rounded-md p-1.5" />
            </Link>
            <Link to="facebook.com" className="">
              <Instagram className="w-8 h-8 bg-gray-700 text-gray-100 hover:bg-[#0066CC] rounded-md p-1.5" />
            </Link>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-5 md:mx-9"></div>
      <div className="md:flex justify-between justify-items-center mx-9 mt-5">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MediCare. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-3 md:mt-0">
          Made with care for your health
        </p>
      </div>
    </section>
  )
}

export default Footer
