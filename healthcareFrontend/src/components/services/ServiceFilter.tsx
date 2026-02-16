import Input from '../shared/Input/Input'
import Search from '../../assets/Search.svg?react'
import Select, { type Option } from '../shared/Select/Select'

const ServiceFilter = () => {
  const categories: Option[] = [
    { label: 'All Departaments', value: 'all' },
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Pediatrics', value: 'pediatrics' },
    { label: 'Orthopedics', value: 'orthopedics' },
    { label: 'Neurology', value: 'neurology' },
    { label: 'General Medicine', value: 'general' },
    { label: 'Emergency Care', value: 'emergency' },
    { label: 'Radiology', value: 'radiology' },
    { label: 'Laboratory', value: 'laboratory' },
  ]
  return (
    <div className="sticky w-full top-20 z-50 bg-white shadow-md border-b border-gray-200">
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center-safe m-2 ">
        <div className="p-5">
          <Input
            type="search"
            placeholder="Search services..."
            icon={<Search />}
          />
        </div>

        <div className="p-5">
          <Select name="category" options={categories} />
        </div>
      </div>
    </div>
  )
}

export default ServiceFilter
