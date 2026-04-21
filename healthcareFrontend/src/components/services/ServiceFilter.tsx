import Input from '../shared/Input/Input'
import Search from '../../assets/Search.svg?react'
import Select from '../shared/Select/Select'
import { categories } from '../shared/categories'

const ServiceFilter = () => {
  return (
    <div className="sticky w-full top-20 z-50 bg-white border-b border-gray-200">
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center-safe m-2 ">
        <div className="p-5">
          <Input
            name="search"
            type="search"
            placeholder="Search services..."
            icon={<Search />}
            onChange={() => {}}
          />
        </div>

        <div className="p-5">
          <Select
            name="category"
            options={categories}
            onChange={() => {}}
            value=""
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceFilter
