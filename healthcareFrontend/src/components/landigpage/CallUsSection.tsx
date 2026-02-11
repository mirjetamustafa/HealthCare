import Button from '../shared/Button/Button'
import Phone from '../../assets/phone.svg?react'
import Calendar from '../../assets/calendar.svg?react'

const CallUsSection = () => {
  return (
    <section className=" bg-blue-600 py-16  px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl text-white  md:text-4xl mb-4 font-bold">
            Ready to Take the Next Step?
          </h2>
          <p className="text-base text-blue-200  md:text-lg">
            Book an appointment today and experience healthcare that puts{' '}
            <br className="hidden md:block" /> you first. Our team is ready to
            help you on your journey to better{' '}
            <br className="hidden md:block" /> health.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
          <Button variant="register" className="flex items-center gap-2">
            {' '}
            <Calendar className="w-4 h-4" /> Book an Appointment
          </Button>
          <Button
            variant="default"
            className="text-white text-lg hover:opacity-85 "
          >
            <Phone className="w-4 h-4" /> Call Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallUsSection
