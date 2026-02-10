import { Link } from 'react-router-dom'
import bgImage from '../../assets/bg.avif'
import ShieldTick from '../../assets/shieldTick.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import UserPlus from '../../assets/userplus.svg?react'
import Button from '../shared/Button/Button'
import { states } from '../shared/states'

const HeroSection = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${bgImage})`,
  }
  return (
    <div className="w-full min-h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundStyle}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#0066CC]/90 to-[#0066CC]/50`}
      ></div>

      {/* Content */}
      <div className="relative z-10 items-center min-h-screen px-5 md:px-0">
        <div className="w-full max-w-3xl md:ml-[20%] pt-24 md:pt-28 ">
          {/* Badge */}
          <p className="inline-flex items-center  gap-2 bg-gray-50/10 text-white text-xs md:text-sm font-semibold rounded-full py-2 px-3">
            <ShieldTick className="w-4 h-4" />
            Trusted by 50,000+ patients
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
            Your Health Is Our <br />
            <span className="text-[#00A896]">Priority</span>
          </h1>

          {/* Description */}
          <p className="text-white text-base md:text-xl mt-4 leading-relaxed">
            Experience world-class healthcare with our team of expert
            physicians.
            <br className="hidden md:block" />
            We provide comprehensive medical services with compassion and{' '}
            <br className="hidden md:block" />
            cutting-edge technology.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-7">
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

          <div className="grid grid-cols-3 md:gap-20 mt-7  md:mt-10">
            {states.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#00A896]" />
                  <h3 className="text-2xl md:text-3xl text-white font-bold mt-2">
                    {' '}
                    {value}{' '}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base"> {label} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
