import { useState } from 'react'
import SelectDoctor from '../components/bookAppointment/SelectDoctor'
import ChooseTime from '../components/bookAppointment/ChooseTime'
import YourDetails from '../components/bookAppointment/YourDetails'
import Phone from '../assets/phone.svg?react'
import Clock from '../assets/oclock.svg?react'
import Location from '../assets/mapPin.svg?react'
import ShieldTick from '../assets/shieldTick.svg?react'
import { useBookAppointment } from '../components/hook/useBookAppointment'
import type { DoctorResponse } from '../api/User/user.types'

interface BookAppointmentProps {
  doctors: DoctorResponse[]
}

const BookAppointment = ({ doctors }: BookAppointmentProps) => {
  const { step, setStep, appointmentData, setAppointmentData, handleSubmit } =
    useBookAppointment()
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

      <div className="flex flex-col-1 md:flex-col-2 gap-9 justify-center items-start bg-gray-50 p-9 md:p-30">
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

          {step === 1 && (
            <SelectDoctor
              setStep={setStep}
              doctors={doctors}
              appointmentData={appointmentData}
              setAppointmentData={setAppointmentData}
            />
          )}

          {step === 2 && (
            <ChooseTime
              setStep={setStep}
              appointmentData={appointmentData}
              setAppointmentData={setAppointmentData}
            />
          )}

          {step === 3 && (
            <YourDetails
              setStep={setStep}
              appointmentData={appointmentData}
              setAppointmentData={setAppointmentData}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
        <div className="w-150">
          <div className="bg-white rounded-xl shadow-xs p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need help?
            </h3>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-600" />
              <span className="text-gray-600">(123) 456-789</span>
            </p>

            <p className="flex items-start gap-2 mt-5">
              <Clock className="w-5 h-5 text-teal-600 mt-1" />
              <span className="text-gray-600">
                Mon - Fri: 8:00 AM - 8:00 PM <br /> Sat: 9:00 AM - 5:00 PM{' '}
                <br /> Sun: Emergency Only
              </span>
            </p>

            <p className="flex items-start gap-2 mt-5">
              <Location className="w-5 h-5 text-teal-600 mt-1" />
              <span className="text-gray-600">
                123 Medical Center Drive <br />
                Healthcare City, HC 12345
              </span>
            </p>
          </div>

          <div className="bg-white border border-blue-200 rounded-xl shadow-xs mt-5 p-5">
            <div className="flex items-start gap-2">
              <ShieldTick className="w-10 h-5 mt-1 text-[#0066CC]" />
              <div className="">
                <h3 className="text-gray-900 font-semibold text-lg mb-1">
                  Secure Booking
                </h3>
                <p className="text-sm text-gray-600 pr-12">
                  Your personal information is encrypted and secure. We'll send
                  confirmation via email and SMS.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xs p-5 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What to Bring
            </h3>

            <ul className="list-disc marker:text-teal-500 pl-5 text-gray-600 text-sm space-y-2">
              <li>Valid photo ID</li>
              <li>Insurance card (if applicable)</li>
              <li>List of current medications</li>
              <li>Previous medical records</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookAppointment
