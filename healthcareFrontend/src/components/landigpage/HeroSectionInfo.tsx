import WhyChooseCard from '../shared/Cards/WhyChooseCard'
import ShieldTick from '../../assets/shieldTick.svg?react'
import Award from '../../assets/award.svg?react'
import HeartHandeshake from '../../assets/heartHandeshake.svg?react'
import Oclock from '../../assets/oclock.svg?react'

const HeroSectionInfo = () => {
  return (
    <section className="grid justify-items-center w-full bg-gray-50 mt-[100px] pb-15">
      <div className="mt-[100px]">
        <h1 className="text-4xl font-bold text-center">Why Choose MediCare</h1>
        <p className="text-gray-500 text-md md:text-lg text-center mt-5">
          We combine medical expertise with genuine care to provide an
          exceptional
          <br className="hidden md:block" /> healthcare experience. technology.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-9 md:my-[50px] mx-2 md:mx-[150px]">
          <WhyChooseCard
            title="Patient Safety First"
            description="Rigorous protocols and state-of-the-art facilities ensure your safety at every step."
            icon={ShieldTick}
          />
          <WhyChooseCard
            title="Award-Winning Care"
            description="Recognized nationally for excellence in patient care and medical outcomes."
            icon={Award}
          />
          <WhyChooseCard
            title="Compassionate Team"
            description="Our dedicated staff treats every patient with empathy and respect."
            icon={HeartHandeshake}
          />
          <WhyChooseCard
            title="24/7 Emergency Care"
            description="Round-the-clock emergency services with rapid response times."
            icon={Oclock}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSectionInfo
