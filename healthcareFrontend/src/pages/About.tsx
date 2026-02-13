import HeroInfoAbout from '../components/about/HeroInfoAbout'
import HeroSectionAbout from '../components/about/HeroSectionAbout'
import LeadershipTeam from '../components/about/LeadershipTeam'
import OurCore from '../components/about/OurCore'

const About = () => {
  return (
    <section className="">
      <HeroSectionAbout />
      <HeroInfoAbout />
      <OurCore />
      <LeadershipTeam />
    </section>
  )
}

export default About
