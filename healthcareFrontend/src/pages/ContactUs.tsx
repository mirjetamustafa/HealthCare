import ContactForm from '../components/form/ContactForm'
import GetInTouchCard from '../components/getInTouch/GetInTouchCard'
import Phone from '../assets/phone.svg?react'
import Mail from '../assets/mail.svg?react'
import MapPin from '../assets/mapPin.svg?react'
import Oclock from '../assets/oclock.svg?react'

const ContactUs = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center bg-[#0066CC] h-100 text-center gap-4 px-4 py-0 md:pt-20">
        <h1 className="text-2xl md:text-5xl text-white font-bold">
          Contact Us
        </h1>
        <p className="text-blue-100 text-md md:text-xl max-w-2xl">
          Have questions? We're here to help. Reach out to us through any of the
          channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 justify-center bg-gray-50 p-9 md:p-30">
        <div className="bg-white rounded-lg py-5 px-9">
          <h3 className="text-2xl font-bold text-gray-700 my-5">
            Send Us a Message
          </h3>
          <ContactForm />
        </div>
        <div className="">
          <div className="bg-white rounded-lg py-5 px-9">
            <h3 className="text-2xl font-bold text-gray-700 my-5">
              Get in Touch
            </h3>
            <GetInTouchCard
              title="Phone"
              contact="(123) 456-7890"
              description="Emergency: (123) 456-7899"
              icon={Phone}
            />
            <GetInTouchCard
              title="Email"
              contact="info@medicare.com"
              description="appointments@medicare.com"
              icon={Mail}
            />
            <GetInTouchCard
              title="Address"
              contact="123 Medical Center Drive"
              description="Healthcare City, HC 12345"
              icon={MapPin}
            />
            <GetInTouchCard
              title="Office Hours"
              contact="Monday - Friday: 8:00 AM - 8:00 PM"
              description="Saturday: 9:00 AM - 5:00 PM"
              description1="Sunday: Emergency Only"
              icon={Oclock}
            />
          </div>

          <div className="bg-gray-200 grid h-56 justify-center content-center justify-items-center rounded-lg mt-9">
            <MapPin className="w-10 h-10 text-gray-400" />
            <p className="font-semibold text-gray-500">Interactive Map</p>
            <p className="text-sm text-gray-500">123 Medical Center Drive</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
