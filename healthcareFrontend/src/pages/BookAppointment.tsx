import { useState } from 'react'
import SelectDoctor from '../components/bookAppointment/SelectDoctor'
import ChooseTime from '../components/bookAppointment/ChooseTime'
import YourDetails from '../components/bookAppointment/YourDetails'

const BookAppointment = () => {
  const [step, setStep] = useState(1)

  return (
    <section className="">
      <div className="flex flex-col justify-center items-center bg-[#0066CC] h-100 text-center gap-4 px-4 py-0 md:pt-20">
        <h1 className="text-2xl md:text-5xl text-white font-bold">
          Book an Appointment
        </h1>
        <p className="text-blue-100 text-md md:text-xl max-w-2xl">
          Schedule your visit with our expert physicians. Choose your preferred
          doctor, date, and time.
        </p>
      </div>

      <div className="flex flex-col-1 md:flex-col-2 gap-9 justify-center bg-gray-50 p-9 md:p-30">
        <div className="p-6 bg-white shadow rounded-xl w-full">
          <div className="flex items-center justify-between mb-8 p-5">
            <div className="">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-[#0066CC] text-white' : 'bg-gray-200'}`}
                >
                  1
                </div>
                <div
                  className={`flex h-1 mx-2 w-20 
            ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}
                ></div>
              </div>
              <span className="text-xs text-gray-600 ">Select Doctor</span>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-[#0066CC] text-white' : 'bg-gray-200'}`}
                >
                  2
                </div>
                <div
                  className={`flex h-1 mx-2 w-20 
            ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}
                ></div>
              </div>
              <span className="text-xs text-gray-600 ">Choose Time</span>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-[#0066CC] text-white' : 'bg-gray-200'}`}
                >
                  3
                </div>
              </div>
              <span className="text-xs text-gray-600 ">Your Details</span>
            </div>
          </div>

          {step === 1 && <SelectDoctor setStep={setStep} />}

          {step === 2 && <ChooseTime setStep={setStep} />}

          {step === 3 && <YourDetails setStep={setStep} />}
        </div>
        <div className="bg-gray-100 w-150">hello</div>
      </div>
    </section>
  )
}

export default BookAppointment
