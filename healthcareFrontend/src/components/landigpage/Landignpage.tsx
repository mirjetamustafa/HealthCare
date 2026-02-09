import { Link } from 'react-router'
import bgImage from '../../assets/bg.avif'
import ShieldTick from '../../assets/shieldTick.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import UserPlus from '../../assets/userplus.svg?react'
import OclockIcon from '../../assets/oclock.svg?react'
import Users from '../../assets/users.svg?react'
import Button from '../shared/Button/Button'
const Landignpage = () => {
  return (
    <div className="w-full h-150 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#0066CC]/90 to-[#0066CC]/50`}
      ></div>

      <div className="relative z-10 items-center h-full">
        <div className="ml-[20%] pt-25 ">
          <p className="inline-flex items-center  gap-1 bg-gray-50/10 text-white text-sm font-semibold rounded-full py-2 px-3">
            <ShieldTick className="w-4 h-4  text-white" />
            Trusted by 50,000+ patients
          </p>

          <h1 className="text-6xl font-bold text-white mt-4">
            Your Health Is Our <br />
            <span className="text-[#00A896]">Priority</span>
          </h1>

          <p className="text-white text-xl mt-4">
            Experience world-class healthcare with our team of expert
            physicians.
            <br />
            We provide comprehensive medical services with compassion and <br />
            cutting-edge technology.
          </p>

          <div className="flex gap-5 mt-7">
            <Link to="/bookAppointment">
              <Button variant="book" className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Book a Consulation
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="register"
                className="inline-flex items-center gap-1"
              >
                <UserPlus className="w-4 h-4" />
                Register Now
              </Button>
            </Link>
          </div>

          <div className="flex gap-20 mt-7">
            <div className="">
              <div className="flex items-center gap-2">
                <OclockIcon className="w-5 h-5 text-[#00A896]" />
                <h3 className="text-3xl text-white font-bold">25+</h3>
              </div>
              <p className="text-gray-300">Years of Excellence</p>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00A896]" />
                <h3 className="text-3xl text-white font-bold">50K+</h3>
              </div>
              <p className="text-gray-300">Happy Patients</p>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <ShieldTick className="w-5 h-5 text-[#00A896]" />
                <h3 className="text-3xl text-white font-bold">100+</h3>
              </div>
              <p className="text-gray-300">Expert Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landignpage
