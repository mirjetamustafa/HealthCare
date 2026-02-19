import ContactForm from '../components/form/ContactForm'

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
        <div className="bg-white rounded-lg  p-9">
          <h3 className="text-2xl font-bold text-gray-700 my-5">
            Send Us a Message
          </h3>
          <ContactForm />
        </div>
        <div className="bg-white  ">hello</div>
      </div>
    </section>
  )
}

export default ContactUs
