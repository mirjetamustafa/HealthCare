import WhyChooseCard from '../shared/Cards/WhyChooseCard'
import Heart from '../../assets/heart.svg?react'
import Award from '../../assets/award.svg?react'
import ShieldTick from '../../assets/shieldTick.svg?react'
import Users from '../../assets/users.svg?react'

const OurCore = () => {
  return (
    <section className="grid justify-items-center w-full bg-gray-50 mt-[100px] pb-15">
      <div className="mt-[100px]">
        <h1 className="text-4xl font-bold text-center">Our Core Values</h1>
        <p className="text-gray-500 text-md md:text-lg text-center mt-5">
          These principles guide our actions and decisions every day.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-9 md:my-[50px] mx-2 md:mx-[150px]">
          <WhyChooseCard
            title="Compassion"
            description="We treat every patient with empathy, understanding, and genuine care."
            icon={Heart}
          />
          <WhyChooseCard
            title="Excellence"
            description="We strive for the highest standards in medical care and patient outcomes."
            icon={ShieldTick}
          />
          <WhyChooseCard
            title="Collaboration"
            description="We work together as a team to provide comprehensive, coordinated care."
            icon={Users}
          />
          <WhyChooseCard
            title="Innovation"
            description="We embrace new technologies and treatments to improve patient care."
            icon={Award}
          />
        </div>
      </div>
    </section>
  )
}

export default OurCore
