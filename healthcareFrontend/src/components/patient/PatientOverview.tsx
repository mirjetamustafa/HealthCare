import { Link } from 'react-router-dom'
import Button from '../shared/Button/Button'
import ShieldTick from '../../assets/shieldTick.svg?react'
import Download from '../../assets/download.svg?react'
import type { LabResult } from '../shared/tableLab/types'
import LabResultsTable from '../shared/tableLab/LabResultsTable'

const labData: LabResult[] = [
  {
    id: '1',
    testName: 'Complete Blood Count (CBC)',
    date: '1/20/2026',
    status: 'Completed',
    result: '	Normal',
  },
  {
    id: '2',
    testName: 'Lipid Panel',
    date: '1/20/2026',
    status: 'Completed',
    result: 'Borderline High',
  },
  {
    id: '3',
    testName: 'Thyroid Function Test',
    date: '1/18/2026',
    status: 'Completed',
    result: 'Normal',
  },
  {
    id: '4',
    testName: 'Hemoglobin A1C',
    date: '1/22/2026',
    status: 'Processing',
  },
  {
    id: '5',
    testName: 'Vitamin D Level',
    date: '1/23/2026',
    status: 'Pending',
  },
]

const PatientOverview = ({ setActiveTab }) => {
  return (
    <div className="flex p-20 gap-5">
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-xs p-9">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Lab Results</h2>
            <Button
              variant="default"
              className="flex items-center gap-2 hover:bg-gray-50 text-sm"
            >
              <Download className="w-4 h-4" />
              Download All
            </Button>
          </div>
          <div className="mt-9">
            <LabResultsTable data={labData} />
          </div>
        </div>
      </div>

      <div className="w-100 flex-none">
        <div className="bg-white rounded-xl shadow-xs p-5">
          <h2 className="text-xl text-gray-700 font-bold">Quick Actions</h2>
          <Link to="/appointments" className="my-5 block">
            <Button variant="active" className="w-full">
              Book Appointment
            </Button>
          </Link>
          <Link to="/healthAdvice" className="my-5 block">
            <Button variant="default" className="w-full hover:bg-gray-100">
              Get Health Advice
            </Button>
          </Link>
          <Link to="/healthAdvice" className="mt-5 mb-2 block">
            <Button variant="default" className="w-full hover:bg-gray-100">
              Message Your Doctor
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-xs p-5 mt-5">
          <h2 className="text-lg text-gray-900 font-semibold">
            Upcoming Appointments
          </h2>

          <div className="bg-gray-50 rounded-lg mt-5 p-5">
            <h3 className="text-md text-gray-700 font-medium">
              Dr. Sarah Johnson
            </h3>
            <p className="text-sm text-gray-400 my-1">Cardiology</p>
            <p className="text-sm text-[#0066CC]">2/10/2026 at 9:00 AM</p>
          </div>

          <div className="bg-gray-50 rounded-lg mt-5 p-5">
            <h3 className="text-md text-gray-700 font-medium">
              Dr. Amanda Foster
            </h3>
            <p className="text-sm text-gray-400 my-1">General Medicine</p>
            <p className="text-sm text-[#0066CC]">2/15/2026 at 2:30 PM</p>
          </div>

          <Button
            onClick={() => setActiveTab('myAppointments')}
            className="hover:bg-gray-100 w-full mt-5 text-sm text-gray-600"
          >
            View All Appointments
          </Button>
        </div>

        <div className="flex gap-4 bg-white border border-blue-100 rounded-xl p-5 mt-5">
          <ShieldTick className="w-13 h-13 text-blue-600 -mt-3" />
          <div className="">
            <h3 className="text-lg text-gray-900 font-semibold mb-1">
              Your Data is Protected
            </h3>
            <p className="text-sm text-gray-600">
              All your medical information is encrypted and stored securely in
              compliance with HIPAA regulations
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientOverview
