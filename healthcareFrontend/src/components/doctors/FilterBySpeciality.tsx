import { categories } from '../shared/categories'
import Select from '../shared/Select/Select'

const FilterBySpeciality = () => {
  return (
    <div className="sticky w-full top-20 z-50 bg-white border-b border-gray-200">
      <div className="flex gap-5 my-5 mx-[200px] ">
        <p className="font-medium text-gray-700 mt-2">Fiter by speciality:</p>
        <Select name="category" options={categories} />
      </div>
    </div>
  )
}

export default FilterBySpeciality
