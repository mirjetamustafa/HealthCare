import Select from '../shared/Select/Select'

const FilterBySpeciality = ({ departments }: { departments: string[] }) => {
  return (
    <div className="sticky w-full top-20 z-50 bg-white border-b border-gray-200">
      <div className="flex gap-5 my-5 mx-9 mt-9">
        <p className="font-medium text-gray-700 mt-1">Fiter by speciality:</p>
        <Select name="category" options={departments} />
      </div>
    </div>
  )
}

export default FilterBySpeciality
