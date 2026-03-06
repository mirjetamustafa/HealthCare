import Oclock from '../../assets/oclock.svg?react'
import Graduation from '../../assets/graduation.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import { Link } from 'react-router-dom'
import CardDoctor from '../shared/Cards/CardDoctor'
import Button from '../shared/Button/Button'
import { useState } from 'react'
import DoctorProfileModal from './DoctorProfileModal'
import type { DoctorResponse } from '../../api/User/user.types'

type DoctrorProps = {
  doctors: DoctorResponse[]
}

const DoctorsCard = ({ doctors }: DoctrorProps) => {
  const [open, setOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorResponse | null>(
    null,
  )
  return (
    <div className="grid grid-cols-1  md:grid-cols-4 gap-5  ">
      {doctors?.map((doctor) => (
        <div key={doctor._id}>
          <CardDoctor
            img={doctor.img}
            name={doctor.name}
            status={doctor.specialization}
            experienceIcon={Oclock}
            experience={`${doctor.yearsOfExperience} years experience`}
            universityIcon={Graduation}
            university={doctor.education}
            scheduleIcon={Calendar}
            schedule={doctor.schedule}
          >
            <Button
              onClick={() => {
                setSelectedDoctor(doctor)
                setOpen(true)
              }}
              variant="default"
              className="text-sm hover:bg-gray-100"
            >
              View Profile
            </Button>

            <Link to="/">
              <Button variant="active" className="text-sm">
                Book Now
              </Button>
            </Link>
          </CardDoctor>
        </div>
      ))}

      {/* <CardDoctor
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
      </CardDoctor> */}

      <DoctorProfileModal
        isOpen={open}
        onClose={() => setOpen(false)}
        doctor={selectedDoctor}
      />
    </div>
  )
}

export default DoctorsCard
