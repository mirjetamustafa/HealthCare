import CardAbout from '../shared/Cards/CardAbout'
import Target from '../../assets/target.svg?react'
import Eye from '../../assets/eye.svg?react'

const HeroInfoAbout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-9 my-5 md:my-15 px-0 md:px-9">
      <CardAbout
        title="Our Mission"
        description="To provide compassionate, accessible, and high-quality healthcare services that improve the health and well-being of every patient we serve. We are committed to treating each individual with dignity and respect while delivering evidence-based medical care."
        icon={Target}
        status="our mission"
      />
      <CardAbout
        title="Our Vision"
        description="To provide compassionate, accessible, and high-quality healthcare services that improve the health and well-being of every patient we serve. We are committed to treating each individual with dignity and respect while delivering evidence-based medical care."
        icon={Eye}
        status="our vision"
      />
    </div>
  )
}

export default HeroInfoAbout
