import FilterBySpeciality from '../components/doctors/FilterBySpeciality'
import OurMedicalTeam from '../components/doctors/OurMedicalTeam'
import CardDoctor from '../components/shared/Cards/CardDoctor'
import Oclock from '../assets/oclock.svg?react'
import Graduation from '../assets/graduation.svg?react'
import Calendar from '../assets/calendar.svg?react'
import Button from '../components/shared/Button/Button'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div className="">
      <OurMedicalTeam />
      <FilterBySpeciality />
      <div className="grid grid-cols-1 bg-gray-50 md:grid-cols-4 gap-5 p-9 ">
        <CardDoctor
          img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
          name="Dr. Sarah Johnson"
          status="Cardiologist"
          experienceIcon={Oclock}
          experience="15 years experience"
          universityIcon={Graduation}
          university="Harvard Medical School"
          scheduleIcon={Calendar}
          schedule="Mon, Wed, Fri: 9:00 AM - 5:00 PM"
        >
          <Link to="/">
            <Button variant="default" className="text-sm">
              View Profile
            </Button>
          </Link>
          <Link to="/">
            <Button variant="active" className="text-sm">
              Book Now
            </Button>
          </Link>
        </CardDoctor>

        <CardDoctor
          img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
          name="Dr. Michael Chen"
          status="Pediatrician"
          experienceIcon={Oclock}
          experience="15 years experience"
          universityIcon={Graduation}
          university="Harvard Medical School"
          scheduleIcon={Calendar}
          schedule="Mon, Wed, Fri: 9:00 AM - 5:00 PM"
        >
          <Link to="/">
            <Button variant="default" className="text-sm">
              View Profile
            </Button>
          </Link>
          <Link to="/">
            <Button variant="active" className="text-sm">
              Book Now
            </Button>
          </Link>
        </CardDoctor>
        <CardDoctor
          img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
          name="Dr. Sarah Johnson"
          status="Cardiologist"
          experienceIcon={Oclock}
          experience="15 years experience"
          universityIcon={Graduation}
          university="Harvard Medical School"
          scheduleIcon={Calendar}
          schedule="Mon, Wed, Fri: 9:00 AM - 5:00 PM"
        >
          <Link to="/">
            <Button variant="default" className="text-sm">
              View Profile
            </Button>
          </Link>
          <Link to="/">
            <Button variant="active" className="text-sm">
              Book Now
            </Button>
          </Link>
        </CardDoctor>
        <CardDoctor
          img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
          name="Dr. Sarah Johnson"
          status="Cardiologist"
          experienceIcon={Oclock}
          experience="15 years experience"
          universityIcon={Graduation}
          university="Harvard Medical School"
          scheduleIcon={Calendar}
          schedule="Mon, Wed, Fri: 9:00 AM - 5:00 PM"
        >
          <Link to="/">
            <Button variant="default" className="text-sm">
              View Profile
            </Button>
          </Link>
          <Link to="/">
            <Button variant="active" className="text-sm">
              Book Now
            </Button>
          </Link>
        </CardDoctor>
        <CardDoctor
          img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
          name="Dr. Sarah Johnson"
          status="Cardiologist"
          experienceIcon={Oclock}
          experience="15 years experience"
          universityIcon={Graduation}
          university="Harvard Medical School"
          scheduleIcon={Calendar}
          schedule="Mon, Wed, Fri: 9:00 AM - 5:00 PM"
        >
          <Link to="/">
            <Button variant="default" className="text-sm">
              View Profile
            </Button>
          </Link>
          <Link to="/">
            <Button variant="active" className="text-sm">
              Book Now
            </Button>
          </Link>
        </CardDoctor>
        <CardDoctor
          img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
          name="Dr. Sarah Johnson"
          status="Cardiologist"
          experienceIcon={Oclock}
          experience="15 years experience"
          universityIcon={Graduation}
          university="Harvard Medical School"
          scheduleIcon={Calendar}
          schedule="Mon, Wed, Fri: 9:00 AM - 5:00 PM"
        >
          <Link to="/">
            <Button variant="default" className="text-sm">
              View Profile
            </Button>
          </Link>
          <Link to="/">
            <Button variant="active" className="text-sm">
              Book Now
            </Button>
          </Link>
        </CardDoctor>
      </div>
    </div>
  )
}

export default Doctors
